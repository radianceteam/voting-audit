const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const fs = require('fs');
const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!"];
const networkSelector = process.env.NET_SELECTOR;

const { GiverContract } = require("./Giver.js");

const { DeAuditRootContract } = require("./DeAuditRoot.js");
const { DeAuditRootCode } = require("./DeAuditRootCode.js");
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
  const rootAcc = new Account(DeAuditRootContract, {address:rootAddr,client,});
  console.log("DeAuditRoot address:", rootAddr);


response = await rootAcc.runLocal("actionTeam", {});
console.log("Contract reacted to your actionTeam:", response.decoded.output);

response = await rootAcc.runLocal("actionTeamMembers", {});
console.log("Contract reacted to your actionTeamMembers:", response.decoded.output);


response = await rootAcc.runLocal("balanceOf", {});
console.log("Contract reacted to your balanceOf:", response.decoded.output);

response = await rootAcc.runLocal("giverFor", {});
console.log("Contract reacted to your giverFor:", response.decoded.output);

response = await rootAcc.runLocal("participantAddr", {});
console.log("Contract reacted to your participantAddr:", response.decoded.output);

response = await rootAcc.runLocal("participantPubKey", {});
console.log("Contract reacted to your participantPubKey:", response.decoded.output);

response = await rootAcc.runLocal("paramDeAudit", {});
console.log("Contract reacted to your creatorOfDeAuditData:", response.decoded.output);

response = await rootAcc.runLocal("countDeAuditData", {});
console.log("Contract reacted to your countDeAuditData:", response.decoded.output);

response = await rootAcc.runLocal("deployFee", {});
console.log("Contract reacted to your deployFee:", response.decoded.output);

response = await rootAcc.runLocal("votingDuration", {});
console.log("Contract reacted to your votingDuration:", response.decoded.output);

response = await rootAcc.runLocal("voteCountModel", {});
console.log("Contract reacted to your voteCountModel:", response.decoded.output);

response = await rootAcc.runLocal("vote", {});
console.log("Contract reacted to your vote:", response.decoded.output);

response = await rootAcc.runLocal("voteKeys", {});
console.log("Contract reacted to your voteKeys:", response.decoded.output);

response = await rootAcc.runLocal("isTimeUp", {startTime:1625239593,duration:10});
console.log("Contract reacted to your isTimeUp:", response.decoded.output);

response = await rootAcc.runLocal("timeNow", {});
console.log("Contract reacted to your timeNow:", response.decoded.output);





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
