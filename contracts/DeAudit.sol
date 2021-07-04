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
import "./interfaces/IBurnTokensCallback.sol";

contract DeAudit is IDeAudit {

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
		require(msg.sender == rootDeAudit, 103);
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier onlyDeAuditData {
		require(msg.sender == dataDeAudit, 104);
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier onlyTokenRoot {
		require(msg.sender == tokenDeAudit, 105);
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier onlyCollationPeriod {
		require(!(uint256(now) > (timeStart+colPeriod)), 106);
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier onlyValidationPeriod {
		require(!(uint256(now) < (timeStart+colPeriod)) && !(uint256(now) > (timeStart+colPeriod+valPeriod)), 106);
		_;
	}

	// Init function.
	constructor() public {
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

	function triggerToDeAuditData(address addrAct4, address member) public override onlyDeAuditRoot {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).triggerToAct4, addrAct4, member);
		dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
	}

	// Function for get this contract TON gramms balance
	function thisBalance() private inline  pure returns (uint128) {
		return address(this).balance;
	}

	// Function for external get this contract TON gramms balance
	function getBalance() public pure responsible returns (uint128) {
		return { value: 0, bounce: false, flag: 64 } thisBalance();
	}

}
