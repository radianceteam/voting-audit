pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
pragma AbiHeader time;

interface IDeAudit {

  struct IDeAuditDetails {
    uint32 sequentialNumber;
  	bytes name;
  	address rootDeAudit;
  	address dataDeAudit;
  	address tokenDeAudit;
  	uint256 timeStart;
  	uint256 colPeriod;
  	uint256 valPeriod;
  	uint128 colStake;
  	uint128 valStake;
  }

  function getDetails() external view responsible returns (IDeAuditDetails);

  function addCollation(uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix) external;

  function registrationForValidation() external;

  function collationCallback(uint8 statusCollation, address addressCollator) external;

  function triggerToDeAuditData(address addrAct4, address member) external;

  function regForValidationCallback(address addressValidator, uint256[] vcfvArr) external;

}
