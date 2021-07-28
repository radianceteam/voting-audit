# Post-voting-audit-core smartcontracts

## Assignment

Post-voting-audit-core components

### DeAuditRoot.sol

functionality:

* Deploy Participant.sol. By any user with some TONs and Free TON keys and seed phrase

  before deploy:
  - send from any wallet some amount TONs to DeAuditRoot.sol
  - set address of this wallet as your giver by: 	`function setGiver(address giverAddr) public checkPubkeyAndAccept`

  deploy:
  `function deployParticipant(uint256 pubkey) public alwaysAccept`

  after deploy:
  - this amount - deployFee be on deployed Participant.sol

* Select voteCountModel Majority, SoftMajority or SuperMajority. For votings after selector set. Only by first Action Team Member

`function selectMajority() public checkOwnerAndAccept `

`function selectSoftMajority() public checkOwnerAndAccept`

`function selectSuperMajority() public checkOwnerAndAccept`

* Set limit Validations For Collation (limitVFC). For DeAudits.sol after value set. Only by first Action Team Member

`function setLimitVFC(uint128 settingLimitVFC) public checkOwnerAndAccept`

* Set Participant.sol deployFee. For Participant.sol after value set. Only by first Action Team Member

`function setDeployFee(uint128 settingDeployFee) public checkOwnerAndAccept`

* Set votingDuration for Action Team votings. For voting after value set. Only by first Action Team Member

`function setVotingDuration(uint256 settingVotingDuration) public checkOwnerAndAccept`

* Set codeParticipant. For Participant.sol after code set. Only by first Action Team Member

`function setCodePaticipant(TvmCell code) public checkOwnerAndAccept`

* Set codeDeAuditData. For DeAuditData.sol after code set. Only by first Action Team Member

`function setCodeDeAuditData(TvmCell code) public checkOwnerAndAccept`

* Set codeDeAudit. For DeAudit.sol after code set. Only by first Action Team Member

`function setCodeDeAudit(TvmCell code) public checkOwnerAndAccept`

* Set codeAct4. For Act4.sol from DeAuditData.sol from DeAudit.sol after code set. Only by first Action Team Member

`function setCodeAct4(TvmCell code) public checkOwnerAndAccept`

* Set codeRootTokenContract. For RootTokenContract.sol for DeAudit.sol after code set. Only by first Action Team Member

`function setCodeRootTokenContract(TvmCell code) public checkOwnerAndAccept`

* Set codeTONTokenWallet. For TONTokenWallet.sol for RootTokenContract.sol after code set. Only by first Action Team Member

`function setCodeTONTokenWallet(TvmCell code) public checkOwnerAndAccept`

* Init voting for Add/Remove Action Team Member. By any Action Team Member

`	function initVoteAddActionTeamMember(address addressParticipant) public OnlyActionTeamMember`
` function initVoteRemoveActionTeamMember(address addressParticipant) public OnlyActionTeamMember`

* Create DeAuditData.sol. By any Action Team Member

`function createDeAuditData(
  bytes nameDeAudit,
  uint256 timeStart,
  uint256 colPeriod,
  uint256 valPeriod,
  uint128 colStake,
  uint128 valStake
) public OnlyActionTeamMember`

    set params of created DeAudit:
    - `nameDeAudit` name
    - `timeStart` time start
    - `colPeriod` collation period
    - `valPeriod` validation period
    - `colStake` collation stake
    - `valStake` validtion stake


* Init voting for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member

`function initVoteDeAudut(address addrDeAuditData) public OnlyActionTeamMember`

* VoteFor/VoteAganst for Add/Remove Action Team Member or Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member

`function voteFor(uint256 voteId) public override OnlyActionTeamMember`
`function voteAgainst(uint256 voteId) public override OnlyActionTeamMember`

* Result voting and Add/Remove Action Team Member or Launch/NotLaunch DeAuditData.sol associated DeAudit.sol. By any Action Team Member after voting duration ended

`function resultVote(uint256 voteId) public OnlyActionTeamMember`

### Participant.sol

functionality:

* Publish data of participant. Only by owner

`function publishData(bytes publishName, bytes publishPhotoLink, bytes publishDataLink)  public checkOwnerAndAccept `

  set params of published data:
  - `publishName` name
  - `publishPhotoLink` photoLink
  - `publishDataLink` dataLink

* Send TONs to DeAuditRoot.sol and Init voting for Add/Remove Action Team Member. Only by Action Team Member

`function initVoteAddActionTeamMember(address participantAddr, uint128 grams)  public checkOwnerAndAccept`

`function initVoteRemoveActionTeamMember(address participantAddr, uint128 grams) public checkOwnerAndAccept`

* Send TONs to DeAuditRoot.sol for deploy DeAuditData.sol. Only by Action Team Member

`function createDeAuditData(
  bytes nameDeAuditData,
  uint256 timeStart,
  uint256 colPeriod,
  uint256 valPeriod,
  uint128 colStake,
  uint128 valStake,
  uint128 grams
) public checkOwnerAndAccept `

* Send TONs to DeAuditRoot.sol and Init voting for Launch/NotLaunch DeAuditData.sol associated DeAudit.sol. Only by Action Team Member

`function initVoteDeAudut(address addrDeAuditData, uint128 grams)  public  checkOwnerAndAccept `

* Send TONs to DeAuditRoot.sol and voteFor/voteAgainst any Actiom Team Members voting. Only by Action Team Member

`function voteFor(uint256 voteId, uint128 grams)  public  checkOwnerAndAccept`

`function voteAgainst(uint256 voteId, uint128 grams) public checkOwnerAndAccept`

* Send TONs to DeAuditRoot.sol and result any Actiom Team Members voting. Only by Action Team Member

`function resultVote(uint256 voteId, uint128 grams)  public  checkOwnerAndAccept`

* Send TONs to DeAuditRoot.sol and sendTrigger to any Act4.sol of any DeAudit.sol for result it's validators voting after validation period ended. Only by Action Team Member

`function sendTrigger(address addrDeAudit, address addrAct4, uint128 grams)  public view checkOwnerAndAccept`

* Send TONs to DeAuditData.sol and add voting district. Only by DeAuditData.sol creator

`function addDistrict(address addressDeAuditData, bytes nameDistrict, uint128 grams)  public view checkOwnerAndAccept`

* Send TONs to DeAuditData.sol and add voting municipal body into any added earlier districts. Only by DeAuditData.sol creator

`function addMunicipalBody(
  address addressDeAuditData,
  bytes nameMunicipalBody,
  uint256 indexDistrict,
  uint128 grams
)  public  checkOwnerAndAccept `

* Send TONs to DeAuditData.sol and add  voting pool into any added earlier districts and municipal bodies. Only by DeAuditData.sol creator

`function addVotingPool(
  address addressDeAuditData,
  bytes nameVotingPool,
  uint256 indexDistrict,
  uint256 indexMunicipalBody,
  uint128 grams
)  public   checkOwnerAndAccept `

* Send TONs to DeAuditData.sol and add voting center into any added earlier districts, municipal bodies, voting pools. Only by DeAuditData.sol creator

`function addVotingCenter(
  address addressDeAuditData,
  bytes nameVotingCenter,
  bytes location,
  uint256 indexDistrict,
  uint256 indexMunicipalBody,
  uint256 indexVotingPool,
  uint128 grams
)   public  checkOwnerAndAccept `

* Send TONs to DeAuditData.sol and add candidate of voting. Only by DeAuditData.sol creator

`function addCandidate(
  address addressDeAuditData,
  bytes nameCandidate,
  uint128 grams
) public checkOwnerAndAccept `

* Send TONs to DeAudit.sol and add stake and collation from any voting center. Any participant

`function addCollation(
  address addressDeAudit,
  uint256 indexVotingCenter,
  bytes linkToCollationPhoto,
  uint256[] voteMatrix,
  uint128 grams
) public checkOwnerAndAccept `

* Send TONs to DeAudit.sol and reg for validations. Any participant. Qty of validation compute base on msg.value. Validation assign randomly. One validator can not validate more then one time into any collation. Qty of validation of one validator can not be more then current qty Act4.sol in queue for validators.

`function registrationForValidation(address addressDeAudit, uint128 grams) public checkOwnerAndAccept `

* Send TONs to Act4.sol and validateFor/validateAgainst. Only assigned validators

`function validateFor(address addrAct4, uint128 grams)  public checkOwnerAndAccept `

`function validateAgainst(address addrAct4, uint128 grams)  public checkOwnerAndAccept `

* Send TONs to DeAudit.sol and receive back stake and reward. Only token holder after withdraw opened

`function getRewardAndStakeBack(address addressDeAudit, uint128 grams) public checkOwnerAndAccept`


### DeAuditData.sol

functionality:

* Receive TONs from Participant.sol, check that participant is this DeAuditData.sol creator and add candidate to `mapping (uint256 => Candidate) public candidate`. Returns change

`function addCandidate(bytes nameCandidate) public override onlyInitiatorBeforeLaunch `

* Receive TONs from Participant.sol, check that participant is this DeAuditData.sol creator and add district to `mapping (uint256 => District) public district;`. Returns change

`function addDistrict(bytes nameDistrict) public override onlyInitiatorBeforeLaunch`

* Receive TONs from Participant.sol,, check that `msg.sender` == `address initiator` Add/NotAdd new municipal body to `mapping (uint256 => MunicipalBody) public municipalBody;`. Returns change

`function addMunicipalBody(bytes nameMunicipalBody, uint256 indexDistrict) public override onlyInitiatorBeforeLaunch `

* Receive TONs from Participant.sol, check that `msg.sender` == `address initiator` Add/NotAdd new voting pool to `mapping (uint256 => MunicipalBody) public votingPool;`. Returns change

`function addVotingPool(bytes nameVotingPool, uint256 indexDistrict, uint256 indexMunicipalBody) public override onlyInitiatorBeforeLaunch`

* Receive TONs from Participant.sol, check that `msg.sender` == `address initiator` Add/NotAdd new voting center to `mapping (uint256 => VotingPool) public votingCenter`. Returns change

`function addVotingCenter(bytes nameVotingCenter, bytes location, uint256 indexDistrict, uint256 indexMunicipalBody, uint256 indexVotingPool) public override onlyInitiatorBeforeLaunch `

* Receive TONs from Participant.sol, check that `msg.sender` == `address launchedDeAudit` , deploy new Act4.sol with income params from collator

`function setCollation(address collator, uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix, uint8 vcms) public override onlyDeAudit`

* Receive TONs from Participant.sol, check that `msg.sender` == `address launchedDeAudit` , then repeate `qtyValidations` times proccess:

      1) tvm.randomizer give number((0 ... queueAct.length) + 1) of shifts from current label to next in queue Act4 waiting vakidators
      2) then do this and if next is after max go to min
      3) check if destination Act4 have place for new validator and this validator is fist for this Act4 assign this validator to this Act4.sol
      4) result complete array of Act4.sol
      5) send set msg to Act4.sol about new validators
      6) send set msg to Participant.sol with array of Act4 for validation work

`function setValidationForParticipant(address participantAddr, uint128 qtyValidations) public onlyDeAudit `

* Receive data msg with TONs from resulted Act4.sol after calculateVotes == true:

      1) confirmed by validators votes for candidates `uint256[] voteMatrix`
      2) send and accumulate this votes to voting pool
      3) send and accumulate this votes to municipal body
      4) send and accumulate this votes to district
      5) send and accumulate this votes to each candidate
      6) burn tokens for validators voted against

`function receivePositivResultFromAct4(uint256[] voteMatrix, address[] validatorsFBT, address gasPayeerAddr) public onlyAct4`

* Receive data msg with TONs from resulted Act4.sol after calculateVotes == false:

      6) burn tokens for collator
      6) burn tokens for validators voted for

`function receiveNegativeResultFromAct4(address collatorFBT, address[] validatorsFBT, address gasPayeerAddr) public onlyAct4`


### DeAudit.sol

functionality:

`function addCollation(uint256 indexVotingCenter, bytes linkToCollationPhoto, uint256[] voteMatrix) public override onlyCollationPeriod`

`function collationCallback(uint8 statusCollation, address addressCollator, address[] msgData) public override onlyDeAuditData`

`function registrationForValidation() public override onlyValidationPeriod`

`function regForValidationCallback(address addressValidator, address[] msgData) public override onlyDeAuditData`

`function burnTokens(address[] addressParticipantArr, address gasPayeerAddress, bool statusWithraw) public override onlyDeAuditData`

`function getRewardAndStakeBack() public override onlyStakeHolder `


### Act4.sol

functionality:

`function trigger(address member) public override onlyDeAuditData `

`function voteFor() public override onlyValidatorOnce`

`function voteAgainst() public override onlyValidatorOnce `

`function setValidator(address participant) public override onlyDeAuditData`

### RootTokenContract.sol

https://github.com/broxus/ton-eth-bridge-token-contracts

### TONTokenWallet.sol

https://github.com/broxus/ton-eth-bridge-token-contracts

## Implementation

* Prerequisites

`lsb_release -a`
Ubuntu 20.04.2 LTS

`node -v`
v14.16.0

`tondev -h`
TONDev Version: 0.8.1

`tondev sol version`
compiler: 0.47.0,  linker: 0.11.87,  stdlib: 0.47.0  

* Compile

`tondev sol compile DeAuditRoot.sol && tondev sol compile DeAudit.sol && tondev sol compile DeAuditData.sol && tondev sol compile Act4.sol && tondev sol compile Participant.sol && tondev sol compile RootTokenContract.sol && tondev sol compile TONTokenWallet.sol`

* Wrap *.abi.json to *.js

`tondev js wrap DeAuditRoot.abi.json -o DeAuditRoot.js &&
tondev js wrap DeAudit.abi.json -o DeAudit.js &&
tondev js wrap DeAuditData.abi.json -o DeAuditData.js &&
tondev js wrap Act4.abi.json -o Act4.js &&
tondev js wrap Participant.abi.json -o Participant.js &&
tondev js wrap RootTokenContract.abi.json -o RootTokenContract.js &&
tondev js wrap TONTokenWallet.abi.json -o TONTokenWallet.js`

* Convert *.tvc to *.txt

`/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc DeAudit.tvc | grep code: | cut -c 8- > DeAudit.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc DeAuditData.tvc | grep code: | cut -c 8- > DeAuditData.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc Act4.tvc | grep code: | cut -c 8- > Act4.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc Participant.tvc | grep code: | cut -c 8- > Participant.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc RootTokenContract.tvc | grep code: | cut -c 8- > RootTokenContract.txt &&
/home/yaroslav/.tondev/solidity/tvm_linker decode --tvc TONTokenWallet.tvc | grep code: | cut -c 8- > TONTokenWallet.txt`

* Set results to DeAuditRootCode.js
