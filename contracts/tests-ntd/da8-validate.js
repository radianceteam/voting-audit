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


const indexKeysDeAudit = 7;

let indexParticipant = 16;




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

  response = await rootAcc.runLocal("keysDeAudit", {});
  console.log("key DeAudit :",indexKeysDeAudit,', address: ',response.decoded.output.keysDeAudit[indexKeysDeAudit]);

  let deauditAddr = response.decoded.output.keysDeAudit[indexKeysDeAudit];

  while (indexParticipant < 32) {
    console.log(indexParticipant);
    let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));
    const participantAddr = resultArr[indexParticipant].address;
    const participantKeys = resultArr[indexParticipant].keys;
    const participantAcc = new Account(ParticipantContract, {
      address: participantAddr,
      signer: participantKeys,
      client,
    });
    response = await participantAcc.run("registrationForValidation", {
      addressDeAudit:deauditAddr,
      grams:16000000000
    });
    console.log("Contract reacted to your registrationForValidation:", response.decoded.output);
    indexParticipant ++;
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
