# PostVoting DeAudit Platform

## DeAuditRoot.sol

* function deployParticipant(uint256 pubkey) external;

OnlyActionTeamMember DeAuditRoot interface
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

  OnlyActionTeamMember DeAuditRoot interface
  * function deployDeAudit() external;

## Participant.sol

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


## DeAudit.sol

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

## Act4.sol

OnlyOwner
* function setValidator(address validatorAddr) external;

OnlyCollator
* function addCollatorAct4Photo(uint256 photoId) external;
* function candidateVotes(uint256 candidateId, uint256 votesQty) external;
* function insertAllCandidatesVotesData(TvmCell votingMatrix) external;
* function sendVotingMatrix(TvmCell votingMatrix) external;

OnlyValidator
* function confirmCollatedData() external;
* function rejectCollatedData() external;

* function addPhotoForValidator(address act4Addr, uint256 photoId) external;

## DeAuditData.sol

### ListOfVotingCenters.sol

* function createVotingTable(bytes name, bytes location, uint256 coordinates) external;
* function setCollator(uint256 votingTableId, address collatorAddr) external;
* function setValidator(address validatorAddr) external;

* >20000 voting tables in 1000 voting centers in 340 municipal bodies in 23 districts

### ListOfCandidates.sol

* function createCandidate(bytes name) external;
* function createVotingMatrix() external;
* function addCollation(uint256 votingTableId, TvmCell votingMatrix) external;
* function addValidation(uint256 votingTableId, TvmCell votingMatrixYes, TvmCell votingMatrixNo) external;

## RootTokenContract.sol
## TONTokenWallet.sol
