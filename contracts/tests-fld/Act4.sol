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
	uint256 static public idVotingCenter;
	uint8 static public vcms;
	uint256 static public lvfc;
	address static public collator;
	bytes static public collatorPhotoLink;
	uint256[] static public voteMatrix;

	mapping(address => bool) public validator;
	uint256 public countValidators;
	address[] public validatorsFor;
	address[] public validatorsAgainst;

	uint128 constant public GRAMS_VALIDATE = 0.5 ton;

	// Vote count model selector
	// Majority = 0;
	// SoftMajority = 1;
	// SuperMajority = 2;
	uint8 constant public VOTE_COUNT_MODEL_MAJORITY = 0;
	uint8 constant public VOTE_COUNT_MODEL_SOFT_MAJORITY = 1;
	uint8 constant public VOTE_COUNT_MODEL_SUPER_MAJORITY = 2;



	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the parent DeAuditData.
	modifier onlyDeAuditData {
		require(msg.sender == dataDeAudit, 101);
		_;
	}

	// Modifier that allows public function to accept external calls only from the validator.
	modifier onlyValidatorOnce {
		require(validator.exists(msg.sender) && validator[msg.sender] != true, 103);
		_;
	}

	// Init function.
	constructor() public onlyDeAuditData {
		countValidators = 0;
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function trigger(address member) public override onlyDeAuditData {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		uint32 yesCount = uint32(validatorsFor.length);
		uint32 noCount = uint32(validatorsAgainst.length);
		uint32 totalVoters = uint32(countValidators);
		bool resultCalculateVotes = calculateVotes(yesCount, noCount, totalVoters, vcms);
		if (resultCalculateVotes == true){
			TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receivePositivResultFromAct4, voteMatrix, validatorsAgainst, member);
			dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
		} else {
			TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receiveNegativeResultFromAct4, collator, validatorsFor, member);
			dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
		}
	}

	// Vote count model selector
	// Majority = 0;
	// SoftMajority = 1;
	// SuperMajority = 2;
	function calculateVotes(uint32 yes, uint32 no, uint32 total, uint8 selector) private inline pure returns (bool) {
		bool passed = false;
		if (selector == VOTE_COUNT_MODEL_MAJORITY) {
			passed = (yes > no);
		} else if (selector == VOTE_COUNT_MODEL_SOFT_MAJORITY) {
			passed = (yes * total * 10 >= total * total + no * (8 * total  + 20));
		} else if (selector == VOTE_COUNT_MODEL_SUPER_MAJORITY) {
			passed = (yes * total * 3 >= total * total + no * (total + 6));
		}
		return passed;
	}

	function amountOfVoters() private inline view returns (uint256) {
		return validatorsFor.length + validatorsAgainst.length;
	}

	function voteFor() public override onlyValidatorOnce {
		require(!(msg.value < GRAMS_VALIDATE), 104);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address cv = msg.sender;
    validator[cv] = true;
		validatorsFor.push(cv);
		if (amountOfVoters() < lvfc) {
			cv.transfer({ value: 0, flag: 128});
		} else {
			uint32 yesCount = uint32(validatorsFor.length);
			uint32 noCount = uint32(validatorsAgainst.length);
			uint32 totalVoters = uint32(countValidators);
			bool resultCalculateVotes = calculateVotes(yesCount, noCount, totalVoters, vcms);
			if (resultCalculateVotes == true){
				TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receivePositivResultFromAct4, voteMatrix, validatorsAgainst, cv);
				dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
			} else {
				TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receiveNegativeResultFromAct4, collator, validatorsFor, cv);
				dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
			}
		}
	}

	function voteAgainst() public override onlyValidatorOnce {
		require(!(msg.value < GRAMS_VALIDATE), 104);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address cv = msg.sender;
    validator[cv] = true;
		validatorsAgainst.push(cv);
		if (amountOfVoters() < lvfc) {
			cv.transfer({ value: 0, flag: 128});
		} else {
			uint32 yesCount = uint32(validatorsFor.length);
			uint32 noCount = uint32(validatorsAgainst.length);
			uint32 totalVoters = uint32(countValidators);
			bool resultCalculateVotes = calculateVotes(yesCount, noCount, totalVoters, vcms);
			if (resultCalculateVotes == true){
				TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receivePositivResultFromAct4, voteMatrix, validatorsAgainst, cv);
				dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
			} else {
				TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receiveNegativeResultFromAct4, collator, validatorsFor, cv);
				dataDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
			}
		}
	}

	function resultVote(uint128 gramsToDeAuditData, address gasPayeerAddr) private view inline {
		uint32 yesCount = uint32(validatorsFor.length);
		uint32 noCount = uint32(validatorsAgainst.length);
		uint32 totalVoters = uint32(countValidators);
		bool resultCalculateVotes = calculateVotes(yesCount, noCount, totalVoters, vcms);
		if (resultCalculateVotes == true){
			TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receivePositivResultFromAct4, voteMatrix, validatorsAgainst, gasPayeerAddr);
			dataDeAudit.transfer({value: gramsToDeAuditData, flag: 0, bounce:true, body:body});
		} else {
			TvmCell body = tvm.encodeBody(IDeAuditData(dataDeAudit).receiveNegativeResultFromAct4, collator, validatorsFor, gasPayeerAddr);
			dataDeAudit.transfer({value: gramsToDeAuditData, flag: 0, bounce:true, body:body});
		}
	}

	function setValidator(address participant) public override onlyDeAuditData {
		tvm.rawReserve(address(this).balance - msg.value, 2);
    validator[participant] = false;
		countValidators ++;
		participant.transfer({ value: 0, flag: 128});
	}

  function thisBalance() private inline  pure returns (uint128) {
    return address(this).balance;
  }

  function getBalance() public pure responsible returns (uint128) {
    return { value: 0, bounce: false, flag: 64 } thisBalance();
  }

}
