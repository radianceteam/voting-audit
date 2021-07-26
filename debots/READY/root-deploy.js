const {TonClient, abiContract, signerKeys} = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");
const fs = require('fs');
// const dotenv = require('dotenv').config();
const networks = ["http://localhost",'net.ton.dev','main.ton.dev','rustnet.ton.dev','https://gql.custler.net'];
const hello = ["Hello localhost TON!","Hello dev net TON!","Hello main net TON!","Hello rust dev net TON!"];
const networkSelector = 4;
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const { GiverContract } = require("./deployFiles/Giver.js");

const { VA_ATContract } = require("./VA_AT/VA_AT.js");
const { VA_CLContract } = require("./VA_CL/VA_CL.js");
const { VA_CRContract } = require("./VA_CR/VA_CR.js");
const { VA_EDContract } = require("./VA_ED/VA_ED.js");
const { VA_VLContract } = require("./VA_VL/VA_VL.js");
const { VA_VRContract } = require("./VA_VR/VA_VR.js");

TonClient.useBinaryLibrary(libNode);

async function genKeys(){
  return signerKeys(await TonClient.default.crypto.generate_random_sign_keys());
}
const genDabi = async function(pathToAbiFile){
  return await exec(`cat ${pathToAbiFile} | xxd -ps -c 20000`)
}

async function main(client) {
  //
  // Giver contract
  //

  const giverFLDAddress = JSON.parse(fs.readFileSync('./deployFiles/GiverContractFLD.json',{encoding: "utf8"})).address;;
  const giverFLDKeys = JSON.parse(fs.readFileSync('./deployFiles/GiverContractFLD.json',{encoding: "utf8"})).keys;
  const giverFLDAcc = new Account(GiverContract, {address:giverFLDAddress,signer:giverFLDKeys,client,});

  //
  // Get dabi
  //

  let VA_VRaccDABI = await genDabi("./VA_VR/VA_VR.abi.json");
  let VA_CLaccDABI = await genDabi("VA_CL/VA_CL.abi.json");
  let VA_EDaccDABI = await genDabi("VA_ED/VA_ED.abi.json");
  let VA_VLaccDABI = await genDabi("VA_VL/VA_VL.abi.json");
  let VA_ATaccDABI = await genDabi("VA_AT/VA_AT.abi.json");
  let VA_CRaccDABI = await genDabi("VA_CR/VA_CR.abi.json");

  //
  // VA_VR contract
  //

  const VA_VRacc = new Account(VA_VRContract, {
    signer: await genKeys(),
    client,
  });
  const VA_VRaccAddr = await VA_VRacc.getAddress();
  console.log(`Future address of the VA_VR will be: ${VA_VRaccAddr}`);

  //
  // VA_CL contract
  //
  const VA_CLacc = new Account(VA_CLContract, {
    signer: await genKeys(),
    client,
  });
  const VA_CLaccAddr = await VA_CLacc.getAddress();

  console.log(`Future address of the VA_CL will be: ${VA_CLaccAddr}`);

  //
  // VA_ED contract
  //
  const VA_EDacc = new Account(VA_EDContract, {
    signer: await genKeys(),
    client,
  });
  const VA_EDaccAddr = await VA_EDacc.getAddress();

  console.log(`Future address of the VA_ED will be: ${VA_EDaccAddr}`);

  //
  // VA_VL contract
  //
  const VA_VLacc = new Account(VA_VLContract, {
    signer: await genKeys(),
    client,
  });
  const VA_VLaccAddr = await VA_VLacc.getAddress();

  console.log(`Future address of the VA_VL will be: ${VA_VLaccAddr}`);

  //
  // VA_AT contract
  //
  const VA_ATacc = new Account(VA_ATContract, {
    signer: await genKeys(),
    client,
  });
  const VA_ATaccAddr = await VA_ATacc.getAddress();

  console.log(`Future address of the VA_AT will be: ${VA_ATaccAddr}`);

  //
  // VA_CR contract
  //
  const VA_CRacc = new Account(VA_CRContract, {
    signer: await genKeys(),
    client,
  });
  const VA_CRaccAddr = await VA_CRacc.getAddress();

  console.log(`Future address of the VA_CR will be: ${VA_CRaccAddr}`);


  //
  // save debots addresed
  //
  let arrContractAddreses = [VA_VRaccAddr, VA_CLaccAddr,VA_EDaccAddr,VA_VLaccAddr,VA_ATaccAddr,VA_CRaccAddr]

  let debAddrObj = {
    VA_VRaccAddr:VA_VRaccAddr,
    VA_CLaccAddr:VA_CLaccAddr,
    VA_EDaccAddr:VA_EDaccAddr,
    VA_VLaccAddr:VA_VLaccAddr,
    VA_ATaccAddr:VA_ATaccAddr,
    VA_CRaccAddr:VA_CRaccAddr,

  }

  const fileName = 'debotAddresses.json';
  const obj = JSON.stringify(debAddrObj);
  fs.writeFile(fileName, obj, (err) => { if (err) throw err; });
  console.log("debot addreses saved in debotAddresses.json")


  //
  // Send from giver for deploy
  //


  for(let i=0; i<arrContractAddreses.length; i++){
    console.log(`sending from giver to ${arrContractAddreses[i]}`)
    await giverFLDAcc.run("sendTransaction",  {dest:arrContractAddreses[i],value:2000000000,bounce:false});
  }

  //
  // Deploy debot SC
  //

  console.log(`deploying VA_CLacc`)
  let VA_VRresp = await VA_VRacc.deploy();
  console.log(`deploying VA_CLresp`)
  let VA_CLresp = await VA_CLacc.deploy();
  console.log(`deploying VA_EDresp`)
  let VA_EDresp = await VA_EDacc.deploy();
  console.log(`deploying VA_VLresp`)
  let VA_VLresp = await VA_VLacc.deploy();
  console.log(`deploying VA_ATresp`)
  let VA_ATresp = await VA_ATacc.deploy();
  console.log(`deploying VA_CRresp`)
  let VA_CRresp = await VA_CRacc.deploy();


  //
  // Set abi to debot SC
  //


  console.log("setABI VA_VRacc");
  await VA_VRacc.run("setABI",  {dabi:VA_VRaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"")});
  console.log("setABI VA_CLacc");
  await VA_CLacc.run("setABI",  {dabi:VA_CLaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"")});
  console.log("setABI VA_EDacc");
  await VA_EDacc.run("setABI",  {dabi:VA_EDaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"")});
  console.log("setABI VA_VLacc");
  await VA_VLacc.run("setABI",  {dabi:VA_VLaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"")});

  console.log(`setABI VA_ATacc, VA_VLaccAddr:${VA_VLaccAddr}, VA_EDaccAddr:${VA_EDaccAddr}`);

  await VA_ATacc.run("setABI",  {dabi:VA_ATaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,""), m_VotingAuditDebotVLaddressD: VA_VLaccAddr, m_EditDebotD: VA_EDaccAddr});

  console.log(`setABI VA_ATacc, VA_ATaccAddr:${VA_ATaccAddr}, VA_CLaccAddr:${VA_CLaccAddr}, m_VA_VRaddrD:${VA_VRaccAddr}`);

  await VA_CRacc.run("setABI",  {dabi:VA_CRaccDABI.stdout.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,""), m_ATdebAddressD: VA_ATaccAddr, m_CLdebAddressD: VA_CLaccAddr, m_VA_VRaddrD: VA_VRaccAddr});


  console.log(`****** all debots success deployed ****** core:\ntonos-cli --url https://gql.custler.net debot fetch ${VA_CRaccAddr}`);



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
