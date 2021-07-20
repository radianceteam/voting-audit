const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const fs = require('fs');
const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev','https://gql.custler.net'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!","Hello fld dev net TON!"];
const networkSelector = process.env.NET_SELECTOR;

const { GiverContract } = require("./Giver.js");
const { DeAuditRootCode } = require("./DeAuditRootCode.js");


const { DeAuditRootContract } = require("./DeAuditRoot.js");
const { DeAuditContract } = require("./DeAudit.js");
const { DeAuditDataContract } = require("./DeAuditData.js");
const { ParticipantContract } = require("./Participant.js");
const { Act4Contract } = require("./Act4.js");
const { TONTokenWalletContract } = require("./TONTokenWallet.js");

const indexKeysDeAuditData = 2;



const pathJsonRoot = './DeAuditRoot.json';
const pathJsonParticipants = './Participants.json';

const hex = require('ascii-hex');
const hex2ascii = require('hex2ascii');

function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}


TonClient.useBinaryLibrary(libNode);

async function logEvents(params, response_type) {
  // console.log(`params = ${JSON.stringify(params, null, 2)}`);
  // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}

async function main(client) {
  let response;

  const rootKeys = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).keys;
  const rootAddr = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).address;
  console.log("rootAddr:", rootAddr);

  const rootAcc = new Account(DeAuditRootContract, {
    address:rootAddr,
    signer: rootKeys,
    client,
  });

  // let pubkeyCreator = '0x'+rootKeys.keys.public;
  // response = await rootAcc.runLocal("getParticipantAddress", {_answer_id:0, pubkeyParticipant:pubkeyCreator});
  // console.log("creatorAddr:", response.decoded.output);
  //
  // const creatorAddr = response.decoded.output.value0;
  // const creatorAcc = new Account(ParticipantContract, {
  //   address: creatorAddr,
  //   signer: rootKeys,
  //   client,
  // });
  //
  // response = await creatorAcc.runLocal("rootDeAudit", {});
  // console.log("Contract reacted to your rootDeAudit:", response.decoded.output);
  //
  // response = await creatorAcc.runLocal("initiatedDeAuditData", {});
  // console.log("Contract reacted to your initiatedDeAuditData:", response.decoded.output);


  response = await rootAcc.runLocal("keysDeAudit", {});
  console.log("keysDeAudit index:"+indexKeysDeAuditData+' address:'+response.decoded.output.keysDeAudit[indexKeysDeAuditData]);

  let deauditAddr = response.decoded.output.keysDeAudit[indexKeysDeAuditData];
  let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));

  const deauditAcc = new Account(DeAuditContract, {address: deauditAddr,client,});
  response = await deauditAcc.runLocal("colStake", {});
  console.log("deauditAcc colStake:", response.decoded.output);

  response = await deauditAcc.runLocal("dataDeAudit", {});
  let deauditdataAddr = response.decoded.output.dataDeAudit;
  console.log("deauditAcc dataDeAudit:", deauditdataAddr);

  const deauditDataAcc = new Account(DeAuditDataContract, {address: deauditdataAddr,client,});

  response = await deauditDataAcc.runLocal("launchedDeAudit", {});
  console.log("deauditDataAcc launchedDeAudit:", response.decoded.output);

  response = await deauditDataAcc.runLocal("votingCenterKeys", {});

  let votingCenterKeys = response.decoded.output.votingCenterKeys;

  response = await deauditDataAcc.runLocal("votingCenter", {});

  let votingCenters = response.decoded.output.votingCenter;




  let count = 0;
  while (count < 16) {
    let indexParticipant = count;
    let indexVC = count;
    const participantAddr = resultArr[indexParticipant].address;
    const participantKeys = resultArr[indexParticipant].keys;
    const participantAcc = new Account(ParticipantContract, {address: participantAddr,signer: participantKeys,client,});
    console.log("collator address:", participantAddr);
    response = await participantAcc.runLocal("getBalance", {_answer_id:0});
    console.log("collator getBalance:", response.decoded.output);
    let votingCenterIndex = votingCenterKeys[indexVC];
    console.log("deauditDataAcc votingCenterKey:", votingCenterIndex);
    let votingCenter = votingCenters[votingCenterIndex];
    console.log("deauditDataAcc votingCenter name:", hex2ascii(votingCenter.name));
    response = await participantAcc.run("addCollation", {
      addressDeAudit:deauditAddr,
      indexVotingCenter:votingCenterIndex,
      linkToCollationPhoto:toHex("https://drive.google.com/file/d/1CbJuffTxds3iooRkKWuVdMO5ENMHAiIh/view?usp=sharing"),
      voteMatrix:[0,1,46,0],
      grams:5000000000
    });
    console.log("Contract reacted to your addCollation:", response.decoded.output);
    count++;
  }


}

(async () => {
  const client = new TonClient({network: { endpoints: [networks[networkSelector]],},});
  try {
    console.log(hello[networkSelector]);
    await main(client);
    process.exit(0);
  } catch (error) {
    if (error.code === 504) {
      console.error(`Network is inaccessible. Pls check connection`);
    } else {
      console.error(error);
    }
  }
  client.close();
})();
