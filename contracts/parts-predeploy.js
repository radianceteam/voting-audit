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
const { ParticipantContract } = require("./Participant.js");

const pathJsonRoot = './DeAuditRoot.json';
const pathJsonParticipants = './Participants.json';


TonClient.useBinaryLibrary(libNode);


function getShard(string) {
  return string[2];
}

async function main(client) {
  let responce;
  const rootAddr = JSON.parse(fs.readFileSync(pathJsonRoot,{encoding: "utf8"})).address;
  const rootAcc = new Account(DeAuditRootContract, {address: rootAddr,client,});
  let resultArr = [];
  let count = 0;
  // let cumulativ = 0;
  while (count<3) {
    const SEED_PHRASE_WORD_COUNT = 12;
    const SEED_PHRASE_DICTIONARY_ENGLISH = 1;
    const HD_PATH = "m/44'/396'/0'/0/0";
    const { crypto } = client;
    const { phrase } = await crypto.mnemonic_from_random({
      dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
      word_count: SEED_PHRASE_WORD_COUNT,
    });
    // console.log(`Generated seed phrase "${phrase}"`);
    let keyPair = await crypto.mnemonic_derive_sign_keys({
      phrase,
      path: HD_PATH,
      dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
      word_count: SEED_PHRASE_WORD_COUNT,
    });
    const clientKeys = signerKeys(keyPair);
    let pubkey = '0x'+clientKeys.keys.public;
    response = await rootAcc.runLocal("getParticipantAddress", {_answer_id:0, pubkeyParticipant:pubkey});
    let clientAddr = response.decoded.output.value0;
    console.log("Participant:", clientAddr);
    resultArr.push({address:clientAddr, keys:clientKeys, seed:phrase});
    count++;
  }
  let keyJson = JSON.stringify(resultArr);
  fs.writeFileSync( pathJsonParticipants, keyJson,{flag:'w'});
  console.log('{address, keys, seed} for '+count+' Participants written successfully to:', pathJsonParticipants);
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
