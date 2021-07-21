pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IAct4 {
  function voteFor() external;
  function voteAgainst() external;
  function trigger(address member) external;
  function setValidator(address participant) external;
}
