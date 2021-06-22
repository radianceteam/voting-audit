pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./Participant.sol";
import "./interfaces/IDeAuditRoot.sol";

// AT smart contract (ATSC) – an SMV-based smart contract system (see link 1to the reference implementation),
// which has additional specific functionality described in this specification.
// ATSC represents AT and could be a root for several DeAudit smart contracts.
// Details of its deployment are presented below.
contract DeAuditRoot is IDeAuditRoot {

	uint256 static public soUINT;
	TvmCell static public codeParticipant;

	TvmCell public codeListOfCandidates;
	TvmCell public codeListOfVotingCenters;
	TvmCell public codeDeAudit;
	TvmCell public codeAct4Collation;
	TvmCell public codeVotingCentre;

	mapping(address => uint256) public memberActionTeam;
	uint256 votersTotal;

	mapping(address => uint128) public balanceOf;
	mapping(uint256 => address) public giverFor;

	mapping(uint256 => address) public participantAddr;
	mapping(address => uint256) public participantPubKey;
	address[] public participantArr;

	uint128 public deployFee;
	uint256 public votingDuration;
	uint8 public voteCountModel;

	struct Vote {
		address initiator;
		uint256 startTime;
		uint256 duration;
		uint8 vcmc;
		address[] yes;
		address[] no;
		address participant
		uint8 type;
		bool completed;

	}

	mapping(uint256 => Vote) public vote;
	uint256[] voteKeys;

	// Grams constants
	uint128 constant public GRAMS_CREATE_PARTICIPANT = 1 ton;
	uint128 constant public GRAMS_INIT_VOTE = 1 ton;

	// Vote count model selector
	// Majority = 0;
	// SoftMajority = 1;
	// SuperMajority = 2;
	uint8 constant public VOTE_COUNT_MODEL_MAJORITY = 0;
	uint8 constant public VOTE_COUNT_MODEL_SOFT_MAJORITY = 1;
	uint8 constant public VOTE_COUNT_MODEL_SUPER_MAJORITY = 2;

	// Action types
	uint8 constant public ADD_MEMBER_ACTION_TEAM = 0;
	uint8 constant public REMOVE_MEMBER_ACTION_TEAM = 1;
	uint8 constant public LAUNCH_DE_AUDIT = 2;

	// Modifier that allows public function to accept external calls always.
	modifier alwaysAccept {
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external signed calls only.
	modifier checkPubkeyAndAccept {
		require(msg.pubkey() != 0, 101);
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier checkOwnerAndAccept {
		require(msg.pubkey() == tvm.pubkey(), 102);
		tvm.accept();
		_;
	}

	// Modifier that allows public function to accept external calls only from the contract owner.
	modifier OnlyActionTeamMember {
		require(memberActionTeam.exists(msg.sender), 105);
		_;
	}

	// Init function.
	constructor(uint8 arg0) public {
		uint256 creatorPubKey = msg.pubkey();
		require(creatorPubKey != 0 && creatorPubKey == tvm.pubkey(), 103);
		tvm.accept();
		address creatorAddr = createParticipant(creatorPubKey, 0, false, GRAMS_CREATE_PARTICIPANT);
		memberActionTeam[creatorAddr] = 1;
	  votersTotal ++;
		require(arg0 = 0 || arg0 = 1 || arg0 = 2, 108);
		voteCountModel = arg0;
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkOwnerAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
		balanceOf[msg.sender] += msg.value;
	}

	function setCodeListOfCandidates(TvmCell code) public checkOwnerAndAccept {
		codeListOfCandidates = code;
	}

	function setCodeListOfVotingCenters(TvmCell code) public checkOwnerAndAccept {
		codeListOfVotingCenters = code;
	}

	function setCodeDeAudit(TvmCell code) public checkOwnerAndAccept {
		codeDeAudit = code;
	}

	function setCodeAct4Collation(TvmCell code) public checkOwnerAndAccept {
		codeAct4Collation = code;
	}

	function setCodeVotingCentre(TvmCell code) public checkOwnerAndAccept {
		codeVotingCentre = code;
	}

	function setDeployFee(uint128 arg0) public checkOwnerAndAccept {
		deployFee = arg0;
	}

	function setVotingDuration(uint128 arg0) public checkOwnerAndAccept {
		votingDuration = arg0;
	}

	function setGiver(address giverAddr) public checkPubkeyAndAccept {
		giverFor[msg.pubkey()] = giverAddr;
	}

	function computeParticipantAddress(uint256 pubkey) private inline view returns (address) {
		TvmCell stateInit = tvm.buildStateInit({
			contr: Participant,
			varInit: {rootDeAudit:address(this)},
			code: codeParticipant,
			pubkey: pubkey
		});
		return address(tvm.hash(stateInit));
	}

	function getParticipantAddress(uint256 participantPubKey) public view responsible returns (address) {
		return { value: 0, bounce: false, flag: 64 } computeParticipantAddress(participantPubKey);
	}

	function createParticipant(uint256 pubkey, uint16 flag, bool bounce, uint128 value) private inline view returns (address deployedAddress){
		deployedAddress = address(0);
		TvmCell stateInit = tvm.buildStateInit({
			contr: Participant,
			varInit: {rootDeAudit:address(this)},
			code: codeParticipant,
			pubkey: pubkey
		});
		deployedAddress = new Participant{
			stateInit: stateInit,
			flag: flag,
			bounce : bounce,
			value : value
		}();
		participantAddr[pubkey] = deployedAddress;
		participantPubKey[deployedAddress] = pubkey;
		participantArr.push(deployedAddress);
	}

	function deployParticipant(uint256 pubkey) public alwaysAccept returns (address deployedAddress, bool statusDeploy){
		statusDeploy = false;
		deployedAddress = address(0);
		uint128 prepay = balanceOf[giverFor[pubkey]];
		require (!participantAddr.exists(pubkey) && !(prepay < GRAMS_CREATE_DEX_CLIENT), 104);
		prepay -= deployFee;
		deployedAddress = createParticipant(pubkey, 0, false, prepay);
		if (deployedAddr != address(0)) {
			delete balanceOf[giverFor[pubkey]];
			statusDeploy = true;
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

	function createVoteId() private inline  pure returns (uint256) {
		rnd.shuffle();
		return rnd.getSeed();
	}

	function initVoteAddMemberAT(address participantAddr) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		uint256 voteId = createVoteId();
		Vote cv = votes[voteId];
		cv.initiator = member;
		cv.startTime = uint256(now);
		cv.duration = votingDuration;
		cv.vcmc = voteCountModel;
		cv.participant = participantAddr;
		cv.type = ADD_MEMBER_ACTION_TEAM;
		cv.completed = false;
		votes[voteId] = cv;
		voteKeys.push(voteId);
		member.transfer({ value: 0, flag: 128});
	}

	function initVoteRemoveMemberAT(address participantAddr) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		uint256 voteId = createVoteId();
		Vote cv = votes[voteId];
		cv.initiator = member;
		cv.startTime = uint256(now);
		cv.duration = votingDuration;
		cv.vcmc = voteCountModel;
		cv.participant = participantAddr;
		cv.type = REMOVE_MEMBER_ACTION_TEAM;
		cv.completed = false;
		votes[voteId] = cv;
		voteKeys.push(voteId);
		member.transfer({ value: 0, flag: 128});
	}

	function initVoteLaunchDeAudut(
		uint256 timeStart,
		address loc,
		address lov,
		uint256 colPeriod,
		uint256 valPeriod.
		uint256 colStake,
		uint256 valStake,
		uint256 colRwd,
		uint256 valRwd,
	) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE), 106);


	}

	function isTimeUp(uint256 arg0) private inline  pure returns (bool) {
		return !((uint256(now) - arg0) < votingDuration)
	}

	// Vote count model selector
	// Majority = 0;
	// SoftMajority = 1;
	// SuperMajority = 2;
	function calculateVotes(uint256 yes, uint256 no, uint256 total, uint8 selector) private inline pure returns (bool) {
		bool passed = false;
		if (selector == VOTE_COUNT_MODEL_MAJORITY) {
			passed = (yes > no);
		} else if (selector == VOTE_COUNT_MODEL_SOFT_MAJORITY) {
			passed = (yes * total * 10 >= total * total + no * (8 * total  + 20));
		} else if (selector == VOTE_COUNT_MODEL_SUPER_MAJORITY) {
			passed = (yes * total * 3 >= total * total + no * (total + 6));
		} else  {
			passed = false;
		}
		return passed;
	}

	function resultVote(uint256 voteId) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && votes.exists(voteId), 107);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		Vote cv = votes[voteId];
		require(cv.completed == false, 108);
		if (isTimeUp(cv.startTime)){
			bool voteResult = calculateVotes(cv.yes.length, cv.no.length, votersTotal, cv.vcmc);
			if (voteResult){
				if (cv.type == ADD_MEMBER_ACTION_TEAM) {
					memberActionTeam[cv.participant] = 1;
					votersTotal ++;
					cv.completed = true;
					votes[voteId] = cv;
					member.transfer({ value: 0, flag: 128});
				} else if (cv.type == REMOVE_MEMBER_ACTION_TEAM) {
					delete memberActionTeam[cv.participant];
					votersTotal --;
					cv.completed = true;
					votes[voteId] = cv;
					member.transfer({ value: 0, flag: 128});
				} else if (cv.type == LAUNCH_DE_AUDIT) {

				} else {
					member.transfer({ value: 0, flag: 128});
				}
			} else {
				member.transfer({ value: 0, flag: 128});
			}
		} else {
			member.transfer({ value: 0, flag: 128});
		}
	}


}
