import {libWeb} from "@tonclient/lib-web";
const { ResponseType } = require("@tonclient/core/dist/bin");
const {
    MessageBodyType,
    TonClient,
} = require("@tonclient/core");

// eslint-disable-next-line react-hooks/rules-of-hooks
TonClient.useBinaryLibrary(libWeb);


const { Account } = require("@tonclient/appkit");
const fs = require('fs');
const networks = ["http://localhost",'net1.ton.dev','main1.ton.dev','rustnet.ton.dev', 'https://gql.custler.net'];

const { DeAuditRootContract } = require("./DeAuditRoot.js");
const { DeAuditDataContract } = require("./DeAuditData.js");
const { DeAuditContract } = require("./DeAudit.js");
const { RootTokenContractContract } = require("./RootTokenContract.js");

const rootAddress = "0:93b7fed94a94f158eb0609317545c692492f150c0ca50450f99c050d8bc9b1c9"

const hex2ascii = require('hex2ascii');

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return a.toLocaleString();
}

function secsToTime(secs) {
    let d = secs / 8.64e4 | 0;
    let H = (secs % 8.64e4) / 3.6e3 | 0;
    let m = (secs % 3.6e3)  / 60 | 0;
    let s = secs % 60;
    let z = n=> (n < 10? '0' : '') + n;
    return `${d} d. ${z(H)} h. ${z(m)} m. ${z(s)} s.`
}

const client = new TonClient({network: { endpoints: [networks[1]]}});

export async function getAllDeAudits() {
    const rootAcc = new Account(DeAuditRootContract, {address:rootAddress, client});
    console.log("DeAuditRoot address:", rootAddress);
    let response = await rootAcc.runLocal("keysDeAudit", {});
    console.log("Contract reacted to your keysDeAudit:", response.decoded.output);
    let arrf = []
    let raw = response.decoded.output.keysDeAudit;

    let districts = [];
    let mb = [];
    let vp = [];
    let vc = [];

    /*

     struct District {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
    uint256[] votingPoolsArr;
    uint256[] municipalBodiesArr;
  }

  struct MunicipalBody {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
    uint256[] votingPoolsArr;
  }

    struct VotingPool {
    bytes name;
    uint256[] votes;
    uint256[] votingCentersArr;
  }

    struct VotingCenter {
    bytes name;
    bytes location;
    uint256[] votes;
    uint256 idVotingPool;
    uint256 idMunicipalBody;
    uint256 idDistrict;
    bool collationStatus;
    address[] act4Arr;
    mapping (address => address[]) validatorsArr;
  }

     */

    for (const deAudit of raw) {
        const deauditAcc = new Account(DeAuditContract, {
            address: deAudit,
            client,
        });
        console.log(deAudit)
        let response = await deauditAcc.runLocal("getDetails", {_answer_id:0});
        let deAuditData = {...response.decoded.output.value0}
        deAuditData.name = hex2ascii(response.decoded.output.value0.name)
        deAuditData.timeStart = timeConverter(parseInt(response.decoded.output.value0.timeStart))
        deAuditData.timeStartRaw = parseInt(response.decoded.output.value0.timeStart)
        deAuditData.colPeriod = secsToTime(parseInt(response.decoded.output.value0.colPeriod))
        deAuditData.colPeriodRaw = parseInt(response.decoded.output.value0.colPeriod)
        deAuditData.valPeriod = secsToTime(parseInt(response.decoded.output.value0.valPeriod))
        deAuditData.valPeriodRaw = parseInt(response.decoded.output.value0.valPeriod)
        deAuditData.address = deAudit
        deAuditData.candidates = [];
        deAuditData.votingCenters = [];
        deAuditData.votingPools = [];
        deAuditData.districts = [];
        deAuditData.municipalBodys = [];
        deAuditData.formated = {}

        const deauditdataAcc = new Account(DeAuditDataContract, {
            address: deAuditData.dataDeAudit,
            // signer: participantKeys,
            client,
        });

        console.log(34534534, "tokenDeAudit")
        let tda = await deauditAcc.runLocal("tokenDeAudit", {});
        let rootTokenAddr = tda.decoded.output.tokenDeAudit;
        const rootTokenAcc = new Account(RootTokenContractContract, {
            address: rootTokenAddr,
            // signer: participantKeys,
            client,
        });
        console.log(34534534, "getDetails")
        let tokenDataRaw = await rootTokenAcc.runLocal("getDetails", {_answer_id:0});
        let tokenData = tokenDataRaw.decoded.output.value0;

        tokenData.name = hex2ascii(tokenData.name);
        tokenData.symbol = hex2ascii(tokenData.symbol);
        console.log(34534534, "getVersion")
        let tokenVer = await rootTokenAcc.runLocal("getVersion", {_answer_id:0});
        tokenData.tokenVer =  tokenVer.decoded.output.value0;
        deAuditData.tokenData = tokenData;

        console.log(34534534, "candidate")
        let candidateListRaw = await deauditdataAcc.runLocal("candidate", {});
        console.log(34534534, "candidateKeys")
        let candidateKeysRaw = await deauditdataAcc.runLocal("candidateKeys", {});
        let candidate = candidateListRaw.decoded.output.candidate;
        let candidateKeys = candidateKeysRaw.decoded.output.candidateKeys;
        if(!candidateKeys || candidateKeys.length === 0) return;

        console.log(34534534, "district")
        let districtRaw  = await deauditdataAcc.runLocal("district", {});
        console.log(34534534, "districtKeys")
        let districtKeysRaw = await deauditdataAcc.runLocal("districtKeys", {});
        let district = districtRaw.decoded.output.district;
        let districtKeys = districtKeysRaw.decoded.output.districtKeys;
        if(!districtKeys || districtKeys.length === 0) return;

        let municipalBodyRaw = await deauditdataAcc.runLocal("municipalBody", {});
        console.log(34534534, "municipalBodyKeys")
        let municipalBodyKeysRaw = await deauditdataAcc.runLocal("municipalBodyKeys", {});
        let municipalBody = municipalBodyRaw.decoded.output.municipalBody;
        let municipalBodyKeys = municipalBodyKeysRaw.decoded.output.municipalBodyKeys;
        if(!municipalBodyKeys || municipalBodyKeys.length === 0) return;
        console.log(34534534, "municipalBody")
        console.log(34534534, "votingPool")
        let votingPoolRaw = await deauditdataAcc.runLocal("votingPool", {});
        console.log(34534534, "votingPoolKeys")
        let votingPoolKeysRaw = await deauditdataAcc.runLocal("votingPoolKeys", {});
        let votingPool = votingPoolRaw.decoded.output.votingPool;
        let votingPoolKeys = votingPoolKeysRaw.decoded.output.votingPoolKeys;
        if(!votingPoolKeys || votingPoolKeys.length === 0) return;

        console.log(34534534, "votingCenter")
        console.log(34534534, votingPool, votingPoolKeys, votingPoolKeysRaw)
        let votingCenterRaw = await deauditdataAcc.runLocal("votingCenter", {});
        console.log(34534534, "votingCenterKeys")
        let votingCenterKeysRaw = await deauditdataAcc.runLocal("votingCenterKeys", {});
        let votingCenter = votingCenterRaw.decoded.output.votingCenter;
        let votingCenterKeys = votingCenterKeysRaw.decoded.output.votingCenterKeys;
        if(!votingCenterKeys || votingCenterKeys.length === 0) return;

        deAuditData.districtsKeys = districtKeys;

        for (const item of candidateKeys) {
            candidate[item].name = hex2ascii(candidate[item].name)
            deAuditData.candidates.push({name: candidate[item].name, votes: candidate[item].votes});
        }

        for (const item of districtKeys) {
            console.log('# '+hex2ascii(district[item].name));
            let mbkeys = district[item].municipalBodiesArr;
            console.log(mbkeys, item, district[item])
            district[item].id = item;
            let forPush = {
                municipalBodies: {},
            }
            for (const item1 of mbkeys) {
                let vpkeys = municipalBody[item1].votingPoolsArr;
                forPush.municipalBodies[item1] = { ...municipalBody[item1], id: item1, votingPools: {}}
                for (const item2 of vpkeys) {

                    forPush.municipalBodies[item1].votingPools[item2] = { ...votingPool[item2], id: item2, votingCenters: {}}
                    let vckeys = votingPool[item2].votingCentersArr;
                    for (const item3 of vckeys) {
                        forPush.municipalBodies[item1].votingPools[item2].votingCenters[item3] = votingCenter[item3]
                    }
                }
            }


            deAuditData.formated[item] = forPush;
            console.log(0x444, forPush)
            deAuditData.districts.push(district[item]);

        }

        for (const item of municipalBodyKeys) {
            deAuditData.municipalBodys.push(hex2ascii(municipalBody[item].name));
        }

        for (const item of votingPoolKeys) {
            deAuditData.votingPools.push(hex2ascii(votingPool[item].name));
        }

        for (const item of votingCenterKeys) {
            deAuditData.votingCenters.push(hex2ascii(votingCenter[item].name));
        }


        arrf.push(deAuditData);
    }
    console.log(55555, arrf)
    return arrf
}


/*
async function main(client) {

    const rootAcc = new Account(DeAuditRootContract, {address:rootAddress, client});
    console.log("DeAuditRoot address:", rootAddress);
    response = await rootAcc.runLocal("keysDeAudit", {});
    console.log("Contract reacted to your keysDeAudit:", response.decoded.output);

    let deauditAddr = response.decoded.output.keysDeAudit[0];
    console.log("Contract reacted to your keysDeAudit[1]:", deauditAddr);

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
 */