pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

// AT smart contract (ATSC) – an SMV-based smart contract system (see link 1to the reference implementation),
// which has additional specific functionality described in this specification.
// ATSC represents AT and could be a root for several DeAudit smart contracts.
// Details of its deployment are presented below.
contract DeAuditRoot {

	uint256 static public soUINT;
	TvmCell static public codeParticipant;

	TvmCell public codeDeAudit;
	TvmCell public codeAct4Collation;
	TvmCell public codeVotingCentre;

	mapping(address => uint256) public memberActionTeam;

	mapping(address => uint128) public balanceOf;

	// Grams constants
	uint128 constant public GRAMS_CREATE_PARTICIPANT = 1 ton;

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

	// Init function.
	constructor() public {
		uint256 creatorPubKey = msg.pubkey();
		require(creatorPubKey != 0 && creatorPubKey == tvm.pubkey(), 103);
		tvm.accept();
		memberActionTeam[computeParticipantAddress(creatorPubKey)] = creatorPubKey;
	}

	// Function to transfers plain transfers.
	function sendTransfer(address dest, uint128 value, bool bounce) public pure checkOwnerAndAccept {
		dest.transfer(value, bounce, 0);
	}

	// Function to receive plain transfers.
	receive() external {
		balanceOf[msg.sender] += msg.value;
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

	function createParticipant(uint256 pubkey) public alwaysAccept returns (address deployedAddress, bool statusCreate){
		statusCreate = false;
		deployedAddress = address(0);
		TvmCell stateInit = tvm.buildStateInit({
			contr: Participant,
			varInit: {rootDeAudit:address(this)},
			code: codeParticipant,
			pubkey: pubkey
		});
		deployedAddress = new Participant{
			stateInit: stateInit,
			flag: 0,
			bounce : false,
			value : 0
		}();
		statusCreate = true;
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
