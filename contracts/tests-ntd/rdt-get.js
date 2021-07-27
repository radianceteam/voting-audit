const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const fs = require('fs');
const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!"];
const networkSelector = process.env.NET_SELECTOR;

const { GiverContract } = require("./Giver.js");
const { DeAuditRootCode } = require("./DeAuditRootCode.js");


const { DeAuditRootContract } = require("./DeAuditRoot.js");
const { DeAuditDataContract } = require("./DeAuditData.js");
const { DeAuditContract } = require("./DeAudit.js");
const { RootTokenContractContract } = require("./RootTokenContract.js");


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

  let rootTokenAddr = '0:51715085cf560105f4958c4641d7e52e2dc0e8f94cd2eb5673120b6249f4ba1d';


  const rootTokenAcc = new Account(RootTokenContractContract, {
    address: rootTokenAddr,
    // signer: participantKeys,
    client,
  });

  response = await rootTokenAcc.runLocal("getDetails", {_answer_id:0});
  console.log("Contract reacted to your getDetails:", response.decoded.output);
  console.log(hex2ascii(response.decoded.output.value0.name));
  console.log(hex2ascii(response.decoded.output.value0.symbol));

  response = await rootTokenAcc.runLocal("getTotalSupply", {_answer_id:0});
  console.log("Contract reacted to your getTotalSupply:", response.decoded.output);

  response = await rootTokenAcc.runLocal("getVersion", {_answer_id:0});
  console.log("Contract reacted to your getVersion:", response.decoded.output);





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
