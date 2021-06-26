pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";

contract DeAuditData is IDeAuditData {

	address static public rootDeAudit;

	address public initiator;

	struct VotingTable {
		bytes name;
		bytes location;
	}

	struct Candidate {
		bytes name;
		uint256 votes;
	}


	mapping (uint256 => uint256[]) voting;
	mapping (uint256 => VotingTable) votingPoint;
	mapping (uint256 => Candidate) candidate;


	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkDeAuditRootAndAccept {
		require(msg.sender == rootDeAudit, 102);
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkInitiatorAndAccept {
		require(msg.sender == initiator, 103);
		tvm.accept();
		_;
	}


	// Init function.
	constructor(address initiatorAddr) public checkDeAuditRootAndAccept {
    initiator = initiatorAddr;
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkDeAuditRootAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
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
