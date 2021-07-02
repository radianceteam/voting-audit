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

  let deauditDataAddr1 = '0:2c44f76dbd6ea38eec9b32dd7fcf3a2c395eec9d26fd494bf4fe1935029243ac';

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



  response = await creatorAcc.run("addDistrict",
  {
    addressDeAuditData:deauditDataAddr1,
    nameDistrict:toHex("District A"),
    grams:1500000000
  });
  console.log("Contract reacted to your addDistrict:", response.decoded.output);

  response = await creatorAcc.run("addDistrict",
  {
    addressDeAuditData:deauditDataAddr1,
    nameDistrict:toHex("District B"),
    grams:1500000000
  });
  console.log("Contract reacted to your addDistrict:", response.decoded.output);

  response = await creatorAcc.run("addMunicipalBody",
  {
    addressDeAuditData:deauditDataAddr1,
    nameMunicipalBody:toHex("MunicipalBody A1"),
    indexDistrict:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addMunicipalBody:", response.decoded.output);

  response = await creatorAcc.run("addMunicipalBody",
  {
    addressDeAuditData:deauditDataAddr1,
    nameMunicipalBody:toHex("MunicipalBody A2"),
    indexDistrict:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addMunicipalBody:", response.decoded.output);

  response = await creatorAcc.run("addMunicipalBody",
  {
    addressDeAuditData:deauditDataAddr1,
    nameMunicipalBody:toHex("MunicipalBody B1"),
    indexDistrict:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addMunicipalBody:", response.decoded.output);

  response = await creatorAcc.run("addMunicipalBody",
  {
    addressDeAuditData:deauditDataAddr1,
    nameMunicipalBody:toHex("MunicipalBody B2"),
    indexDistrict:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addMunicipalBody:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool A1-1"),
    indexDistrict:0,
    indexMunicipalBody:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool A1-2"),
    indexDistrict:0,
    indexMunicipalBody:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool A2-1"),
    indexDistrict:0,
    indexMunicipalBody:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool A2-2"),
    indexDistrict:0,
    indexMunicipalBody:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool B1-1"),
    indexDistrict:1,
    indexMunicipalBody:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool B1-2"),
    indexDistrict:1,
    indexMunicipalBody:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool B2-1"),
    indexDistrict:1,
    indexMunicipalBody:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingPool",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingPool:toHex("VotingPool B2-2"),
    indexDistrict:1,
    indexMunicipalBody:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingPool:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A1-1-1"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:0,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A1-1-2"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:0,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A1-2-1"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:0,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A1-2-2"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:0,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);



  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A2-1-1"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:1,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A2-1-2"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:1,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A2-2-1"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:1,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter A2-2-2"),
    location:toHex("coordinates here"),
    indexDistrict:0,
    indexMunicipalBody:1,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

////=============

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B1-1-1"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:0,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B1-1-2"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:0,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B1-2-1"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:0,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B1-2-2"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:0,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);



  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B2-1-1"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:1,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B2-1-2"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:1,
    indexVotingPool:0,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B2-2-1"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:1,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

  response = await creatorAcc.run("addVotingCenter",
  {
    addressDeAuditData:deauditDataAddr1,
    nameVotingCenter:toHex("VotingCenter B2-2-2"),
    location:toHex("coordinates here"),
    indexDistrict:1,
    indexMunicipalBody:1,
    indexVotingPool:1,
    grams:1500000000
  });
  console.log("Contract reacted to your addVotingCenter:", response.decoded.output);

/////==============

response = await creatorAcc.run("addCandidate",
{
  addressDeAuditData:deauditDataAddr1,
  nameCandidate:toHex("Tested Candidate A"),
  grams:1500000000
});
console.log("Contract reacted to your addCandidate:", response.decoded.output);

response = await creatorAcc.run("addCandidate",
{
  addressDeAuditData:deauditDataAddr1,
  nameCandidate:toHex("Tested Candidate B"),
  grams:1500000000
});
console.log("Contract reacted to your addCandidate:", response.decoded.output);

response = await creatorAcc.run("addCandidate",
{
  addressDeAuditData:deauditDataAddr1,
  nameCandidate:toHex("Tested Candidate C"),
  grams:1500000000
});
console.log("Contract reacted to your addCandidate:", response.decoded.output);

response = await creatorAcc.run("addCandidate",
{
  addressDeAuditData:deauditDataAddr1,
  nameCandidate:toHex("Tested Candidate D"),
  grams:1500000000
});
console.log("Contract reacted to your addCandidate:", response.decoded.output);








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
