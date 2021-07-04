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
  response = await rootAcc.runLocal("keysDeAudit", {});
  console.log("Contract reacted to your keysDeAudit:", response.decoded.output);



  let deauditAddr = response.decoded.output.keysDeAudit[0];
  console.log("Contract reacted to your keysDeAudit[0]:", deauditAddr);

  const deauditAcc = new Account(DeAuditContract, {
    address: deauditAddr,
    // signer: participantKeys,
    client,
  });

  response = await deauditAcc.runLocal("sequentialNumber", {});
  console.log("DeAudit sequentialNumber:", response.decoded.output.sequentialNumber);

  response = await deauditAcc.runLocal("name", {});
  console.log("Contract reacted to your DeAudit name:", hex2ascii(response.decoded.output.name));

  response = await deauditAcc.runLocal("rootDeAudit", {});
  console.log("DeAudit rootDeAudit:", response.decoded.output);

  response = await deauditAcc.runLocal("dataDeAudit", {});
  console.log("DeAudit data smartcontract address: ", response.decoded.output);
  let deauditDataAddr = response.decoded.output.dataDeAudit;


  response = await deauditAcc.runLocal("tokenDeAudit", {});
  console.log("DeAudit  root token smartcontract address:", response.decoded.output);
  let rootTokenAddr = response.decoded.output.tokenDeAudit;


  response = await deauditAcc.runLocal("timeStart", {});
  console.log("Contract reacted to your timeStart:", timeConverter(parseInt(response.decoded.output.timeStart)));

  response = await deauditAcc.runLocal("colPeriod", {});
  console.log("Contract reacted to your colPeriod:", parseInt(response.decoded.output.colPeriod));

  response = await deauditAcc.runLocal("valPeriod", {});
  console.log("Contract reacted to your valPeriod:", parseInt(response.decoded.output.valPeriod));

  response = await deauditAcc.runLocal("colStake", {});
  console.log("Contract reacted to your colStake:", parseInt(response.decoded.output.colStake));

  response = await deauditAcc.runLocal("valStake", {});
  console.log("Contract reacted to your valStake:", parseInt(response.decoded.output.valStake));

  response = await deauditAcc.runLocal("getDetails", {_answer_id:0});
  console.log("Contract reacted to your getDetails:", response.decoded.output);


  const rootTokenAcc = new Account(RootTokenContractContract, {
    address: rootTokenAddr,
    // signer: participantKeys,
    client,
  });

  response = await rootTokenAcc.runLocal("getDetails", {_answer_id:0});
  // console.log("Contract reacted to your getDetails:", response.decoded.output);
  console.log("root Democracy Token details:");

  console.log("name: ", hex2ascii(response.decoded.output.value0.name));
  console.log("symbol: ", hex2ascii(response.decoded.output.value0.symbol));

  response = await rootTokenAcc.runLocal("getTotalSupply", {_answer_id:0});
  console.log("totalSupply:", response.decoded.output);

  response = await rootTokenAcc.runLocal("getVersion", {_answer_id:0});
  console.log("getVersion: ", response.decoded.output);



  const deauditdataAcc = new Account(DeAuditDataContract, {
    address: deauditDataAddr,
    // signer: participantKeys,
    client,
  });


  // response = await deauditdataAcc.runLocal("idDeAuditData", {});
  // console.log("Contract reacted to your idDeAuditData:", response.decoded.output);


  response = await deauditdataAcc.runLocal("name", {});
  console.log("DeAuditData details:", hex2ascii(response.decoded.output.name));

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
  console.log("===> DeAuditData Candidates list:");

  for (const item of candidateKeys) {
    console.log(hex2ascii(candidate[item].name));
  }



  response = await deauditdataAcc.runLocal("districtKeys", {});
  // console.log("Contract reacted to your districtKeys:", response.decoded.output);
  let districtKeys = response.decoded.output.districtKeys;

  response = await deauditdataAcc.runLocal("district", {});
  // console.log("Contract reacted to your district:", response.decoded.output);
  let district = response.decoded.output.district;
  console.log("===> DeAuditData vouting districts list:");

  for (const item of districtKeys) {
    console.log(hex2ascii(district[item].name));
  }


  response = await deauditdataAcc.runLocal("municipalBodyKeys", {});
  // console.log("Contract reacted to your municipalBodyKeys:", response.decoded.output);
  let municipalBodyKeys = response.decoded.output.municipalBodyKeys;

  response = await deauditdataAcc.runLocal("municipalBody", {});
  // console.log("Contract reacted to your municipalBody:", response.decoded.output);
  let municipalBody = response.decoded.output.municipalBody;
  console.log("===> DeAuditData voting municipalBodies list:");

  for (const item of municipalBodyKeys) {
    console.log(hex2ascii(municipalBody[item].name));
  }


  response = await deauditdataAcc.runLocal("votingPoolKeys", {});
  // console.log("Contract reacted to your votingPoolKeys:", response.decoded.output);
  let votingPoolKeys = response.decoded.output.votingPoolKeys;

  response = await deauditdataAcc.runLocal("votingPool", {});
  // console.log("Contract reacted to your votingPool:", response.decoded.output);
  let votingPool = response.decoded.output.votingPool;
  console.log("===> DeAuditData voting pools list:");

  for (const item of votingPoolKeys) {
    console.log(hex2ascii(votingPool[item].name));
  }


  response = await deauditdataAcc.runLocal("votingCenterKeys", {});
  // console.log("Contract reacted to your votingCenterKeys:", response.decoded.output);
  let votingCenterKeysArr = response.decoded.output.votingCenterKeys;

  response = await deauditdataAcc.runLocal("votingCenter", {});
  // console.log("Contract reacted to your votingCenter:", response.decoded.output);
  let votingCenterKeysObj = response.decoded.output.votingCenter;
  console.log("===> DeAuditData voting centeres list:");

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
