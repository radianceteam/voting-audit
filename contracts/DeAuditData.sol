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

  mapping(address => uint256) public votingCenterForAct4;

  struct Collation {
    uint256 indexVC;
    address addressAct4;
    mapping (address => uint256) validatorIndex;
    uint256 validatorQty;
  }

  mapping (uint256 => Collation) public queueAct4;

  uint256 public countAct4;

  uint256 public queueAct4Length;

  uint256 public countCollatedVC;

  uint256 public countResultedAct4;

  uint256 public labelLVA4;

  uint256 public limitValsForCol;

  uint128 constant public GRAMS_TO_ACT4_WITH_REG_VALIDATOR_MSG = 0.1 ton;

  struct VotingCenter {
    bytes name;
    bytes location;
    uint256[] votes;
    uint256 idVotingPool;
    uint256 idMunicipalBody;
    uint256 idDistrict;
    bool collationStatus;
    address[] act4Arr;
    address[] act4PositiveArr;
    address[] act4NegativeArr;
    mapping (address => address[]) validatorsArr;
  }

  mapping (uint256 => VotingCenter) public votingCenter;
  uint256[] public votingCenterKeys;

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

  // Grams constants
  uint128 constant public GRAMS_DEPLOY = 1 ton;

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

  // Modifier that allows public function to accept external calls only from the contract owner.
  modifier onlyAct4 {
    require(votingCenterForAct4.exists(msg.sender), 108);
    _;
  }


  // Init function.
  constructor(uint256 valueMaxLength) public onlyDeAuditRoot {
    limitValsForCol = valueMaxLength;
    countAct4 = 0;
    queueAct4Length = 0;
    countCollatedVC = 0;
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
    district[indexDistrict] = cd;
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
    district[indexDistrict] = cd;
    municipalBody[indexMunicipalBody] = cmb;
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
    district[indexDistrict] = cd;
    municipalBody[indexMunicipalBody] = cmb;
    votingPool[indexVotingPool] = cvp;
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
    uint8 vcms,
    uint256 lvfc,
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
        lvfc: lvfc,
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
      uint256 lvfc = getLimit();
      address deployedAct4 = deployAct4(rootDeAudit, address(this), indexVotingCenter, vcms, lvfc, collator, linkToCollationPhoto, voteMatrix, GRAMS_DEPLOY);
      if (deployedAct4 != address(0)) {
        votingCenterForAct4[deployedAct4] = indexVotingCenter;
        countAct4 ++;
        queueAct4Length ++;
        Collation ca4 = queueAct4[countAct4];
        ca4.indexVC = indexVotingCenter;
        ca4.addressAct4 = deployedAct4;
        queueAct4[countAct4] = ca4;
        VotingCenter cvc = votingCenter[indexVotingCenter];
        if (cvc.collationStatus == false) {
          cvc.collationStatus = true;
          countCollatedVC ++;
          votingCenter[indexVotingCenter] = cvc;
          address[] msgForParticipant;
          msgForParticipant.push(deployedAct4);
          TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, SUCCESS_COLLATION, collator, msgForParticipant);
          launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
        } else {
          votingCenter[indexVotingCenter] = cvc;
          address[] msgForParticipant;
          msgForParticipant.push(deployedAct4);
          TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, SUCCESS_COLLATION, collator, msgForParticipant);
          launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
        }
      } else {
        address[] msgForParticipant;
        msgForParticipant.push(address(0));
        TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, DATA_INCORRECT, collator, msgForParticipant);
        launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
      }
    } else {
      address[] msgForParticipant;
      msgForParticipant.push(address(0));
      TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).collationCallback, DATA_INCORRECT, collator, msgForParticipant);
      launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
    }
  }

  function getRandomStepsFrom(uint256 limit) private inline pure returns (uint256) {
    rnd.shuffle();
    uint256 rndSteps = rnd.next(limit);
    return rndSteps + 1;
  }

  function getQtyAct4() private inline view returns (uint256) {
    return queueAct4Length;
  }

  function getStartPoint() private inline view returns (uint256) {
    return labelLVA4;
  }

  function getNextKey(uint256 key) private inline view returns (uint256) {
    optional(uint256, Collation) nextVC = queueAct4.next(key);
    optional(uint256, Collation) minVC = queueAct4.min();
    uint256 nextKey;
    if (nextVC.hasValue()) {(nextKey, ) = nextVC.get();} else {nextKey = 0;}
    uint256 minKey;
    if (minVC.hasValue()) {(minKey, ) = minVC.get();} else {minKey = 0;}
    return (nextKey == 0) ? minKey : nextKey;
  }

  function getLimit() private inline view returns (uint256) {
    return limitValsForCol;
  }

  function isAct4Full(uint256 qtyValidations, uint256 limit) private inline pure returns (bool) {
    return qtyValidations >= limit;
  }

  function getNextAct4() private inline returns (uint256) {
    uint256 totalSteps = getQtyAct4();
    uint256 steps = getRandomStepsFrom(totalSteps);
    uint256 key = getStartPoint();
    repeat(steps) { key = getNextKey(key); }
    labelLVA4 = key;
    return key;
  }

  function addValidatorToAct4(address validatorAddr, uint256 position, uint128 gramsForAct4) private inline returns (address act4, bool status) {
    if (queueAct4.exists(position)) {
      Collation ca4 = queueAct4[position];
      act4 = ca4.addressAct4;
      status = false;
      if (!ca4.validatorIndex.exists(validatorAddr)) {
        ca4.validatorQty ++;
        ca4.validatorIndex[validatorAddr] = ca4.validatorQty;
        uint256 qv = ca4.validatorQty;
        status = true;
        TvmCell bodyA4 = tvm.encodeBody(IAct4(act4).setValidator, validatorAddr);
        act4.transfer({value: gramsForAct4, flag: 0, bounce:true, body:bodyA4});
        VotingCenter cvc = votingCenter[ca4.indexVC];
        if (!cvc.validatorsArr.exists(act4)) {
          cvc.act4Arr.push(act4);
          cvc.validatorsArr[act4].push(validatorAddr);
        } else {
          cvc.validatorsArr[act4].push(validatorAddr);
        }
        votingCenter[ca4.indexVC] = cvc;
        queueAct4[position] = ca4;
        uint256 lvfc = getLimit();
        if (isAct4Full(qv,lvfc)) {
          delete queueAct4[position];
          queueAct4Length --;
        }
      }
    } else {
      act4 = address(0);
      status = false;
    }
  }

  function setValidationForParticipant(address participantAddr, uint128 qtyValidations) public override onlyDeAudit {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    uint256 maxValidationsForParticipant = getQtyAct4();
    uint256 attemptQty = uint256(qtyValidations) < maxValidationsForParticipant ? uint256(qtyValidations) : maxValidationsForParticipant;
    address[] validatorAct4Arr;
    repeat(attemptQty) {
      uint256 selectedAct4 = getNextAct4();
      (address act4, bool status) = addValidatorToAct4(participantAddr, selectedAct4, GRAMS_TO_ACT4_WITH_REG_VALIDATOR_MSG);
      if (act4 != address(0) && status == true) {
        validatorAct4Arr.push(act4);
      }
    }
    TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).regForValidationCallback, participantAddr, validatorAct4Arr);
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

  function addVotesToAccumulatingArray(uint256[] arrAccumulating, uint256[] arrAdding) private view inline returns (uint256[]) {
    if (arrAccumulating.length == 0) {
      repeat(candidateKeys.length) {
        arrAccumulating.push(0);
      }
    }
    uint256 currentIndex = 0;
    repeat(candidateKeys.length) {
      arrAccumulating[currentIndex] += arrAdding[currentIndex];
      currentIndex ++;
    }
    return arrAccumulating;
  }

  function receivePositivResultFromAct4(uint256[] voteMatrix, address[] validatorsFBT, address gasPayeerAddr) public override onlyAct4 {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    countResultedAct4 ++;
    uint256 vcKey = votingCenterForAct4[msg.sender];
    VotingCenter cvc = votingCenter[vcKey];
    cvc.act4PositiveArr.push(msg.sender);
    if (cvc.act4PositiveArr.length == 1) {
      cvc.votes = voteMatrix;
      VotingPool cvp = votingPool[cvc.idVotingPool];
      cvp.votes = addVotesToAccumulatingArray(cvp.votes, cvc.votes);
      votingPool[cvc.idVotingPool] = cvp;
      MunicipalBody cmb = municipalBody[cvc.idMunicipalBody];
      cmb.votes = addVotesToAccumulatingArray(cmb.votes, cvc.votes);
      municipalBody[cvc.idMunicipalBody] = cmb;
      District cd = district[cvc.idDistrict];
      cd.votes = addVotesToAccumulatingArray(cd.votes, cvc.votes);
      district[cvc.idDistrict] = cd;
      uint256 index = 0;
      repeat(candidateKeys.length) {
        Candidate cc = candidate[index + 1];
        cc.votes += voteMatrix[index];
        candidate[index + 1] = cc;
        index ++;
      }
    }
    votingCenter[vcKey] = cvc;
    bool statusWithdraw = countAct4 > countResultedAct4 ? false : true;
    TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).burnTokens, validatorsFBT, gasPayeerAddr, statusWithdraw);
    launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
  }

  function receiveNegativeResultFromAct4(address collatorFBT, address[] validatorsFBT, address gasPayeerAddr) public override onlyAct4 {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    countResultedAct4 ++;
    uint256 vcKey = votingCenterForAct4[msg.sender];
    VotingCenter cvc = votingCenter[vcKey];
    cvc.act4NegativeArr.push(msg.sender);
    votingCenter[vcKey] = cvc;
    address[] assembledFBTArr = validatorsFBT;
    assembledFBTArr.push(collatorFBT);
    bool statusWithdraw = countAct4 > countResultedAct4 ? false : true;
    TvmCell body = tvm.encodeBody(IDeAudit(launchedDeAudit).burnTokens, assembledFBTArr, gasPayeerAddr, statusWithdraw);
    launchedDeAudit.transfer({value: 0, flag: 128, bounce:true, body:body});
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
    address[] act4Arr4Debot,
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
    act4Arr4Debot = curVotingCenter.act4Arr;
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
