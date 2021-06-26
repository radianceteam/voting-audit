pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAuditData {
  function triggerToAct4(address addrAct4, address member) external;

}
