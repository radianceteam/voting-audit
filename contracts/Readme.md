# DEX-core-voting-audit

## Assignment

Post voting DeAudit components

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
) public override OnlyActionTeamMember`

* Init voting for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member

`function initVoteDeAudut(address addrDeAuditData) public override OnlyActionTeamMember`

* VoteFor/VoteAganst for Add/Remove Action Team Member or Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member

`function voteFor(uint256 voteId) public override OnlyActionTeamMember`
`function voteAgainst(uint256 voteId) public override OnlyActionTeamMember`

* Result voting and Add/Remove Action Team Member or Launch/NotLaunch DeAuditData.sol associated DeAudit.sol. By any Action Team Member after voting duration ended

`function resultVote(uint256 voteId) public override OnlyActionTeamMember`

# Implementation

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
