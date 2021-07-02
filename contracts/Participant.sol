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

	mapping(address => uint256) public initiatedDeAuditData;

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
		uint indexDistrict,
		uint128 grams
	)  public view checkOwnerAndAccept {
		require(initiatedDeAuditData.exists(addressDeAuditData), 103);
		TvmCell body = tvm.encodeBody(IDeAuditData(addressDeAuditData).addMunicipalBody, nameMunicipalBody, indexDistrict);
		addressDeAuditData.transfer({value:grams, flag:0, bounce:true, body:body});
	}

	function addVotingPool(
		address addressDeAuditData,
		bytes nameVotingPool,
		uint indexDistrict,
		uint indexMunicipalBody,
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
		uint indexDistrict,
		uint indexMunicipalBody,
		uint indexVotingPool,
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

	// Function for get this contract TON gramms balance
  function thisBalance() private inline pure returns (uint128) {
    return address(this).balance;
  }

  // Function for external get this contract TON gramms balance
  function getBalance() public pure responsible returns (uint128) {
    return { value: 0, bounce: false, flag: 64 } thisBalance();
  }

}
