// var shell = require('shelljs');
//
// var str = shell.exec("debot_abi=$(cat VA_VL.abi.json | xxd -ps -c 20000)");
// let abi = process.env.VA_VRaccDABI
// console.log(str)
// const fs = require('fs');

// const pathJson = 'debotAddrs.json';
// let arrContractAddreses = ["VA_VRaccAddr", "VA_CLaccAddr","VA_EDaccAddr","VA_VLaccAddr","VA_ATaccAddr","VA_CRaccAddr"]
//
// let debAddrObk = {
//     VA_VRaccAddr:"9944",
//     VA_CLaccAddr:"9944",
//     VA_EDaccAddr:"9944",
//     VA_VLaccAddr:"9944",
//     VA_ATaccAddr:"9944",
//     VA_CRaccAddr:"9944",
//
// }
// const keyJson = JSON.stringify(debAddrObk);
// fs.writeFile(pathJson, keyJson, (err) => { if (err) throw err; });






// const execSync = require('child_process').execSync;
// function genJS(pathToAbiFile){
//     let name = "VA_VR.abi.json".replace(/\..*/, '')
//
//     exec(
//         `tondev js wrap ${pathToAbiFile} -o ${name}.js`,
//         (error, stdout, stderr) => {
//             if (error) {
//                 console.error(`exec error: ${error}`);
//                 return;
//             }
//             console.log(`stdout: ${stdout}`);
//             console.log(`stderr: ${stderr}`);
//             return stdout;
//
//         }
//     );
// }
// genJS("VA_VL.abi.json")

const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

const genDabi = async function(pathToAbiFile){
    return await exec(`cat ${pathToAbiFile} | xxd -ps -c 20000`)
}


// let r;
// await genDabi("../VA_VR/VA_VR.abi.json").then(it=>r=it);

exports.genDabi = genDabi;

//
//
// console.log("dat",dat)
// /Users/anzorbagirokov/.tondev/bin
// tondev js wrap Marvin.abi.json -o Marvin.js
//  // let VA_VRaccDABI = $(cat VA_VL.abi.json | xxd -ps -c 20000)


// VA_VRaccDABI = $(cat VA_VL.abi.json | xxd -ps -c 20000)


//
// let body = req.body.data
// let p1 = _db.getMsigWallet()
// let p2 = _db.getUserByAddress({"address": body[0].from})
// Promise.all([p1, p2, body[0].to, body[0].amount])
//     .then(values => {
//         sdk.transfer(values)
//             .then(result => res.send(result))
//     }).catch(error => res.send(error));

