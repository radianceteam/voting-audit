pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";
import "./Participant.sol";
import "./DeAuditData.sol";
import "./DeAudit.sol";
import "./RootTokenContract.sol";

contract DeAuditRoot is IDeAuditRoot {

	uint256 static public soUINT;

	TvmCell public codeParticipant;
	TvmCell public codeDeAudit;
	TvmCell public codeDeAuditData;
	TvmCell public codeAct4;
	TvmCell public codeRootTokenContract;
	TvmCell public codeTONTokenWallet;

	mapping(address => uint256) public actionTeam;
	address[] public actionTeamKeys;
	uint32 public actionTeamMembers;

	mapping(address => uint128) public balanceOf;
	mapping(uint256 => address) public giverFor;

	mapping(uint256 => address) public participantAddr;
	mapping(address => uint256) public participantPubKey;
	address[] public participantArr;

	mapping(address => DeAuditParam) public paramDeAudit;
	address[] public keysDeAuditData;

	uint256 public countDeAuditData;

	struct DeAuditParam {
		address creator;
		bytes name;
		uint256 timeStart;
		uint256 colPeriod;
		uint256 valPeriod;
		uint128 colStake;
		uint128 valStake;
	}

	mapping(address => uint256) public launchedDeAudit;
	address[] public keysDeAudit;
	uint32 public countDeAudit;

	uint128 public deployFee;
	uint256 public votingDuration;
	uint8 public voteCountModel;
	uint256 public limitVFC;

	struct Vote {
		address initiator;
		uint256 startTime;
		uint256 duration;
		uint8 vcms;
		mapping(address => uint32) yes;
		mapping(address => uint32) no;
		uint32 yesCount;
		uint32 noCount;
		TvmCell data;
		uint8 actionType;
		bool completed;
	}

	mapping(uint256 => Vote) public vote;
	uint256[] public voteKeys;

	// Grams constants
	uint128 constant public GRAMS_CREATE = 1 ton;
	uint128 constant public GRAMS_INIT_VOTE = 0.5 ton;
	uint128 constant public GRAMS_TRIGGER = 1.5 ton;


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
		require(actionTeam.exists(msg.sender), 105);
		_;
	}

	// Init function.
	constructor(uint8 settingVoteCountModel, uint256 settingLimitVFC) public checkOwnerAndAccept {
		require(settingVoteCountModel == 0 || settingVoteCountModel == 1 || settingVoteCountModel == 2, 108);
		require(settingLimitVFC != 0, 108);
		voteCountModel = settingVoteCountModel;
		countDeAuditData = 0;
		countDeAudit = 0;
		limitVFC = settingLimitVFC;
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkOwnerAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
		balanceOf[msg.sender] += msg.value;
	}

	function setCodePaticipant(TvmCell code) public checkOwnerAndAccept {
		codeParticipant = code;
	}

	function setCreator() public checkOwnerAndAccept {
		uint256 creatorPubKey = msg.pubkey();
		address creatorAddr = createParticipant(creatorPubKey, 0, false, GRAMS_CREATE);
		actionTeam[creatorAddr] = 1;
		actionTeamKeys.push(creatorAddr);
		actionTeamMembers ++;
	}

	function setCodeDeAuditData(TvmCell code) public checkOwnerAndAccept {
		codeDeAuditData = code;
	}

	function setCodeDeAudit(TvmCell code) public checkOwnerAndAccept {
		codeDeAudit = code;
	}

	function setCodeAct4(TvmCell code) public checkOwnerAndAccept {
		codeAct4 = code;
	}

	function setCodeRootTokenContract(TvmCell code) public checkOwnerAndAccept {
		codeRootTokenContract = code;
	}

	function setCodeTONTokenWallet(TvmCell code) public checkOwnerAndAccept {
		codeTONTokenWallet = code;
	}

	function setMaxQtyAct4Links(uint128 settingLimitVFC) public checkOwnerAndAccept {
		limitVFC = settingLimitVFC;
	}

	function setDeployFee(uint128 settingDeployFee) public checkOwnerAndAccept {
		deployFee = settingDeployFee;
	}

	function selectMajority() public checkOwnerAndAccept {
		voteCountModel = VOTE_COUNT_MODEL_MAJORITY;
	}

	function selectSoftMajority() public checkOwnerAndAccept {
		voteCountModel = VOTE_COUNT_MODEL_SOFT_MAJORITY;
	}

	function selectSuperMajority() public checkOwnerAndAccept {
		voteCountModel = VOTE_COUNT_MODEL_SUPER_MAJORITY;
	}

	function setVotingDuration(uint256 settingVotingDuration) public checkOwnerAndAccept {
		votingDuration = settingVotingDuration;
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

	function getParticipantAddress(uint256 pubkeyParticipant) public view responsible returns (address) {
		return { value: 0, bounce: false, flag: 64 } computeParticipantAddress(pubkeyParticipant);
	}

	function createParticipant(uint256 pubkey, uint16 flag, bool bounce, uint128 value) private inline returns (address deployedAddress){
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
		require (!participantAddr.exists(pubkey) && !(prepay < GRAMS_CREATE), 104);
		prepay -= deployFee;
		deployedAddress = createParticipant(pubkey, 0, false, prepay);
		if (deployedAddress != address(0)) {
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

	function getDeAuditDataId() private inline view returns (uint256) {
		return countDeAuditData + 1;
	}

	function getDeAuditId() private inline view returns (uint32) {
		return countDeAudit + 1;
	}

	function createDeAuditData(
		bytes nameDeAudit,
		uint256 timeStart,
		uint256 colPeriod,
		uint256 valPeriod,
		uint128 colStake,
		uint128 valStake
	) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_CREATE), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		address deployedAddress = address(0);
		TvmCell stateInit = tvm.buildStateInit({
			contr: DeAuditData,
			varInit: {
				idDeAuditData: getDeAuditDataId(),
				rootDeAudit: address(this),
				initiator: member,
				name: nameDeAudit,
				codeAct4: codeAct4
			},
			code: codeDeAuditData,
			pubkey: tvm.pubkey()
		});
		deployedAddress = new DeAuditData{
			stateInit: stateInit,
			flag: 0,
			bounce : false,
			value : GRAMS_CREATE
		}(limitVFC);
		if (deployedAddress != address(0)) {
			DeAuditParam cdad = paramDeAudit[deployedAddress];
			cdad.creator = member;
			cdad.name = nameDeAudit;
			cdad.timeStart = timeStart;
			cdad.colPeriod = colPeriod;
			cdad.valPeriod = valPeriod;
			cdad.colStake = colStake;
			cdad.valStake = valStake;
			paramDeAudit[deployedAddress] = cdad;
			keysDeAuditData.push(deployedAddress);
			countDeAuditData++;
			actionTeam[member] ++;
			TvmCell body = tvm.encodeBody(IParticipant(member).setCreatedDeAuditData, deployedAddress);
			member.transfer({ value: 0, flag: 128, body:body});
		} else {
			member.transfer({ value: 0, flag: 128});
		}
	}

	function createVoteId() private inline view returns (uint256) {
		return voteKeys.length + 1;
	}

	function initVoteAddActionTeamMember(address addressParticipant) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && !actionTeam.exists(addressParticipant), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		uint256 voteId = createVoteId();
		Vote cv = vote[voteId];
		cv.initiator = member;
		cv.startTime = uint256(now);
		cv.duration = votingDuration;
		cv.vcms = voteCountModel;
		TvmBuilder builder;
		builder.store(addressParticipant);
		cv.data = builder.toCell();
		cv.actionType = ADD_MEMBER_ACTION_TEAM;
		cv.completed = false;
		vote[voteId] = cv;
		voteKeys.push(voteId);
		actionTeam[member] ++;
		member.transfer({ value: 0, flag: 128});
	}

	function initVoteRemoveActionTeamMember(address addressParticipant) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && actionTeam.exists(addressParticipant), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		uint256 voteId = createVoteId();
		Vote cv = vote[voteId];
		cv.initiator = member;
		cv.startTime = uint256(now);
		cv.duration = votingDuration;
		cv.vcms = voteCountModel;
		TvmBuilder builder;
		builder.store(addressParticipant);
		cv.data = builder.toCell();
		cv.actionType = REMOVE_MEMBER_ACTION_TEAM;
		cv.completed = false;
		vote[voteId] = cv;
		voteKeys.push(voteId);
		actionTeam[member] ++;
		member.transfer({ value: 0, flag: 128});
	}

	function initVoteDeAudut(address addrDeAuditData) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && paramDeAudit.exists(addrDeAuditData), 106);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		uint256 voteId = createVoteId();
		Vote cv = vote[voteId];
		cv.initiator = member;
		cv.startTime = uint256(now);
		cv.duration = votingDuration;
		cv.vcms = voteCountModel;
		TvmBuilder builder;
		builder.store(addrDeAuditData);
		cv.data = builder.toCell();
		cv.actionType = LAUNCH_DE_AUDIT;
		cv.completed = false;
		vote[voteId] = cv;
		voteKeys.push(voteId);
		actionTeam[member] ++;
		member.transfer({ value: 0, flag: 128});
	}

	function isTimeUp(uint256 startTime, uint256 duration) public pure returns (bool) {
		return uint256(now) >= (startTime + duration);
	}

	function timeNow() public pure returns (uint256) {
		return uint256(now);
	}

	// Vote count model selector
	// Majority = 0;
	// SoftMajority = 1;
	// SuperMajority = 2;
	function calculateVotes(uint32 yes, uint32 no, uint32 total, uint8 selector) public pure returns (bool) {
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

	function actionTeamKeysRemove(address target) private inline {
		address[] actionTeamKeysBefore = actionTeamKeys;
		address[] actionTeamKeysAfter;
		for (address val : actionTeamKeysBefore) { if (val != target) {actionTeamKeysAfter.push(val);}}
		actionTeamKeys = actionTeamKeysAfter;
	}

	function resultVote(uint256 voteId) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE * 6) && vote.exists(voteId), 107);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		Vote cv = vote[voteId];
		require(cv.completed == false, 108);
		if (isTimeUp(cv.startTime, cv.duration) == true){
			actionTeam[member] ++;
			bool voteResult = calculateVotes(cv.yesCount, cv.noCount, actionTeamMembers, cv.vcms);
			if (voteResult == true){
				if (cv.actionType == ADD_MEMBER_ACTION_TEAM) {
					TvmSlice slice = cv.data.toSlice();
					address addressParticipant = slice.decode(address);
					actionTeam[addressParticipant] = 1;
					actionTeamKeys.push(addressParticipant);
					actionTeamMembers ++;
					cv.completed = true;
					vote[voteId] = cv;
					member.transfer({ value: 0, flag: 128});
				} else if (cv.actionType == REMOVE_MEMBER_ACTION_TEAM) {
					TvmSlice slice = cv.data.toSlice();
					address addressParticipant = slice.decode(address);
					delete actionTeam[addressParticipant];
					actionTeamKeysRemove(addressParticipant);
					actionTeamMembers --;
					cv.completed = true;
					vote[voteId] = cv;
					member.transfer({ value: 0, flag: 128});
				} else if (cv.actionType == LAUNCH_DE_AUDIT) {
					TvmSlice slice = cv.data.toSlice();
					address dad = slice.decode(address);
					DeAuditParam cdad = paramDeAudit[dad];
					(address deployedAddr, ) = deployDeAudit(cdad.name, cdad.timeStart, dad, cdad.colPeriod, cdad.valPeriod, cdad.colStake, cdad.valStake, cv.vcms);
					launchedDeAudit[deployedAddr] = voteId;
					keysDeAudit.push(deployedAddr);
					countDeAudit ++;

					TvmCell body = tvm.encodeBody(IDeAuditData(dad).setDeAudit, deployedAddr, member);
					dad.transfer({value:GRAMS_INIT_VOTE, flag:0, bounce:true, body:body});

					cv.completed = true;
					vote[voteId] = cv;
					member.transfer({ value: 0, flag: 128});
				} else {
					member.transfer({ value: 0, flag: 128});
				}
			} else {
				cv.completed = true;
				vote[voteId] = cv;
				member.transfer({ value: 0, flag: 128});
			}
		} else {
			member.transfer({ value: 0, flag: 128});
		}
	}

	function voteFor(uint256 voteId) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && vote.exists(voteId), 109);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		Vote cv = vote[voteId];
		require(cv.completed == false && !(cv.yes.exists(member)) && !(cv.no.exists(member)), 110);
		cv.yesCount ++;
		cv.yes[member] = cv.yesCount;
		vote[voteId] = cv;
		actionTeam[member] ++;
		member.transfer({ value: 0, flag: 128});
	}

	function voteAgainst(uint256 voteId) public override OnlyActionTeamMember {
		require(!(msg.value < GRAMS_INIT_VOTE) && vote.exists(voteId), 109);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		Vote cv = vote[voteId];
		require(cv.completed == false && !(cv.yes.exists(member)) && !(cv.no.exists(member)), 110);
		cv.noCount ++;
		cv.no[member] = cv.noCount;
		vote[voteId] = cv;
		actionTeam[member] ++;
		member.transfer({ value: 0, flag: 128});
	}

	function sendTrigger(address addrDeAudit, address addrAct4) public override OnlyActionTeamMember {
		require(launchedDeAudit.exists(addrDeAudit) && !(msg.value < GRAMS_TRIGGER), 110);
		tvm.rawReserve(address(this).balance - msg.value, 2);
		address member = msg.sender;
		TvmCell body = tvm.encodeBody(IDeAudit(addrDeAudit).triggerToDeAuditData, addrAct4, member);
		actionTeam[member] ++;
		addrDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
	}

	function computeRootDemocracyTokenAddress(uint32 sequentialNumber) private inline view returns (address) {
		string name = format("DemocracyToken {}", sequentialNumber);
		string symbol = format("DT {}", sequentialNumber);
		bytes rootName = bytes(name);
		bytes rootSymbol = bytes(symbol);
		uint8 rootDecimals = 9;
		TvmCell stateInit = tvm.buildStateInit({
			contr: RootTokenContract,
			varInit: {
				_randomNonce:0,
				name: rootName,
				symbol: rootSymbol,
				decimals: rootDecimals,
				wallet_code: codeTONTokenWallet
			},
			code: codeRootTokenContract,
			pubkey : tvm.pubkey()
		});
		return address(tvm.hash(stateInit));
	}

	function deployRootDemocracyToken(
		address deployedDeAuditAddr,
		uint32 sequentialNumber,
		uint128 grammsForRootDemocracyToken
	) private inline returns (address rootDemocracyToken) {
		rootDemocracyToken = address(0);
		string name = format("DemocracyToken {}", sequentialNumber);
		string symbol = format("DT {}", sequentialNumber);
		bytes rootName = bytes(name);
		bytes rootSymbol = bytes(symbol);
		uint8 rootDecimals = 9;
		TvmCell stateInit = tvm.buildStateInit({
			contr: RootTokenContract,
			varInit: {
				_randomNonce:0,
				name: rootName,
				symbol: rootSymbol,
				decimals: rootDecimals,
				wallet_code: codeTONTokenWallet
			},
			code: codeRootTokenContract,
			pubkey : tvm.pubkey()
		});
		rootDemocracyToken = new RootTokenContract{
			stateInit: stateInit,
			flag: 0,
			bounce : false,
			value : grammsForRootDemocracyToken
		}(0, deployedDeAuditAddr);
	}

	function deployDeAudit(
		bytes nameDeAudit,
		uint256 timeStart,
		address dataDeAudit,
		uint256 colPeriod,
		uint256 valPeriod,
		uint128 colStake,
		uint128 valStake,
		uint8 vcms
	) private inline returns (address addressDeAudit, address addressRootDemocracyToken) {
		addressDeAudit = address(0);
		addressRootDemocracyToken = address(0);
		uint32 sequentialNumber = getDeAuditId();
		addressRootDemocracyToken = computeRootDemocracyTokenAddress(sequentialNumber);
		TvmCell stateInit = tvm.buildStateInit({
			contr: DeAudit,
			varInit: {
				sequentialNumber: sequentialNumber,
				name: nameDeAudit,
				rootDeAudit: address(this),
				dataDeAudit: dataDeAudit,
				tokenDeAudit: addressRootDemocracyToken,
				timeStart: timeStart,
				colPeriod: colPeriod,
				valPeriod: valPeriod,
				colStake: colStake,
				valStake: valStake,
				vcms: vcms
			},
			code: codeDeAudit,
			pubkey : tvm.pubkey()
		});

		addressDeAudit = new DeAudit{
			stateInit: stateInit,
			flag: 0,
			bounce : false,
			value : GRAMS_CREATE
		}();
		addressRootDemocracyToken = deployRootDemocracyToken(addressDeAudit, sequentialNumber, GRAMS_CREATE);
	}

	function getDeAuditParam4Debot(address keysDeAuditDataCurrent) public view returns (
		address creator4Debot,
		bytes name4Debot,
		uint256 timeStart4Debot,
		uint256 colPeriod4Debot,
		uint256 valPeriod4Debot,
		uint256 colStake4Debot,
		uint256 valStake4Debot,
		address curDADkeyD
	) {
		DeAuditParam curDeAuditParam = paramDeAudit[keysDeAuditDataCurrent];
		creator4Debot = curDeAuditParam.creator;
		name4Debot   = curDeAuditParam.name;
		timeStart4Debot = curDeAuditParam.timeStart;
		colPeriod4Debot = curDeAuditParam.colPeriod;
		valPeriod4Debot = curDeAuditParam.valPeriod;
		colStake4Debot  = curDeAuditParam.colStake;
		valStake4Debot  = curDeAuditParam.valStake;
		curDADkeyD = keysDeAuditDataCurrent;
	}

	function getVote4Debot(uint256 voteKey) public view returns (
		address initiator4Debot,
		uint256 startTime4Debot,
		uint256 duration4Debot,
		uint8 vcms4Debot,
		mapping(address => uint32) yes4Debot,
		mapping(address => uint32) no4Debot,
		uint32 yesCount4Debot,
		uint32 noCount4Debot,
		TvmCell data4Debot,
		uint8 actionType4Debot,
		bool completed4Debot,
		uint256 voteKeyD
	) {
		Vote curVote = vote[voteKey];
		initiator4Debot  = curVote.initiator;
		startTime4Debot  = curVote.startTime;
		duration4Debot  = curVote.duration;
		vcms4Debot   = curVote.vcms;
		yes4Debot   = curVote.yes;
		no4Debot   = curVote.no;
		yesCount4Debot  = curVote.yesCount;
		noCount4Debot  = curVote.noCount;
		data4Debot   = curVote.data;
		actionType4Debot = curVote.actionType;
		completed4Debot  = curVote.completed;
		voteKeyD = voteKey;
	}

	function checkPubKey(uint256 pubkey) public view returns (bool status, address participant) {
		status = participantAddr.exists(pubkey);
		participant = participantAddr[pubkey];
	}

	function isActionTeamMember(address addressParticipant) public view returns (bool status) {
		status = actionTeam.exists(addressParticipant);
	}

}
