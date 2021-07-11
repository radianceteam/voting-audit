pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IParticipant {
  function setCreatedDeAuditData(address addressDeAuditData) external;
  function setDeAuditValidations(uint256[] votingCentersArr) external;
}
