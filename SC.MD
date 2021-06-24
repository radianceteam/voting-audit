# PostVoting DeAudit Platform smart contracts 12 - 20 дней

## DeAuditRoot.sol 1-2 дня

 * function deployParticipant(uint256 pubkey);

 * function initVoteAddMemberAT(address participantAddr) OnlyActionTeamMember;
 * function initVoteRemoveMemberAT(address participantAddr) OnlyActionTeamMember;
 * function deployLoVC() OnlyActionTeamMember;
 * function deployLoC() OnlyActionTeamMember;
 * function initVoteLaunchDeAudut(
      uint256 timeStart,
      address loc,
      address lov,
      uint256 colPeriod,
      uint256 valPeriod,
      uint256 colStake,
      uint256 valStake,
      uint256 colRwd,
      uint256 valRwd
    ) OnlyActionTeamMember;

  * function voteFor(uint256 voteId) OnlyActionTeamMember;
  * function voteAgainst(uint256 voteId) OnlyActionTeamMember;

  * function resultVote(uint256 voteId) OnlyActionTeamMember;

  * function addMemberAT() internal;
  * function removeMemberAT() internal;
  * function deployDeAudit() internal;

  * function sendTrigger(address act4Addr, uint8 triggerType) OnlyActionTeamMember;

## Participant.sol 2-3 дня

 * function getWallets() external;

 DeAudit interfaces

 * function stakeForCollation(address deAuditAddr, uint256 votingTableId, uint128 value) external;
 * function stakeForValidation(address deAuditAddr, uint128 value) external;

 Act4 interfaces Only as Collator
 * function addPhotoAsCollator(address act4Addr, uint256 photoId) external;
 * function candidateVotes(uint256 candidateId, uint256 votesQty) external;
 * function insertAllCandidatesVotesData(TvmCell votingMatrix) external;
 * function sendVotingMatrix() external;

 Act4 interfaces Only as Validator
 * function confirmCollatedData(address act4Addr) external;
 * function rejectCollatedData(address act4Addr) external;

 Act4 interfaces
 * function addPhotoForValidator(address act4Addr, uint256 photoId) external;


 DeAuditRoot interface OnlyActionTeamMember
 * function initVoteAddMemberAT(address participantAddr) external;
 * function initVoteRemoveMemberAT(address participantAddr) external;
 * function deployLoVC() external;
 * function deployLoC() external;
 * function initVoteLaunchDeAudut(
      uint256 timeStart,
      address loc,
      address lov,
      uint256 colPeriod,
      uint256 valPeriod,
      uint256 colStake,
      uint256 valStake,
      uint256 colRwd,
      uint256 valRwd
    ) external;
  * function resultVote(uint256 voteId) external;
  * function sendTrigger(address act4Addr, uint8 triggerType) external;
  * function voteFor(uint256 voteId) external;
  * function voteAgainst(uint256 voteId) external;


## DeAudit.sol 2-3 дня

* function createVotingMatrix() external;
* function callbackCreateVotingMatrix(TvmCell votingMatrix) external;

* function setCollator(uint256 votingTableId, address collatorAddr) external;
* function callbackSetCollator() external;

* function deployAct4(uint256 votingTableId, address collatorAddr, TvmCell votingMatrix) external;
* function mintDCforStake(address collatorAddr) external;

* function setValidator(address validatorAddr) external;
* function callbackSetValidator() external;

* function setValidatorToAct4(uint256 votingTableId, address validatorAddr) external;
* function mintDCforStake(address validatorAddr) external;

## Act4.sol 2-3 дня

* function setValidator(address validatorAddr) OnlyDeAudit;

* function addCollatorAct4Photo(uint256 photoId) OnlyCollator;
* function candidateVotes(uint256 candidateId, uint256 votesQty) OnlyCollator;
* function insertAllCandidatesVotesData(TvmCell votingMatrix) OnlyCollator;
* function sendVotingMatrix(TvmCell votingMatrix) OnlyCollator;

* function confirmCollatedData() OnlyValidator;
* function rejectCollatedData() OnlyValidator;

* function addPhotoForValidator(address act4Addr, uint256 photoId) external;

## DeAuditData.sol 3-5 дня

### ListOfVotingCenters.sol 1-2 дня

* function createVotingTable(bytes name, bytes location, uint256 coordinates) OnlyActionTeamMember;
* function setDeAudit(address deAuditAddr) OnlyDeAuditRoot;
* function setCollator(uint256 votingTableId, address collatorAddr) OnlyDeAudit;
* function setAct4forVotingTable(address act4Addr) OnlyDeAudit;
* function setValidator(address validatorAddr) OnlyDeAudit;

* >20000 voting tables in 1000 voting centers in 340 municipal bodies in 23 districts

### ListOfCandidates.sol 2-3 дня

* function createCandidate(bytes name) OnlyActionTeamMember;
* function setDeAudit(address deAuditAddr) OnlyDeAuditRoot;
* function createVotingMatrix() OnlyDeAudit;
* function addCollation(uint256 votingTableId, TvmCell votingMatrix) OnlyVtCollator;
* function addValidation(uint256 votingTableId, bool result) OnlyVtValidator;

## RootTokenContract.sol 1-2 дня
## TONTokenWallet.sol 1-2 дня
