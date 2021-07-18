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
import "./interfaces/ITONTokenWallet.sol";
import "./interfaces/ITokensReceivedCallback.sol";

contract Participant is IParticipant {

	address static public rootDeAudit;

	bytes public name;
	bytes public photoLink;
	bytes public dataLink;

	mapping(address => uint256) public initiatedDeAuditData;

	struct Activity {
		bool reg;
		uint8 atype;
		address[] act4Arr;
		address wallet;
	}

	mapping(address => Activity) public activities;

	address[] public walletsDC;



	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier onlyDeAuditRoot {
		require(msg.sender == rootDeAudit, 102);
		_;
	}

	modifier onlyDeAuditAfterReg {
		require(activities.exists(msg.sender), 104);
		_;
	}

	// Init function.
	constructor() public onlyDeAuditRoot {
	  string generatedName = format("Participant {}", address(this));
		name = bytes(generatedName);
		photoLink = bytes("no link");
		dataLink = bytes("no link");
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkOwnerAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function publishData(bytes publishName, bytes publishPhotoLink, bytes publishDataLink)  public checkOwnerAndAccept {
		name = publishName;
		photoLink = publishPhotoLink;
		dataLink = publishDataLink;
	}

	function getPublishedData()  public view returns (
		bytes pName,
		bytes pPhotoLink,
		bytes pDataLink,
		address pAddress,
		uint128 pBalance
	) {
		pName = name;
		pPhotoLink = photoLink;
		pDataLink = dataLink;
		pAddress = address(this);
		pBalance = thisBalance();
	}

	function initVoteAddActionTeamMember(address participantAddr, uint128 grams)  public view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).initVoteAddActionTeamMember, participantAddr);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function initVoteRemoveActionTeamMember(address participantAddr, uint128 grams) public view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).initVoteRemoveActionTeamMember, participantAddr);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function createDeAuditData(
		bytes nameDeAuditData,
		uint256 timeStart,
		uint256 colPeriod,
		uint256 valPeriod,
		uint128 colStake,
		uint128 valStake,
		uint128 grams
	) public view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).createDeAuditData, nameDeAuditData, timeStart, colPeriod, valPeriod, colStake, valStake);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function initVoteDeAudut(address addrDeAuditData, uint128 grams)  public  view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).initVoteDeAudut, addrDeAuditData);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function voteFor(uint256 voteId, uint128 grams)  public  view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).voteFor, voteId);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function voteAgainst(uint256 voteId, uint128 grams)  public  view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).voteAgainst, voteId);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function resultVote(uint256 voteId, uint128 grams)  public  view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).resultVote, voteId);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function sendTrigger(address addrDeAudit, address addrAct4, uint128 grams)  public view checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditRoot(rootDeAudit).sendTrigger, addrDeAudit, addrAct4);
		rootDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function setCreatedDeAuditData(address addressDeAuditData) public override onlyDeAuditRoot {
		tvm.accept();
		initiatedDeAuditData[addressDeAuditData] = uint256(now);
	}

	function addDistrict(address addressDeAuditData, bytes nameDistrict, uint128 grams)  public view checkOwnerAndAccept {
		require(initiatedDeAuditData.exists(addressDeAuditData), 103);
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addDistrict, nameDistrict);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addMunicipalBody(
		address addressDeAuditData,
		bytes nameMunicipalBody,
		uint256 indexDistrict,
		uint128 grams
	)  public view checkOwnerAndAccept {
		require(initiatedDeAuditData.exists(addressDeAuditData), 103);
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addMunicipalBody, nameMunicipalBody, indexDistrict);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addVotingPool(
		address addressDeAuditData,
		bytes nameVotingPool,
		uint256 indexDistrict,
		uint256 indexMunicipalBody,
		uint128 grams
	)  public  view checkOwnerAndAccept {
		require(initiatedDeAuditData.exists(addressDeAuditData), 103);
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addVotingPool, nameVotingPool, indexDistrict, indexMunicipalBody);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addVotingCenter(
		address addressDeAuditData,
		bytes nameVotingCenter,
		bytes location,
		uint256 indexDistrict,
		uint256 indexMunicipalBody,
		uint256 indexVotingPool,
		uint128 grams
	)   public  view checkOwnerAndAccept {
		require(initiatedDeAuditData.exists(addressDeAuditData), 103);
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addVotingCenter, nameVotingCenter, location, indexDistrict, indexMunicipalBody, indexVotingPool);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addCandidate(
		address addressDeAuditData,
		bytes nameCandidate,
		uint128 grams
	) public pure checkOwnerAndAccept {
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addCandidate, nameCandidate);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addCollation(
		address addressDeAudit,
		uint256 indexVotingCenter,
		bytes linkToCollationPhoto,
		uint256[] voteMatrix,
		uint128 grams
	) public checkOwnerAndAccept {
		Activity cv = activities[addressDeAudit];
		cv.reg = true;
		cv.atype = 0;
		activities[addressDeAudit] = cv;
		TvmCell body = tvm.encodeBody(IDeAudit(addressDeAudit).addCollation, indexVotingCenter, linkToCollationPhoto, voteMatrix);
		addressDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}


	function registrationForValidation(
		address addressDeAudit,
		uint128 grams
	) public checkOwnerAndAccept {
		Activity cv = activities[addressDeAudit];
		cv.reg = true;
		cv.atype = 1;
		activities[addressDeAudit] = cv;
		TvmCell body = tvm.encodeBody(IDeAudit(addressDeAudit).registrationForValidation);
		addressDeAudit.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function receiveDeAuditMsg(address[] act4Arr, address walletDeAudit) public override onlyDeAuditAfterReg {
		tvm.accept();
		address addressDeAudit = msg.sender;
		Activity cv = activities[addressDeAudit];
		cv.act4Arr = act4Arr;
		cv.wallet = walletDeAudit;
		activities[addressDeAudit] = cv;
		walletsDC.push(walletDeAudit);
	}

	// Function for get this contract TON gramms balance
	function thisBalance() private inline pure returns (uint128) {
		return address(this).balance;
	}

	// Function for external get this contract TON gramms balance
	function getBalance() public pure responsible returns (uint128) {
		return { value: 0, bounce: false, flag: 64 } thisBalance();
	}

}
