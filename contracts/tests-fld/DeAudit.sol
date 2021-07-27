pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";
import "./interfaces/IRootTokenContract.sol";
import "./interfaces/IExpectedWalletAddressCallback.sol";
import "./interfaces/ITONTokenWallet.sol";
import "./interfaces/ITokensReceivedCallback.sol";
import "./interfaces/IBurnTokensCallback.sol";
import "./interfaces/IBurnableByRootTokenRootContract.sol";

contract DeAudit is IDeAudit, IExpectedWalletAddressCallback {

	uint32 static public sequentialNumber;
	bytes static public name;
	address static public rootDeAudit;
	address static public dataDeAudit;
	address static public tokenDeAudit;
	uint256 static public timeStart;
	uint256 static public colPeriod;
	uint256 static public valPeriod;
	uint128 static public colStake;
	uint128 static public valStake;
	uint8 static public vcms;

	bool public withdrawOpenStatus;

	mapping (address => uint128) public stakeOf;
	uint128 public totalStaked;
	mapping (address => address) public walletOf;
	mapping (address => address[]) public msgForParticipant;

	// Grams constants
	uint128 constant public GRAMS_COLLATE = 1.5 ton;
	uint128 constant public GRAMS_VALIDATION_REG = 0.5 ton;
	uint128 constant GRAMS_MINT = 0.05 ton;
	uint128 constant GRAMS_BURN = 0.2 ton;


	// Collation callback types
	uint8 constant public DATA_INCORRECT = 0;
	uint8 constant public SUCCESS_COLLATION = 1;

	// Modifier
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	// Modifier
	modifier onlyDeAuditRoot {
		require(msg.sender == rootDeAudit, 103);
		_;
	}

	// Modifier
	modifier onlyDeAuditData {
		require(msg.sender == dataDeAudit, 104);
		_;
	}

	// Modifier
	modifier onlyTokenRoot {
		require(msg.sender == tokenDeAudit, 105);
		_;
	}

	// Modifier
	modifier onlyCollationPeriod {
		uint256 ts = uint256(now);
		require(!(ts < timeStart) && !(ts > (timeStart + colPeriod + valPeriod)), 106);
		_;
	}

	// Modifier
	modifier onlyValidationPeriod {
		uint256 ts = uint256(now);
		require(!(ts < (timeStart + colPeriod)) && !(ts > (timeStart + colPeriod + valPeriod)), 106);
		_;
	}

	// Modifier
	modifier onlyStakeHolder {
		require(stakeOf.exists(msg.sender), 110);
		_;
	}

	// Init function.
	constructor() public onlyDeAuditRoot {
		withdrawOpenStatus = false;
	}

	function getDetails() override external view responsible returns (IDeAuditDetails) {
		return { value: 0, bounce: false, flag: 64 } IDeAuditDetails(
			sequentialNumber,
			name,
			rootDeAudit,
			dataDeAudit,
			tokenDeAudit,
			timeStart,
			colPeriod,
			valPeriod,
			colStake,
			valStake
		);
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) private inline pure {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function addCollation(uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix) public override onlyCollationPeriod {
		require(!(msg.value < (colStake + GRAMS_COLLATE)) && !stakeOf.exists(msg.sender), 107);
		tvm.rawReserve(address(this).balance + colStake - msg.value, 2);
		stakeOf[msg.sender] = colStake;
		TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).setCollation, msg.sender, indexVotingCenter, linkToCollationPhoto, voteMatrix, vcms);
		dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
	}

	function collationCallback(uint8 statusCollation, address addressCollator, address[] msgData) public override onlyDeAuditData {
		if (statusCollation == SUCCESS_COLLATION) {
			uint128 valueMsg = msg.value;
			tvm.rawReserve(address(this).balance - valueMsg, 2);
			uint128 gramsToNewWallet = valueMsg / 8;
			uint128 gramsToRoot = gramsToNewWallet * 3;
			msgForParticipant[addressCollator] = msgData;
			TvmCell bodyD = tvm.encodeBody(IRootTokenContract(tokenDeAudit).deployEmptyWallet, gramsToNewWallet, 0, addressCollator, addressCollator);
			tokenDeAudit.transfer({value:gramsToRoot, bounce:true, body:bodyD});
			TvmCell bodyA = tvm.encodeBody(IRootTokenContract(tokenDeAudit).sendExpectedWalletAddress, 0, addressCollator, address(this));
			tokenDeAudit.transfer({value:0, flag: 128, bounce:true, body:bodyA});
		} else if (statusCollation == DATA_INCORRECT) {
			tvm.accept();
			uint128 stakeValue = stakeOf[addressCollator];
			delete stakeOf[addressCollator];
			addressCollator.transfer({value: msg.value + stakeValue, flag: 0, bounce:true});
		}
	}

	// Function for callback with address from Root Token Contract
	function expectedWalletAddressCallback(address wallet, uint256 wallet_public_key, address owner_address) public override onlyTokenRoot {
		require(msg.sender == tokenDeAudit && wallet_public_key == 0 && stakeOf.exists(owner_address), 108);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		uint128 stakeValue = stakeOf[owner_address];
		address[] msgFP = msgForParticipant[owner_address];
		walletOf[owner_address] = wallet;
		totalStaked += stakeValue;
		TvmCell body = tvm.encodeBody(IRootTokenContract(tokenDeAudit).mint, stakeValue, wallet);
		tokenDeAudit.transfer({value: GRAMS_MINT, bounce:true, body:body});
		TvmCell bodyP = tvm.encodeBody(IParticipant(owner_address).receiveDeAuditMsg, msgFP, wallet);
		delete msgForParticipant[owner_address];
		owner_address.transfer({value: 0, bounce:true, flag: 128, body:bodyP});
	}

	function registrationForValidation() public override onlyValidationPeriod {
		address validator = msg.sender;
		uint128 msgValue = msg.value;
		require(!stakeOf.exists(validator) && !(msgValue < valStake + GRAMS_VALIDATION_REG), 109);
		uint128 qtyValidations = msgValue / (valStake + GRAMS_VALIDATION_REG);
		tvm.rawReserve(address(this).balance + qtyValidations * valStake - msgValue, 2);
		uint128 stakeValue = qtyValidations * valStake;
		stakeOf[validator] = stakeValue;
		TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).setValidationForParticipant, validator, qtyValidations);
		dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
	}

	function regForValidationCallback(address addressValidator, address[] msgData) public override onlyDeAuditData {
		uint128 valueMsg = msg.value;
		uint128 qtySettedVals = uint128(msgData.length);
		if (qtySettedVals > 0) {
			uint128 returnValue = stakeOf[addressValidator] - (qtySettedVals * valStake);
			if (returnValue > 0) {
				tvm.rawReserve(address(this).balance - valueMsg - returnValue, 2);
				stakeOf[addressValidator] -= returnValue;
				msgForParticipant[addressValidator] = msgData;
				uint128 gramsToNewWallet = valueMsg / 8;
				uint128 gramsToRoot = gramsToNewWallet * 3;
				TvmCell bodyD = tvm.encodeBody(IRootTokenContract(tokenDeAudit).deployEmptyWallet, gramsToNewWallet, 0, addressValidator, addressValidator);
				tokenDeAudit.transfer({value:gramsToRoot, bounce:true, body:bodyD});
				TvmCell bodyA = tvm.encodeBody(IRootTokenContract(tokenDeAudit).sendExpectedWalletAddress, 0, addressValidator, address(this));
				tokenDeAudit.transfer({value: gramsToRoot, bounce:true, body:bodyA});
				addressValidator.transfer({value: 0, flag: 128, bounce:true});
			} else {
				tvm.rawReserve(address(this).balance - valueMsg, 2);
				msgForParticipant[addressValidator] = msgData;
				uint128 gramsToNewWallet = valueMsg / 8;
				uint128 gramsToRoot = gramsToNewWallet * 3;
				TvmCell bodyD = tvm.encodeBody(IRootTokenContract(tokenDeAudit).deployEmptyWallet, gramsToNewWallet, 0, addressValidator, addressValidator);
				tokenDeAudit.transfer({value:gramsToRoot, bounce:true, body:bodyD});
				TvmCell bodyA = tvm.encodeBody(IRootTokenContract(tokenDeAudit).sendExpectedWalletAddress, 0, addressValidator, address(this));
				tokenDeAudit.transfer({value: 0, flag: 128, bounce:true, body:bodyA});
			}
		} else {
			uint128 stakeValue = stakeOf[addressValidator];
			delete stakeOf[addressValidator];
			tvm.rawReserve(address(this).balance - valueMsg - stakeValue, 2);
			addressValidator.transfer({value: 0, flag: 128, bounce:true});
		}
	}

	function triggerToDeAuditData(address addrAct4, address member) public override onlyDeAuditRoot {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		uint256 ts = uint256(now);
		if ( ts > (timeStart + colPeriod + valPeriod)) {
			TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).triggerToAct4, addrAct4, member);
			dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
		} else {
			member.transfer({value: 0, flag: 128, bounce:true});
		}
	}

	// Function for get this contract TON gramms balance
	function thisBalance() private inline  pure returns (uint128) {
		return address(this).balance;
	}

	// Function for external get this contract TON gramms balance
	function getBalance() public pure responsible returns (uint128) {
		return { value: 0, bounce: false, flag: 64 } thisBalance();
	}

	function burnTokens(address[] addressParticipantArr, address gasPayeerAddress, bool statusWithraw) public override onlyDeAuditData {
		uint128 msgValue = msg.value;
		tvm.rawReserve(address(this).balance - msgValue, 2);
		withdrawOpenStatus = statusWithraw;
		if (addressParticipantArr.length > 0) {
			uint128 msgToRootGrams = msgValue / (uint128(addressParticipantArr.length) + 1);
			for (address participant : addressParticipantArr) {
				uint128 participantStake = stakeOf[participant];
				delete stakeOf[participant];
				totalStaked -= participantStake;
				TvmCell payload;
				TvmCell body = tvm.encodeBody(IBurnableByRootTokenRootContract(tokenDeAudit).proxyBurn, participantStake, participant, gasPayeerAddress, address(0), payload);
				tokenDeAudit.transfer({value:msgToRootGrams, flag: 0, bounce:true, body:body});
			}
			gasPayeerAddress.transfer({value: 0, flag: 128, bounce: true});
		} else {
			gasPayeerAddress.transfer({value: 0, flag: 128, bounce: true});
		}
	}

	function shareOf(address participantAddr) public view returns (uint128) {
		uint128 participantShares = stakeOf[participantAddr];
		uint128 totalShares = totalStaked;
		uint128 balanceDeAudit = address(this).balance;
		return participantShares * ( balanceDeAudit / totalShares );
	}

	function getRewardAndStakeBack() public override onlyStakeHolder {
		require(!(msg.value < GRAMS_BURN), 111);
		address participantAddr = msg.sender;
		if (withdrawOpenStatus == true) {
			tvm.rawReserve(address(this).balance - shareOf(participantAddr) - msg.value, 2);
			uint128 participantShares = stakeOf[participantAddr];
			delete stakeOf[participantAddr];
			totalStaked -= participantShares;
			TvmCell payload;
			TvmCell body = tvm.encodeBody(IBurnableByRootTokenRootContract(tokenDeAudit).proxyBurn, participantShares, participantAddr, participantAddr, address(0), payload);
			tokenDeAudit.transfer({value: GRAMS_BURN, flag: 0, bounce: true, body:body});
			participantAddr.transfer({value: 0, flag: 128, bounce: true});
		} else {
			tvm.rawReserve(address(this).balance - msg.value, 2);
			participantAddr.transfer({value: 0, flag: 128, bounce: true});
		}
	}

	function getDetails4Debot() public view returns (
		uint32 sequentialNumber4Debot,
		bytes  name4Debot,
		address rootDeAudit4Debot,
		address dataDeAudit4Debot,
		address tokenDeAudit4Debot,
		uint256 timeStart4Debot,
		uint256 colPeriod4Debot,
		uint256 valPeriod4Debot,
		uint128 colStake4Debot,
		uint128 valStake4Debot
	) {
		sequentialNumber4Debot = sequentialNumber;
		name4Debot = name;
		rootDeAudit4Debot = rootDeAudit;
		dataDeAudit4Debot = dataDeAudit;
		tokenDeAudit4Debot = tokenDeAudit;
		timeStart4Debot = timeStart;
		colPeriod4Debot = colPeriod;
		valPeriod4Debot = valPeriod;
		colStake4Debot = colStake;
		valStake4Debot = valStake;
	}

}
