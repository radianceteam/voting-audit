pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAuditData {
  function addDistrict(bytes nameDistrict) external;
  function addMunicipalBody(bytes nameMunicipalBody, uint indexDistrict) external;
  function addVotingPool(bytes nameVotingPool, uint indexDistrict, uint indexMunicipalBody) external;
  function addVotingCenter(bytes nameVotingCenter, bytes location, uint indexDistrict, uint indexMunicipalBody, uint indexVotingPool) external;
  function addCandidate(bytes nameCandidate) external;

  function triggerToAct4(address addrAct4, address member) external;
}
