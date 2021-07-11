pragma ton-solidity ^0.45.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import "./interfaces/IDeAuditData.sol";
import "./interfaces/IDeAuditRoot.sol";
import "./interfaces/IDeAudit.sol";
import "./interfaces/IAct4.sol";
import "./interfaces/IParticipant.sol";
import "./Act4.sol";


contract DeAuditData is IDeAuditData {

  uint256 static public idDeAuditData;
  address static public rootDeAudit;
  address static public initiator;
  bytes static public name;
  TvmCell static public codeAct4;


  address public launchedDeAudit;

  struct VotingCenter {
    bytes name;
    bytes location;
    uint256[] votes;
    uint256 idVotingPool;
    uint256 idMunicipalBody;
    uint256 idDistrict;
    bool collationStatus;
    uint256 countAdditionlPhotoLinks;
    address[] validatorsArr;
    // bytes collatorPhotoLink;
    // bytes[] additionalPhotoLinkArr;
  }

  mapping (uint256 => VotingCenter) public votingCenter;
  uint256[] public votingCenterKeys;

  mapping(address => uint256) public votingCenterForAct4;
  mapping(uint256 => address) public act4ForVotingCenter;
  uint256 public countAct4;
  uint256 public labelLVA4;


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

  // Collation callback types
  uint8 constant public DATA_INCORRECT = 0;
  uint8 constant public SUCCESS_COLLATION = 1;
  uint8 constant public ALREADY_COLLATED_LINK_ADDED = 2;
  uint8 constant public ALREADY_COLLATED_LINKS_FULL = 3;

  uint256 public settingLinksMaxLength;

  // Grams constants
  uint128 constant public GRAMS_DEPLOY = 1 ton;
  uint128 constant public GRAMS_SET = 0.5 ton;



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

  // Modifier that allows to accept external calls only from the DeAuditRoot.
  modifier onlyDeAudit {
    require(msg.sender == launchedDeAudit, 107);
    _;
  }

  // Modifier that allows public function to accept external calls only from the contract owner.
  modifier onlyInitiator {
    require(msg.sender == initiator, 103);
    _;
  }

  // Init function.
  constructor(uint256 valueMaxLength) public onlyDeAuditRoot {
    settingLinksMaxLength = valueMaxLength;
    countAct4 = 0;
    labelLVA4 = 1;
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

  function setDeAudit(address addressDeAudit, address addressATM) public override onlyDeAuditRoot {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    launchedDeAudit = addressDeAudit;
    addressATM.transfer({value: 0, flag: 128, bounce:true});
  }

  function deployAct4(
    address rootDeAuditAddr,
    address dataDeAudit,
    uint256 idVotingCenter,
    uint256 vcms,
    address collator,
    bytes collatorPhotoLink,
    uint256[] voteMatrix,
    uint128 gramms
  ) private inline returns (address deployedAddress) {
    deployedAddress = address(0);
    TvmCell stateInit = tvm.buildStateInit({
      contr: Act4,
      varInit: {
        rootDeAudit: rootDeAuditAddr,
        dataDeAudit: dataDeAudit,
        idVotingCenter: idVotingCenter,
        vcms: vcms,
        collator: collator,
        collatorPhotoLink: collatorPhotoLink,
        voteMatrix: voteMatrix
      },
      code: codeAct4,
      pubkey: tvm.pubkey()
    });
    deployedAddress = new Act4{
      stateInit: stateInit,
      flag: 0,
      bounce : false,
      value : gramms
    }();
  }

  function setCollation(address collator, uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix, uint8 vcms) public override onlyDeAudit {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    if (votingCenter.exists(indexVotingCenter) && voteMatrix.length == candidateKeys.length) {
      VotingCenter cvc = votingCenter[indexVotingCenter];
      if (!act4ForVotingCenter.exists(indexVotingCenter)) {
        address deployedAct4 = deployAct4(rootDeAudit, address(this), indexVotingCenter, vcms, collator, linkToCollationPhoto, voteMatrix, GRAMS_DEPLOY);
        act4ForVotingCenter[indexVotingCenter] = deployedAct4;
        votingCenterForAct4[deployedAct4] = indexVotingCenter;
        countAct4 ++;
        cvc.collationStatus = true;
        votingCenter[indexVotingCenter] = cvc;
        TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, SUCCESS_COLLATION, collator);
        launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
      } else if (cvc.countAdditionlPhotoLinks < settingLinksMaxLength) {
        address addressAct4 = act4ForVotingCenter[indexVotingCenter];
        TvmCell bodyAct4 = tvm.encodeBody(IAct4(addressAct4).addToAdditionalPhotoLinkArr, linkToCollationPhoto, collator);
        addressAct4.transfer({value: GRAMS_SET, flag: 0, bounce:true, body:bodyAct4});
        cvc.countAdditionlPhotoLinks ++;
        votingCenter[indexVotingCenter] = cvc;
        TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, ALREADY_COLLATED_LINK_ADDED, collator);
        launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
      } else {
        TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, ALREADY_COLLATED_LINKS_FULL, collator);
        launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
      }
    } else {
      TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, DATA_INCORRECT, collator);
      launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
    }
  }

  function getRandomStepsFrom(uint256 limit) private pure inline returns (uint256) {
    rnd.shuffle();
    return rnd.next(limit) + 1;
  }

  function getQtyAct4() private inline view returns (uint256) {
    return countAct4;
  }

  function getStartPoint() private inline view returns (uint256) {
    return labelLVA4;
  }

  function getNextKey(uint256 key) private view returns (uint256) {
    optional(uint256, address) nexta4fvc = act4ForVotingCenter.next(key);
    optional(uint256, address) mina4fvc = act4ForVotingCenter.min();
    optional(uint256, address) maxa4fvc = act4ForVotingCenter.max();
    uint256 nextKey;
    if (nexta4fvc.hasValue()) {(nextKey, ) = nexta4fvc.get();} else {nextKey = 0;}
    uint256 minKey;
    if (mina4fvc.hasValue()) {(minKey, ) = mina4fvc.get();} else {minKey = 0;}
    uint256 maxKey;
    if (maxa4fvc.hasValue()) {(maxKey, ) = maxa4fvc.get();} else {maxKey = 0;}
    return (nextKey == 0 && key == maxKey) ? minKey : nextKey;
  }


  function setValidationForParticipant(address participantAddr, uint256 qtyValidations) public override onlyDeAudit {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    uint256[] validationsArr;
    repeat(qtyValidations) {
      uint256 totalSteps = getQtyAct4();
      uint256 steps = getRandomStepsFrom(totalSteps);
      uint256 key = getStartPoint();
      repeat(steps) { key = getNextKey(key); }
      labelLVA4 = key;
      VotingCenter cvc = votingCenter[key];
      cvc.validatorsArr.push(participantAddr);
      votingCenter[key] = cvc;
      validationsArr.push(key);
      address act4Addr = act4ForVotingCenter[key];
      TvmCell bodyA4 = tvm.encodeBody(IAct4(act4Addr).setValidator, participantAddr);
      act4Addr.transfer({value: GRAMS_SET, flag: 0, bounce:true, body:bodyA4});
    }
    TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).regForValidationCallback, participantAddr, validationsArr);
    launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
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

  function getVotingCenter4Debot(uint256 votingCenterCurrentKey) public view returns (
    bytes name4Debot,
    bytes location4Debot,
    uint256[] votes4Debot,
    uint256 idVotingPool4Debot,
    uint256 idMunicipalBody4Debot,
    uint256 idDistrict4Debot,
    bool collationStatus4Debot,
    uint256 countAdditionlPhotoLinks4Debot,
    uint256 votingCenterCurrentKeyD
  ) {
    VotingCenter curVotingCenter = votingCenter[votingCenterCurrentKey];
    name4Debot = curVotingCenter.name;
    location4Debot = curVotingCenter.location;
    votes4Debot = curVotingCenter.votes;
    idVotingPool4Debot = curVotingCenter.idVotingPool;
    idMunicipalBody4Debot = curVotingCenter.idMunicipalBody;
    idDistrict4Debot = curVotingCenter.idDistrict;
    collationStatus4Debot = curVotingCenter.collationStatus;
    countAdditionlPhotoLinks4Debot = curVotingCenter.countAdditionlPhotoLinks;
    votingCenterCurrentKeyD = votingCenterCurrentKey;
  }


  function getVotingPool4Debot(uint256 votingPoolCurrentKey) public view returns (
    bytes name4Debot,
    uint256[] votes4Debot,
    uint256[] votingCentersArr4Debot,
    uint256 votingPoolCurrentKeyD
  ) {
    VotingPool curVotingPool = votingPool[votingPoolCurrentKey];
    name4Debot = curVotingPool.name;
    votes4Debot = curVotingPool.votes;
    votingCentersArr4Debot = curVotingPool.votingCentersArr;
    votingPoolCurrentKeyD = votingPoolCurrentKey;
  }

  function getMunicipalBody4Debot(uint256 municipalBodyCurrentKey) public view returns (
    bytes name4Debot,
    uint256[] votes4Debot,
    uint256[] votingCentersArr4Debot,
    uint256[] votingPoolsArr4Debot,
    uint256 municipalBodyCurrentKeyD
  ) {
    MunicipalBody curMunicipalBody = municipalBody[municipalBodyCurrentKey];
    name4Debot = curMunicipalBody.name;
    votes4Debot = curMunicipalBody.votes;
    votingCentersArr4Debot = curMunicipalBody.votingCentersArr;
    votingPoolsArr4Debot = curMunicipalBody.votingPoolsArr;
    municipalBodyCurrentKeyD = municipalBodyCurrentKey;
  }


  function getDistrict4Debot(uint256 districtCurrentKey) public view returns (
    bytes name4Debot,
    uint256[] votes4Debot,
    uint256[] votingCentersArr4Debot,
    uint256[] votingPoolsArr4Debot,
    uint256[] municipalBodiesArr4Debot,
    uint256 districtCurrentKeyD
  ) {
    District curDistrict = district[districtCurrentKey];
    name4Debot = curDistrict.name;
    votes4Debot = curDistrict.votes;
    votingCentersArr4Debot = curDistrict.votingCentersArr;
    votingPoolsArr4Debot = curDistrict.votingPoolsArr;
    municipalBodiesArr4Debot = curDistrict.municipalBodiesArr;
    districtCurrentKeyD = districtCurrentKey;
  }

  function getCandidate4Debot(uint256 candidateCurrentKey) public view returns (
    bytes name4Debot,
    uint256 votes4Debot,
    uint256 candidateCurrentKeyD
  ) {
    Candidate curCandidate = candidate[candidateCurrentKey];
    name4Debot = curCandidate.name;
    votes4Debot = curCandidate.votes;
    candidateCurrentKeyD = candidateCurrentKey;
  }


}
