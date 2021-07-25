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


TonClient.useBinaryLibrary(libNode);

function getShard(string) {
  return string[2];
}

async function logEvents(params, response_type) {
  // console.log(`params = ${JSON.stringify(params, null, 2)}`);
  // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}

async function main(client) {
  let responce;
  let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));
  const rootAddr = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).address;
  const rootAcc = new Account(DeAuditRootContract, {address: rootAddr,client,});
  let indexP = 0;
  for (const item of resultArr) {
    console.log(indexP);
    const clientKeys = item.keys;
    const clientAddress = item.address;
    let pubkey = '0x'+clientKeys.keys.public;

    const clientSignedRootAcc = new Account(DeAuditRootContract, {address:rootAddr,signer:clientKeys,client,});

    // 1. Prepay to root DeAudit 10 TonClient
    // 2. Set giver adress for Participant into root DeAudit
    // 3. Deploy Participant via root DeAudit

    if (networkSelector == 0) {
      const giver = await Account.getGiverForClient(client);
      await giver.sendTo(rootAddr, 100_000_000_000);
      console.log(`Grams were transferred from giver to ${rootAddr}`);
    } else if (networkSelector == 1) {
      const giverNTDAddress = JSON.parse(fs.readFileSync('./GiverContractNTD.json',{encoding: "utf8"})).address;;
      const giverNTDKeys = JSON.parse(fs.readFileSync('./GiverContractNTD.json',{encoding: "utf8"})).keys;
      const giverNTDAcc = new Account(GiverContract, {address: giverNTDAddress,signer: giverNTDKeys,client,});
      response = await giverNTDAcc.run("sendTransaction", {dest:clientAddress,value:10000000000,bounce:false});
      console.log("Giver send 10 ton to clientAddress:", response.decoded.output);

    } else if (networkSelector == 2){
      console.log('Pls set giver for main.ton.dev');

    } else if (networkSelector == 3){
    const giverRTDAddress = JSON.parse(fs.readFileSync('./GiverContractRTD.json',{encoding: "utf8"})).address;;
    const giverRTDKeys = JSON.parse(fs.readFileSync('./GiverContractRTD.json',{encoding: "utf8"})).keys;
    const giverRTDAcc = new Account(GiverContract, {address: giverRTDAddress,signer: giverRTDKeys,client,});
    response = await giverRTDAcc.run("sendTransaction", {dest:clientAddress,value:20000000000,bounce:false});
    console.log("Giver send 20 ton to clientAddress:", response.decoded.output);

  } else if (networkSelector == 4){
    const giverFLDAddress = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).address;;
    const giverFLDKeys = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).keys;
    const giverFLDAcc = new Account(GiverContract, {address:giverFLDAddress,signer:giverFLDKeys,client,});
    response = await giverFLDAcc.run("sendTransaction", {dest:clientAddress,value:10000000000,bounce:false});
    console.log("Giver send 10 ton to clientAddress:", response.decoded.output);


  } else {console.log('networkSelector is incorrect');}
  indexP ++;
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
