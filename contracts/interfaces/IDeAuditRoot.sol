pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAuditRoot {
  function initVoteAddActionTeamMember(address participantAddr) external;
  function initVoteRemoveActionTeamMember(address participantAddr) external;
  function createDeAuditData() external;
  function initVoteLaunchDeAudut(
    uint256 timeStart,
    address dataDeAudit,
    uint256 colPeriod,
    uint256 valPeriod,
    uint256 colStake,
    uint256 valStake,
    uint256 colRwd,
    uint256 valRwd
  ) external;
  function resultVote(uint256 voteId) external;
  function sendTrigger(address act4Addr, uint8 triggerType) external;
}
