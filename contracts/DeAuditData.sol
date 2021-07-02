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

  mapping(address => VotingCenterPath) public pathVotingCenterForAct4;
  mapping(uint256 => VotingCenterPath) public pathVotingCenterForIndex;
  uint256 public countVotingCenteres;

  struct VotingCenterPath {
    uint d;
    uint mb;
    uint vp;
    uint vc;
  }

  struct VotingCenter {
    bytes name;
    bytes location;
    uint256[] votes;
    address collator;
    address collatorWallet;
    bytes collatorPhotoIndex;
  }

  struct VotingPool {
    bytes name;
    uint256[] votes;
    mapping (uint256 => VotingCenter) votingCenter;
    uint256[] votingCenterKeys;
  }

  struct MunicipalBody {
    bytes name;
    uint256[] votes;
    mapping (uint256 => VotingPool) votingPool;
    uint256[] votingPoolKeys;
  }

  struct District {
    bytes name;
    uint256[] votes;
    mapping (uint256 => MunicipalBody) municipalBody;
    uint256[] municipalBodyKeys;
  }

  mapping (uint256 => District) public district;
  uint256[] public districtKeys;

  struct Candidate {
    bytes name;
    uint256 votes;
  }

  mapping (uint256 => Candidate) public candidate;
  uint256 public countCandidates;

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
    countVotingCenteres = 0;
    countCandidates = 0;
  }

  // Function to receive plain transfers.
  receive() external {
  }

  function addCandidate(bytes nameCandidate) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    countCandidates ++;
    Candidate cc = candidate[countCandidates];
    cc.name = nameCandidate;
    cc.votes = 0;
    candidate[countCandidates] = cc;
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

  function addMunicipalBody(bytes nameMunicipalBody, uint indexDistrict) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    require(district.exists(indexDistrict), 104);
    District cd = district[indexDistrict];
    uint256 index = cd.municipalBodyKeys.length + 1;
    MunicipalBody cmb = cd.municipalBody[index];
    cmb.name = nameMunicipalBody;
    cd.municipalBody[index] = cmb;
    cd.municipalBodyKeys.push(index);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addVotingPool(bytes nameVotingPool, uint indexDistrict, uint indexMunicipalBody) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    District cd = district[indexDistrict];
    MunicipalBody cmb = cd.municipalBody[indexMunicipalBody];
    uint256 index = cmb.votingPoolKeys.length + 1;
    VotingPool cvp = cmb.votingPool[index];
    cvp.name = nameVotingPool;
    cmb.votingPool[index] = cvp;
    cmb.votingPoolKeys.push(index);
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function addVotingCenter(bytes nameVotingCenter, bytes location, uint indexDistrict, uint indexMunicipalBody, uint indexVotingPool) public override onlyInitiator {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    District cd = district[indexDistrict];
    MunicipalBody cmb = cd.municipalBody[indexMunicipalBody];
    VotingPool cvp = cmb.votingPool[indexVotingPool];
    uint indexVotingCenter = cvp.votingCenterKeys.length + 1;
    VotingCenter cvc = cvp.votingCenter[indexVotingCenter];
    cvc.name = nameVotingCenter;
    cvc.location = location;
    cvp.votingCenter[indexVotingCenter] = cvc;
    cvp.votingCenterKeys.push(indexVotingCenter);
    VotingCenterPath cvcp = VotingCenterPath(indexDistrict, indexMunicipalBody, indexVotingPool, indexVotingCenter);
    countVotingCenteres ++;
    pathVotingCenterForIndex[countVotingCenteres] = cvcp;
    msg.sender.transfer({value: 0, flag: 128, bounce:true});
  }

  function triggerToAct4(address addrAct4, address member) public override onlyDeAuditRoot {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    if (pathVotingCenterForAct4.exists(addrAct4)) {
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
