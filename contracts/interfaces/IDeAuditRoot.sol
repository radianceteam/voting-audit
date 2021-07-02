pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAuditRoot {
  function initVoteAddActionTeamMember(address participantAddr) external;
  function initVoteRemoveActionTeamMember(address participantAddr) external;
  function createDeAuditData(
    bytes nameDeAuditData,
    uint256 timeStart,
    uint256 colPeriod,
    uint256 valPeriod,
    uint128 colStake,
    uint128 valStake
  ) external;
  function initVoteDeAudut(address addrDeAuditData) external;
  function voteFor(uint256 voteId) external;
  function voteAgainst(uint256 voteId) external;
  function resultVote(uint256 voteId) external;
  function sendTrigger(address addrDeAudit, address addrAct4) external;
}
