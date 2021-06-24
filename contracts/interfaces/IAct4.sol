pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IAct4 {
  function trigger(TvmCell triggerData) external;
}
