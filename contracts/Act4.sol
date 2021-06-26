pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";

contract Act4 is IAct4 {

	address static public rootDeAudit;
	address static public dataDeAudit;
	address static public collator;

	mapping(address => bool) public validator;
	uint256 public countValidators;
	uint256 public countValidationsFor;
	uint256 public countValidationsAgainst;

	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkDeAuditData {
		require(msg.sender == dataDeAudit, 101);
		_;
	}

	// Init function.
	constructor() public {
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkDeAuditData {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function trigger(address member) public override checkDeAuditData {
		tvm.rawReserve(address(this).balance - msg.value, 2);
	// Here logic for cancel Act4 by Action Team
	// 1)  send msg to DeAuditData for delete collator
	// 2)  send msg to DeAuditData for burn collator's tokens
	// 2)  send msg to DeAuditData for burn valaidator's tokens and return stacke
		member.transfer({value: 0, flag: 128, bounce:true});
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
