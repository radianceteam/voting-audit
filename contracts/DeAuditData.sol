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
	address static public initiator;
	bytes static public name;

	mapping(address => address) public act4;

	struct VotingCenter {
		bytes name;
		bytes location;
	}

	struct VotingPool {
		bytes name;
		uint256[] votingCentersArr;
	}

	struct MunicipalBody {
		bytes name;
		uint256[] votingPoolsArr;
	}

	struct District {
		bytes name;
		uint256[] municipalBodiesArr;
	}

	mapping (uint256 => VotingCenter) votingCenter;
	mapping (uint256 => VotingPool) votingPool;
	mapping (uint256 => MunicipalBody) municipalBody;
	mapping (uint256 => District) district;

	struct Candidate {
		bytes name;
		uint256 votes;
	}

	mapping (uint256 => Candidate) candidate;

	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows to accept external calls only from the DeAuditRoot.
	modifier checkDeAuditRoot {
		require(msg.sender == rootDeAudit, 102);
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkInitiator {
		require(msg.sender == initiator, 103);
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

	function triggerToAct4(address addrAct4, address member) public override checkDeAuditRoot {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		if (act4.exists(addrAct4)) {
			TvmCell body = tvm.encodeBody(IAct4(addrAct4).trigger, member);
			addrAct4.transfer({value: 0, flag: 128, bounce:true, body:body});
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

}
