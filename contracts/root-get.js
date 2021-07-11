const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const fs = require('fs');
const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!"];
const networkSelector = process.env.NET_SELECTOR;

const hex2ascii = require('hex2ascii');


const { GiverContract } = require("./Giver.js");

const { DeAuditRootContract } = require("./DeAuditRoot.js");
const { DeAuditRootCode } = require("./DeAuditRootCode.js");
const { ParticipantContract } = require("./Participant.js");

const pathJsonRoot = './DeAuditRoot.json';

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}



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

  response = await rootAcc.runLocal("actionTeamKeys", {});
  console.log("Contract reacted to your actionTeamKeys:", response.decoded.output);


  response = await rootAcc.runLocal("balanceOf", {});
  console.log("Contract reacted to your balanceOf:", response.decoded.output);

  response = await rootAcc.runLocal("giverFor", {});
  console.log("Contract reacted to your giverFor:", response.decoded.output);

  response = await rootAcc.runLocal("participantAddr", {});
  console.log("Contract reacted to your participantAddr:", response.decoded.output);

  response = await rootAcc.runLocal("participantPubKey", {});
  console.log("Contract reacted to your participantPubKey:", response.decoded.output);

  response = await rootAcc.runLocal("keysDeAuditData", {});
  console.log("Contract reacted to your keysDeAuditData:", response.decoded.output);

  // let keysDeAuditData = response.decoded.output.keysDeAuditData;
  // console.log("Contract reacted to your keysDeAuditData[0]:", keysDeAuditData[0]);

  response = await rootAcc.runLocal("paramDeAudit", {});
  console.log("Contract reacted to your paramDeAudit:", response.decoded.output);

  // let paramDeAudit = response.decoded.output.paramDeAudit[keysDeAuditData[0]];
  // console.log("Contract reacted to your paramDeAudit[keysDeAuditData[0]:", hex2ascii(paramDeAudit.name));


  response = await rootAcc.runLocal("countDeAuditData", {});
  console.log("Contract reacted to your countDeAuditData:", response.decoded.output);

  response = await rootAcc.runLocal("deployFee", {});
  console.log("Contract reacted to your deployFee:", response.decoded.output);

  response = await rootAcc.runLocal("votingDuration", {});
  console.log("Contract reacted to your votingDuration:", response.decoded.output);

  response = await rootAcc.runLocal("voteCountModel", {});
  console.log("Contract reacted to your voteCountModel:", response.decoded.output);

  response = await rootAcc.runLocal("maxQtyAct4Links", {});
  console.log("Contract reacted to your maxQtyAct4Links:", response.decoded.output);

  response = await rootAcc.runLocal("vote", {});
  console.log("Contract reacted to your vote:", response.decoded.output);

  response = await rootAcc.runLocal("voteKeys", {});
  console.log("Contract reacted to your voteKeys:", response.decoded.output);

  // response = await rootAcc.runLocal("isTimeUp", {startTime:1625252361,duration:10});
  // console.log("Contract reacted to your isTimeUp:", response.decoded.output);

  response = await rootAcc.runLocal("timeNow", {});
  let ts = parseInt(response.decoded.output.value0);
  console.log("Contract reacted to your timeNow:", ts);
  console.log("Contract reacted to your timeNow:", timeConverter(ts));




  response = await rootAcc.runLocal("launchedDeAudit", {});
  console.log("Contract reacted to your launchedDeAudit:", response.decoded.output);

  response = await rootAcc.runLocal("keysDeAudit", {});
  console.log("Contract reacted to your keysDeAudit:", response.decoded.output);

  response = await rootAcc.runLocal("countDeAudit", {});
  console.log("Contract reacted to your countDeAudit:", response.decoded.output);


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
