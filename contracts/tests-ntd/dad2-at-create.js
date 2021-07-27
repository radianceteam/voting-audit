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


TonClient.useBinaryLibrary(libNode);

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

  response = await rootAcc.runLocal("timeNow", {});
  let ts = parseInt(response.decoded.output.value0);
  let name = 'Voting DeAudit TEST # 2, deploed: '+timeConverter(ts);




  response = await creatorAcc.run("createDeAuditData", {
    nameDeAuditData:toHex(name),
    timeStart:ts,
    colPeriod:60,
    valPeriod:2592000,
    colStake:3000000000,
    valStake:1000000000,
    grams:1500000000
  });
  console.log("Contract reacted to your createDeAuditData:", response.decoded.output);


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
