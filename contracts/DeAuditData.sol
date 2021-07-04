pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";

contract DeAuditData is IDeAuditData {

  uint256 static public idDeAuditData;
  address static public rootDeAudit;
  address static public initiator;
  bytes static public name;

  struct VotingCenter {
    bytes name;
    bytes location;
    uint256[] votes;
    address collator;
    address collatorWallet;
    bytes collatorPhotoIndex;
    uint256 idVotingPool;
    uint256 idMunicipalBody;
    uint256 idDistrict;
  }

  mapping (uint256 => VotingCenter) public votingCenter;
  uint256[] public votingCenterKeys;

  mapping(address => uint256) public votingCenterForAct4;
  mapping(uint256 => address) public act4ForVotingCenter;

  struct VotingPool {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
  }

  mapping (uint256 => VotingPool) public votingPool;
  uint256[] public votingPoolKeys;

  struct MunicipalBody {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
    uint256[] votingPoolsArr;
  }

  mapping (uint256 => MunicipalBody) public municipalBody;
  uint256[] public municipalBodyKeys;

  struct District {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
    uint256[] votingPoolsArr;
    uint256[] municipalBodiesArr;
  }

  mapping (uint256 => District) public district;
  uint256[] public districtKeys;

  struct Candidate {
    bytes name;
    uint256 votes;
  }

  mapping (uint256 => Candidate) public candidate;
  uint256[] public candidateKeys;

  // Modifier that allows public function to accept external calls always.
  modifier alwaysAccept {
    tvm.accept();
    _;
  }

  // Modifier that allows to accept external calls only from the DeAuditRoot.
  modifier onlyDeAuditRoot {
    require(msg.sender == rootDeAudit, 102);
    _;
  }

  // Modifier that allows public function to accept external calls only from the contract owner.
  modifier onlyInitiator {
    require(msg.sender == initiator, 103);
    _;
  }

  // Init function.
  constructor() public onlyDeAuditRoot {
  }

  // Function to receive plain transfers.
  receive() external {
  }

  function addCandidate(bytes nameCandidate) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    uint256 index = candidateKeys.length + 1;
    Candidate cc = candidate[index];
    cc.name = nameCandidate;
    cc.votes = 0;
    candidate[index] = cc;
    candidateKeys.push(index);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addDistrict(bytes nameDistrict) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    uint256 index = districtKeys.length + 1;
    District cd = district[index];
    cd.name = nameDistrict;
    districtKeys.push(index);
    district[index] = cd;
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addMunicipalBody(bytes nameMunicipalBody, uint256 indexDistrict) public override onlyInitiator {
    require(district.exists(indexDistrict), 104);
    tvm.rawReserve(address(this).balance - msg.value, 2);
    District cd = district[indexDistrict];
    uint256 indexMunicipalBody = municipalBodyKeys.length + 1;
    MunicipalBody cmb = municipalBody[indexMunicipalBody];
    cmb.name = nameMunicipalBody;
    municipalBody[indexMunicipalBody] = cmb;
    municipalBodyKeys.push(indexMunicipalBody);
    cd.municipalBodiesArr.push(indexMunicipalBody);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addVotingPool(bytes nameVotingPool, uint256 indexDistrict, uint256 indexMunicipalBody) public override onlyInitiator {
    require(district.exists(indexDistrict) && municipalBody.exists(indexMunicipalBody), 106);
    tvm.rawReserve(address(this).balance - msg.value, 2);
    District cd = district[indexDistrict];
    MunicipalBody cmb = municipalBody[indexMunicipalBody];
    uint256 indexVotingPool = votingPoolKeys.length + 1;
    VotingPool cvp = votingPool[indexVotingPool];
    cvp.name = nameVotingPool;
    votingPool[indexVotingPool] = cvp;
    votingPoolKeys.push(indexVotingPool);
    cmb.votingPoolsArr.push(indexVotingPool);
    cd.votingPoolsArr.push(indexVotingPool);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addVotingCenter(bytes nameVotingCenter, bytes location, uint256 indexDistrict, uint256 indexMunicipalBody, uint256 indexVotingPool) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    require(district.exists(indexDistrict) && municipalBody.exists(indexMunicipalBody) && votingPool.exists(indexVotingPool), 105);
    District cd = district[indexDistrict];
    MunicipalBody cmb = municipalBody[indexMunicipalBody];
    VotingPool cvp = votingPool[indexVotingPool];
    uint indexVotingCenter = votingCenterKeys.length + 1;
    VotingCenter cvc = votingCenter[indexVotingCenter];
    cvc.name = nameVotingCenter;
    cvc.location = location;
    cvc.idVotingPool = indexVotingPool;
    cvc.idMunicipalBody = indexMunicipalBody;
    cvc.idDistrict = indexDistrict;
    votingCenter[indexVotingCenter] = cvc;
    votingCenterKeys.push(indexVotingCenter);
    cvp.votingCentersArr.push(indexVotingCenter);
    cmb.votingCentersArr.push(indexVotingCenter);
    cd.votingCentersArr.push(indexVotingCenter);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function triggerToAct4(address addrAct4, address member) public override onlyDeAuditRoot {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    if (votingCenterForAct4.exists(addrAct4)) {
      TvmCell body = tvm.encodeBody(IAct4(addrAct4).trigger, member);
      addrAct4.transfer({value: 0, flag: 128, bounce:true, body:body});
    } else {
      member.transfer({value: 0, flag: 128, bounce:true});
    }
  }

  // Function for get this contract TON gramms balance
  function thisBalance() private inline  pure returns (uint128) {
    return address(this).balance;
  }

  // Function for external get this contract TON gramms balance
  function getBalance() public pure responsible returns (uint128) {
    return { value: 0, bounce: false, flag: 64 } thisBalance();
  }

}
