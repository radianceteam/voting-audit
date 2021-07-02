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

const pathJson = './DeAuditRoot.json';

TonClient.useBinaryLibrary(libNode);

async function logEvents(params, response_type) {
  // console.log(`params = ${JSON.stringify(params, null, 2)}`);
  // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}

async function main(client) {
  let response;
  // const contractKeys = JSON.parse(fs.readFileSync(pathJson,{encoding: "utf8"})).keys;

  const contractKeys = signerKeys(await TonClient.default.crypto.generate_random_sign_keys());
  const rootAcc = new Account(DeAuditRootContract, {
    initData: {
      soUINT: 0,
    },
    signer: contractKeys,
    client,
  });
  const rootAddr = await rootAcc.getAddress();
  console.log(`Future address of the contract will be: ${rootAddr}`);


  if (networkSelector == 0) {
    const giver = await Account.getGiverForClient(client);
    await giver.sendTo(rootAddr, 100_000_000_000);
    console.log(`Grams were transferred from giver to ${rootAddr}`);
  } else if (networkSelector == 1) {
    const giverNTDAddress = JSON.parse(fs.readFileSync('./GiverContractNTD.json',{encoding: "utf8"})).address;;
    const giverNTDKeys = JSON.parse(fs.readFileSync('./GiverContractNTD.json',{encoding: "utf8"})).keys;
    const giverNTDAcc = new Account(GiverContract, {address:giverNTDAddress,signer:giverNTDKeys,client,});
    // Call `sendTransaction` function
    response = await giverNTDAcc.run("sendTransaction", {dest:rootAddr,value:20000000000,bounce:false});
    console.log("Giver send 20 ton to rootAddr:", response.decoded.output);
  } else if (networkSelector == 2){
    console.log('Pls set giver for main.ton.dev');
  } else if (networkSelector == 3){
    const giverRTDAddress = JSON.parse(fs.readFileSync('./GiverContractRTD.json',{encoding: "utf8"})).address;;
    const giverRTDKeys = JSON.parse(fs.readFileSync('./GiverContractRTD.json',{encoding: "utf8"})).keys;
    const giverRTDAcc = new Account(GiverContract, {address:giverRTDAddress,signer:giverRTDKeys,client,});
    // Call `sendTransaction` function
    response = await giverRTDAcc.run("sendTransaction", {dest:rootAddr,value:20000000000,bounce:false});
    console.log("Giver send 20 ton to rootAddr:", response.decoded.output);
  } else if (networkSelector == 4){
    const giverFLDAddress = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).address;;
    const giverFLDKeys = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).keys;
    const giverFLDAcc = new Account(GiverContract, {address:giverFLDAddress,signer:giverFLDKeys,client,});
    // Call `sendTransaction` function
    response = await giverFLDAcc.run("sendTransaction", {dest:rootAddr,value:20000000000,bounce:false});
    console.log("Giver send 20 ton to rootAddr:", response.decoded.output);
  } else {console.log('networkSelector is incorrect');}


  const keyJson = JSON.stringify({address:rootAddr, keys:contractKeys});
  fs.writeFileSync( pathJson, keyJson,{flag:'w'});
  console.log("Future address of the contract  and keys written successfully to:", pathJson);


  const deployMessage = await client.abi.encode_message(await rootAcc.getParamsOfDeployMessage({
    initFunctionName:"constructor",
    initInput:{
      settingVoteCountModel: 1,
    },
  }));
  let shard_block_id;
  shard_block_id = (await client.processing.send_message({
    message: deployMessage.message,
    send_events: true,
  }, logEvents,
)).shard_block_id;
console.log(`Deploy message was sent.`);



// Monitor message delivery.
// See more info about `wait_for_transaction` here
// https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_processing.md#wait_for_transaction
const deploy_processing_result = await client.processing.wait_for_transaction({
  abi: abiContract(rootAcc.abi),
  message: deployMessage.message,
  shard_block_id: shard_block_id,
  send_events: true,
},
logEvents,
);
// console.log(`Deploy transaction: ${JSON.stringify(deploy_processing_result.transaction, null, 2)}`);
// console.log(`Deploy fees: ${JSON.stringify(deploy_processing_result.fees, null, 2)}`);
console.log(`Contract was deployed at address: ${rootAddr}`);


response = await rootAcc.run("setCodePaticipant", {code:DeAuditRootCode.participant});
console.log("Contract reacted to your setCodePaticipant:", response.decoded.output);

response = await rootAcc.run("setCodeDeAuditData", {code:DeAuditRootCode.deauditdata});
console.log("Contract reacted to your setCodeDeAuditData:", response.decoded.output);

response = await rootAcc.run("setCodeDeAudit", {code:DeAuditRootCode.deaudit});
console.log("Contract reacted to your setCodeDeAudit:", response.decoded.output);

response = await rootAcc.run("setCodeAct4", {code:DeAuditRootCode.act4});
console.log("Contract reacted to your setCodeAct4:", response.decoded.output);


response = await rootAcc.run("setCodeRootTokenContract", {code:DeAuditRootCode.root});
console.log("Contract reacted to your setCodeRootTokenContract:", response.decoded.output);

response = await rootAcc.run("setCodeTONTokenWallet", {code:DeAuditRootCode.wallet});
console.log("Contract reacted to your setCodeTONTokenWallet:", response.decoded.output);

response = await rootAcc.run("setVotingDuration", {settingVotingDuration:10});
console.log("Contract reacted to your setVotingDuration:", response.decoded.output);

response = await rootAcc.run("setDeployFee", {settingDeployFee:100000000});
console.log("Contract reacted to your setDeployFee:", response.decoded.output);

response = await rootAcc.run("setCreator", {});
console.log("Contract reacted to your setCreator:", response.decoded.output);



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
