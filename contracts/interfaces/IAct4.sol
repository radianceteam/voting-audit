pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IAct4 {
  // function addVotesToCandidate(uint256 candidateID, uint256 votesQty) external;
  function voteFor() external;
  function voteAgainst() external;
  function trigger(address member) external;
  function addToAdditionalPhotoLinkArr(bytes linkToPhoto, address participant) external;
}
