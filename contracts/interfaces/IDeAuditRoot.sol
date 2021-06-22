pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAuditRoot {
  function initVoteAddMemberAT(address participantAddr) external;
  function initVoteRemoveMemberAT(address participantAddr) external;
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
  ) external;
  function resultVote(uint256 voteId) external;

}
