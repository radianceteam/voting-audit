# DEX-core-voting-audit

# Assignment

Postvoting DeAudit

* DeAuditRoot.sol

Component functionality:

1) Deploy Participant.sol. By any user with some TONs and Free TON keys and seed phrase

before deploy need:
- send from any wallet some amount TONs to DeAuditRoot.sol
- set address of this wallet as your giver by: 	`function setGiver(address giverAddr) public checkPubkeyAndAccept`

`function deployParticipant(uint256 pubkey) public alwaysAccept`

after deploy:
- this amount - deployFee be on deployed Participant.sol

2) Select voteCountModel Majority, SoftMajority or SuperMajority. For votings after selector set. Only by first Action Team Member

`function selectMajority() public checkOwnerAndAccept `

`function selectSoftMajority() public checkOwnerAndAccept`

`function selectSuperMajority() public checkOwnerAndAccept`

3) Set limit Validations For Collation (limitVFC). For DeAudits.sol after value set. Only by first Action Team Member

`function setLimitVFC(uint128 settingLimitVFC) public checkOwnerAndAccept`

4) Set Participant.sol deployFee. For Participant.sol after value set. Only by first Action Team Member

`function setDeployFee(uint128 settingDeployFee) public checkOwnerAndAccept`

5) Set votingDuration for Action Team votings. For voting after value set. Only by first Action Team Member

`function setVotingDuration(uint256 settingVotingDuration) public checkOwnerAndAccept`

6) Set codeParticipant. For Participant.sol after code set. Only by first Action Team Member

`function setCodePaticipant(TvmCell code) public checkOwnerAndAccept`

7) Set setCodeDeAuditData. For DeAuditData.sol after code set. Only by first Action Team Member

`function setCodeDeAuditData(TvmCell code) public checkOwnerAndAccept`

8) Set setCodeDeAudit. For DeAudit.sol after code set. Only by first Action Team Member

`function setCodeDeAudit(TvmCell code) public checkOwnerAndAccept`

9) Set setCodeAct4. For Act4.sol from DeAuditData.sol from DeAudit.sol after code set. Only by first Action Team Member

`function setCodeAct4(TvmCell code) public checkOwnerAndAccept`

10) Set setCodeRootTokenContract. For RootTokenContract.sol for DeAudit.sol after code set. Only by first Action Team Member

`function setCodeRootTokenContract(TvmCell code) public checkOwnerAndAccept`

11) Set setCodeTONTokenWallet. For TONTokenWallet.sol for RootTokenContract.sol after code set. Only by first Action Team Member

`function setCodeTONTokenWallet(TvmCell code) public checkOwnerAndAccept`

12) Init voting for Add/Remove Action Team Member. By any Action Team Member


13) VoteFor/VoteAganst for Add/Remove Action Team Member. By any Action Team Member


14) Result voting for Add/Remove Action Team Member. By any Action Team Member after voting duration ended



15) Create DeAuditData.sol. By any Action Team Member
16) Edit DeAuditData.sol. By DeAuditData.sol creator before associated Launch DeAudit.sol
17) Init voting for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member
18) VoteFor/VoteAganst for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member
19) Result voting and Launch/NotLaunch DeAuditData.sol associated DeAudit.sol. By any Action Team Member after voting duration ended


2) Launch DeAudit.sol
# Prerequisites

`lsb_release -a`
* Ubuntu 20.04.2 LTS

`node -v`
* v14.16.0

`tondev -h`
* TONDev Version: 0.8.1

`tondev sol version`
* compiler   0.47.0  
* linker     0.11.87  
* stdlib     0.47.0  

## compilation

`tondev sol compile DeAuditRoot.sol && tondev sol compile DeAudit.sol && tondev sol compile DeAuditData.sol && tondev sol compile Act4.sol && tondev sol compile Participant.sol && tondev sol compile RootTokenContract.sol && tondev sol compile TONTokenWallet.sol`

## wrapping *.abi.json to *.js

`tondev js wrap DeAuditRoot.abi.json -o DeAuditRoot.js &&
tondev js wrap DeAudit.abi.json -o DeAudit.js &&
tondev js wrap DeAuditData.abi.json -o DeAuditData.js &&
tondev js wrap Act4.abi.json -o Act4.js &&
tondev js wrap Participant.abi.json -o Participant.js &&
tondev js wrap RootTokenContract.abi.json -o RootTokenContract.js &&
tondev js wrap TONTokenWallet.abi.json -o TONTokenWallet.js`

## convert





### `git@github.com:radianceteam/voting-audit.git`
### `cd ~/voting-audit/contracts/`
### `npm install`
### `cat selector > .env`
