pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";

contract DeAudit is IDeAudit {

	address static public rootDeAudit;
	address static public dataDeAudit;
	address static public tokenDeAudit;

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
	modifier checkDeAuditRoot {
		require(msg.sender == rootDeAudit, 102);
		_;
	}


	// Init function.
	constructor() public {
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkOwnerAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function triggerToDeAuditData(address addrAct4, address member) public override checkDeAuditRoot {
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
