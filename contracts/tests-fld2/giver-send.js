const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const { GiverContract } = require("./Giver.js");
const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev','https://gql.custler.net'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!","Hello fld dev net TON!"];
const networkSelector = process.env.NET_SELECTOR;

const fs = require('fs');
// const pathJsonR = './GiverContractRTD.json';

const { DeAuditRootContract } = require("./DeAuditRoot.js");

const pathJsonRoot = './DeAuditRoot.json';
const pathJsonParticipants = './Participants.json';


const indexPartisipant = 0;


TonClient.useBinaryLibrary(libNode);


async function logEvents(params, response_type) {
    // console.log(`params = ${JSON.stringify(params, null, 2)}`);
    // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}

async function main(client) {
    let response;

    const rootAddr = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).address;
    const rootAcc = new Account(DeAuditRootContract, {address:rootAddr,client,});

    response = await rootAcc.runLocal("actionTeamKeys", {});
    // console.log("Contract reacted to your actionTeamKeys:", response.decoded.output);

    let resultArr = JSON.parse(fs.readFileSync(pathJsonParticipants,{encoding: "utf8"}));
    const participantAddr = resultArr[17].address;

    // let destination = participantAddr;

    // let destination = response.decoded.output.actionTeamKeys[indexPartisipant];
    let destination = '0:7ccb880e7677d8380399da46ec42026dff81aa3530048f0616f51b0e397f073e';

    console.log("Contract reacted to your destination]:", destination);

    let gramms = 20000000000;


    // const giverAddr = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).address;
    const giverKeys = JSON.parse(fs.readFileSync('./GiverContractFLD.json',{encoding: "utf8"})).keys;
    // const giverAddr = JSON.parse(fs.readFileSync(pathJsonClient,{encoding: "utf8"})).address;

    const giverAcc = new Account(GiverContract, {
        signer: giverKeys,
        client,
    });

    const giverAddr = await giverAcc.getAddress();
    console.log(`address of the GiverContract: ${giverAddr}`);

    // Call `sendTransaction` function
    response = await giverAcc.run("sendTransaction", {dest:destination,value:gramms,bounce:false});
    console.log(`Contract run sendTransaction with output ${response.decoded.output}, ${response.transaction.id}`);

    // Execute `getBalance` get method  (execute the message locally on TVM)
    response = await giverAcc.runLocal("getBalance", {});
    console.log("Contract reacted to your getBalance:", response.decoded.output);

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
