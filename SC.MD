# PostVoting DeAudit Platform smart contracts 12 - 20 дней

## DeAuditRoot.sol 1-2 дня

 * function deployParticipant(uint256 pubkey);
 * function deployDeAuditData(uint256 pubkey);

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

 * IDeAudit.stakeForCollation(address deAuditAddr, uint256 votingTableId, uint128 value) onlyOwner;
 * IDeAudit.stakeForValidation(address deAuditAddr, uint128 value) onlyOwner;

 * IAct4.addPhotoAsCollator(address act4Addr, uint256 photoId) onlyOwner;
 * IAct4.candidateVotes(uint256 candidateId, uint256 votesQty) onlyOwner;
 * IAct4.insertAllCandidatesVotesData(TvmCell votingMatrix) onlyOwner;
 * IAct4.sendVotingMatrix() external;
 * IAct4.confirmCollatedData(address act4Addr) onlyOwner;
 * IAct4.rejectCollatedData(address act4Addr) onlyOwner;
 * IAct4.addPhotoForValidator(address act4Addr, uint256 photoId) onlyOwner;

 * IDeAuditRoot.deployDeAuditData(uint256 pubkey) onlyOwner;
 * IDeAuditRoot.initVoteAddMemberAT(address participantAddr) onlyOwner;
 * IDeAuditRoot.initVoteRemoveMemberAT(address participantAddr) onlyOwner;
 * IDeAuditRoot.deployLoVC() onlyOwner;
 * IDeAuditRoot.deployLoC() onlyOwner;
 * IDeAuditRoot.initVoteLaunchDeAudut(
      uint256 timeStart,
      address loc,
      address lov,
      uint256 colPeriod,
      uint256 valPeriod,
      uint256 colStake,
      uint256 valStake,
      uint256 colRwd,
      uint256 valRwd
    ) onlyOwner;
  * IDeAuditRoot.resultVote(uint256 voteId) onlyOwner;
  * IDeAuditRoot.sendTrigger(address act4Addr, uint8 triggerType) onlyOwner;
  * IDeAuditRoot.voteFor(uint256 voteId) onlyOwner;
  * IDeAuditRoot.voteAgainst(uint256 voteId) onlyOwner;

  * function getWallets() external;

## DeAudit.sol 2-3 дня

* IDeAuditData.createVotingMatrix() external;
* function callbackCreateVotingMatrix(TvmCell votingMatrix) external;

* IDeAuditData.setCollator(uint256 votingTableId, address collatorAddr) external;
* function callbackSetCollator() external;

* function deployAct4(uint256 votingTableId, address collatorAddr, TvmCell votingMatrix) external;
* IRootToken.mintDCforStake(address collatorAddr) external;

* IDeAuditData.setValidator(address validatorAddr) external;
* function callbackSetValidator() external;

* IAct4.setValidatorToAct4(uint256 votingTableId, address validatorAddr) external;
* IRootToken.mintDCforStake(address validatorAddr) external;

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
