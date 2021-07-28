# DEX-core-voting-audit

# Assignment

Postvoting DeAudit

* DeAuditRoot.sol
Component functionality:
1) Select voteCountModel Majority, SoftMajority or SuperMajority. For votings after selector set. Only by first Action Team Member

`function selectMajority() public checkOwnerAndAccept {
  voteCountModel = VOTE_COUNT_MODEL_MAJORITY;
}`

`function selectSoftMajority() public checkOwnerAndAccept {
  voteCountModel = VOTE_COUNT_MODEL_SOFT_MAJORITY;
}`

`function selectSuperMajority() public checkOwnerAndAccept {
  voteCountModel = VOTE_COUNT_MODEL_SUPER_MAJORITY;
}`

2) Set limit Validations For Collation (limitVFC). For DeAudits.sol after value set. Only by first Action Team Member

`function setLimitVFC(uint128 settingLimitVFC) public checkOwnerAndAccept {
  limitVFC = settingLimitVFC;
}`

3) Set Participant.sol deployFee. For Participant.sol after value set. Only by first Action Team Member

`function setDeployFee(uint128 settingDeployFee) public checkOwnerAndAccept {
  deployFee = settingDeployFee;
}`

4) Set votingDuration for Action Team votings. For voting after value set. Only by first Action Team Member

`function setVotingDuration(uint256 settingVotingDuration) public checkOwnerAndAccept {
  votingDuration = settingVotingDuration;
}`

5) Set codeParticipant. For Participant.sol after code set. Only by first Action Team Member

`function setCodePaticipant(TvmCell code) public checkOwnerAndAccept {
     codeParticipant = code;
    }`

6)Set setCodeDeAuditData. For DeAuditData.sol after code set. Only by first Action Team Member

`function setCodeDeAuditData(TvmCell code) public checkOwnerAndAccept {
  codeDeAuditData = code;
}`

7)Set setCodeDeAudit. For DeAudit.sol after code set. Only by first Action Team Member

`function setCodeDeAudit(TvmCell code) public checkOwnerAndAccept {
  codeDeAudit = code;
}`

8)Set setCodeAct4. For Act4.sol from DeAuditData.sol from DeAudit.sol after code set. Only by first Action Team Member

`function setCodeAct4(TvmCell code) public checkOwnerAndAccept {
  codeAct4 = code;
}`

9)Set setCodeRootTokenContract. For RootTokenContract.sol for DeAudit.sol after code set. Only by first Action Team Member

`function setCodeRootTokenContract(TvmCell code) public checkOwnerAndAccept {
  codeRootTokenContract = code;
}`

10)Set setCodeTONTokenWallet. For TONTokenWallet.sol for RootTokenContract.sol after code set. Only by first Action Team Member

`function setCodeTONTokenWallet(TvmCell code) public checkOwnerAndAccept {
  codeTONTokenWallet = code;
}`

11) Init voting for Add/Remove Action Team Member. By any Action Team Member
12) VoteFor/VoteAganst for Add/Remove Action Team Member. By any Action Team Member
13) Result voting for Add/Remove Action Team Member. By any Action Team Member after voting duration ended

14) Create DeAuditData.sol. By any Action Team Member
15) Edit DeAuditData.sol. By DeAuditData.sol creator before associated Launch DeAudit.sol
16) Init voting for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member
17) VoteFor/VoteAganst for Launch DeAuditData.sol associated DeAudit.sol. By any Action Team Member
18) Result voting and Launch/NotLaunch DeAuditData.sol associated DeAudit.sol. By any Action Team Member after voting duration ended


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
