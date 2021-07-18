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

const indexKeysDeAuditData = 3;



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

  response = await rootAcc.runLocal("keysDeAuditData", {});
  // console.log("Contract reacted to your keysDeAuditData:", response.decoded.output);

  let keysDeAuditData = response.decoded.output.keysDeAuditData;
  console.log("Contract reacted to your keysDeAuditData index:"+indexKeysDeAuditData+' address:'+keysDeAuditData[indexKeysDeAuditData]);

  response = await rootAcc.runLocal("paramDeAudit", {});
  console.log("Contract reacted to your paramDeAudit:", response.decoded.output);

  let paramDeAudit = response.decoded.output.paramDeAudit[keysDeAuditData[indexKeysDeAuditData]];
  console.log("Contract reacted to your paramDeAudit name:", hex2ascii(paramDeAudit.name));


  let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));
  const participantAddr = resultArr[0].address;
  const participantKeys = resultArr[0].keys;
  const participantAcc = new Account(ParticipantContract, {
    address: participantAddr,
    signer: participantKeys,
    client,
  });



  response = await creatorAcc.run("initVoteDeAudut", {
    addrDeAuditData:keysDeAuditData[indexKeysDeAuditData],
    grams:2000000000,
  });
  console.log("Contract reacted to your initVoteDeAudut:", response.decoded.output);


  // for (const item of resultArr) {
  //   const participantAddress = item.address;
  //   const participantKeys = item.keys;
  //   let pubkey = '0x'+participantKeys.keys.public;
  //
  //   const participantAcc = new Account(ParticipantContract, {
  //     address: participantAddress,
  //     signer: participantKeys,
  //     client,
  //   });
  //
  //   response = await participantAcc.runLocal("rootDeAudit", {});
  //   console.log("Contract reacted to your rootDeAudit:", response.decoded.output);
  //
  //   response = await participantAcc.runLocal("initiatedDeAuditData", {});
  //   console.log("Contract reacted to your initiatedDeAuditData:", response.decoded.output);
  //
  // }




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
