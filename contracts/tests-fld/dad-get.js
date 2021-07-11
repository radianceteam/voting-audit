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
const { DeAuditDataContract } = require("./DeAuditData.js");
const { ParticipantContract } = require("./Participant.js");

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

  let pubkeyCreator = '0x'+rootKeys.keys.public;
  response = await rootAcc.runLocal("getParticipantAddress", {_answer_id:0, pubkeyParticipant:pubkeyCreator});
  console.log("creatorAddr:", response.decoded.output);

  const creatorAddr = response.decoded.output.value0;
  const creatorAcc = new Account(ParticipantContract, {
    address: creatorAddr,
    signer: rootKeys,
    client,
  });

  response = await creatorAcc.runLocal("rootDeAudit", {});
  console.log("Contract reacted to your rootDeAudit:", response.decoded.output);

  response = await creatorAcc.runLocal("initiatedDeAuditData", {});
  console.log("Contract reacted to your initiatedDeAuditData:", response.decoded.output);


  let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));
  const participantAddr = resultArr[0].address;
  const participantKeys = resultArr[0].keys;
  const participantAcc = new Account(ParticipantContract, {
    address: participantAddr,
    signer: participantKeys,
    client,
  });

  response = await rootAcc.runLocal("keysDeAuditData", {});
  console.log("Contract reacted to your keysDeAuditData:", response.decoded.output);

  let keysDeAuditData = response.decoded.output.keysDeAuditData;
  console.log("Contract reacted to your keysDeAuditData[0]:", keysDeAuditData[2]);


  let deauditDataAddr1 = keysDeAuditData[0];


  const deauditdataAcc = new Account(DeAuditDataContract, {
    address: deauditDataAddr1,
    // signer: participantKeys,
    client,
  });

  response = await deauditdataAcc.runLocal("idDeAuditData", {});
  console.log("Contract reacted to your idDeAuditData:", response.decoded.output);

  response = await deauditdataAcc.runLocal("rootDeAudit", {});
  console.log("Contract reacted to your rootDeAudit:", response.decoded.output);

  response = await deauditdataAcc.runLocal("initiator", {});
  console.log("Contract reacted to your initiator:", response.decoded.output);

  response = await deauditdataAcc.runLocal("name", {});
  console.log("Contract reacted to your name:", hex2ascii(response.decoded.output.name));

  // response = await deauditdataAcc.runLocal("district", {});
  // console.log("Contract reacted to your district:", response.decoded.output);
  //
  // response = await deauditdataAcc.runLocal("districtKeys", {});
  // console.log("Contract reacted to your districtKeys:", response.decoded.output);


  response = await deauditdataAcc.runLocal("candidate", {});
  // console.log("Contract reacted to your candidate:", response.decoded.output);
  let candidate = response.decoded.output.candidate;


  response = await deauditdataAcc.runLocal("candidateKeys", {});
  // console.log("Contract reacted to your candidateKeys:", response.decoded.output);
  let candidateKeys = response.decoded.output.candidateKeys;

  for (const item of candidateKeys) {
    console.log(hex2ascii(candidate[item].name));
  }



  response = await deauditdataAcc.runLocal("districtKeys", {});
  // console.log("Contract reacted to your districtKeys:", response.decoded.output);
  let districtKeys = response.decoded.output.districtKeys;

  response = await deauditdataAcc.runLocal("district", {});
  // console.log("Contract reacted to your district:", response.decoded.output);
  let district = response.decoded.output.district;

  for (const item of districtKeys) {
    console.log(hex2ascii(district[item].name));
  }


  response = await deauditdataAcc.runLocal("municipalBodyKeys", {});
  // console.log("Contract reacted to your municipalBodyKeys:", response.decoded.output);
  let municipalBodyKeys = response.decoded.output.municipalBodyKeys;

  response = await deauditdataAcc.runLocal("municipalBody", {});
  // console.log("Contract reacted to your municipalBody:", response.decoded.output);
  let municipalBody = response.decoded.output.municipalBody;

  for (const item of municipalBodyKeys) {
    console.log(hex2ascii(municipalBody[item].name));
  }


  response = await deauditdataAcc.runLocal("votingPoolKeys", {});
  // console.log("Contract reacted to your votingPoolKeys:", response.decoded.output);
  let votingPoolKeys = response.decoded.output.votingPoolKeys;

  response = await deauditdataAcc.runLocal("votingPool", {});
  // console.log("Contract reacted to your votingPool:", response.decoded.output);
  let votingPool = response.decoded.output.votingPool;

  for (const item of votingPoolKeys) {
    console.log(hex2ascii(votingPool[item].name));
  }


  response = await deauditdataAcc.runLocal("votingCenterKeys", {});
  // console.log("Contract reacted to your votingCenterKeys:", response.decoded.output);
  let votingCenterKeysArr = response.decoded.output.votingCenterKeys;

  response = await deauditdataAcc.runLocal("votingCenter", {});
  // console.log("Contract reacted to your votingCenter:", response.decoded.output);
  let votingCenterKeysObj = response.decoded.output.votingCenter;

  for (const item of votingCenterKeysArr) {
    console.log(hex2ascii(votingCenterKeysObj[item].name));
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
