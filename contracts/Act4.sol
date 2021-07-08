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
	uint256 static public vcms;
	address static public collator;
	bytes static public collatorPhotoLink;
	uint256[] static public voteMatrix;

  bytes[] public additionalPhotoLinkArr;

	mapping(address => bool) public validator;
	uint256 public countValidators;
	uint256 public countValidationsFor;
	uint256 public countValidationsAgainst;

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
		countValidationsFor = 0;
		countValidationsAgainst = 0;
	}

	// Function to receive plain transfers.
	receive() external {
	}

	function trigger(address member) public override onlyDeAuditData {
		tvm.rawReserve(address(this).balance - msg.value, 2);
	// Here logic for cancel Act4 by Action Team
	// 1)  send msg to DeAuditData for delete collator
	// 2)  send msg to DeAuditData for burn collator's tokens
	// 2)  send msg to DeAuditData for burn valaidator's tokens and return stacke
		member.transfer({value: 0, flag: 128, bounce:true});
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

	function voteFor() public override onlyValidatorOnce {
		require(!(msg.value < GRAMS_VALIDATE), 104);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address cv = msg.sender;
    validator[cv] = true;
		countValidationsFor ++;
		cv.transfer({ value: 0, flag: 128});
	}

	function voteAgainst() public override onlyValidatorOnce {
		require(!(msg.value < GRAMS_VALIDATE), 104);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address cv = msg.sender;
    validator[cv] = true;
		countValidationsAgainst ++;
		cv.transfer({ value: 0, flag: 128});
	}

	function addToAdditionalPhotoLinkArr(bytes linkToPhoto, address participant) public override onlyDeAuditData {
		tvm.rawReserve(address(this).balance - msg.value, 2);
		additionalPhotoLinkArr.push(linkToPhoto);
		participant.transfer({ value: 0, flag: 128});
	}

  function thisBalance() private inline  pure returns (uint128) {
    return address(this).balance;
  }

  function getBalance() public pure responsible returns (uint128) {
    return { value: 0, bounce: false, flag: 64 } thisBalance();
  }

}
