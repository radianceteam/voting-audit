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


TonClient.useBinaryLibrary(libNode);

async function logEvents(params, response_type) {
  // console.log(`params = ${JSON.stringify(params, null, 2)}`);
  // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}


async function main(client) {
  let response;
  const rootAddr = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).address;
  const rootKeys = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).keys;

  const rootAcc = new Account(DeAuditRootContract, {
    address:rootAddr,
    signer: rootKeys,
    client,
  });


  response = await rootAcc.run("setCodeDeAuditData", {code:DeAuditRootCode.deauditdata});
  console.log("Contract reacted to your setCodeDeAuditData:", response.decoded.output);

  response = await rootAcc.run("setCodeDeAudit", {code:DeAuditRootCode.deaudit});
  console.log("Contract reacted to your setCodeDeAudit:", response.decoded.output);



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
