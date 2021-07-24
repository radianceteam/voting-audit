//
// This file was generated using TON Labs developer tools.
//

const abi = {
	"ABI version": 2,
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "setIcon",
			"inputs": [
				{"name":"icon","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "start",
			"id": "0x1",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "prestart",
			"id": "0x3",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "startGlobal",
			"inputs": [
				{"name":"partAddress","type":"address"},
				{"name":"choosenDAD","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "startFetch",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "fetchDistricts",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "SCfetchDistricts",
			"inputs": [
				{"name":"districtKeys","type":"uint256[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "getDistrictData",
			"inputs": [
				{"name":"curDistr","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "SCchooseDistrict",
			"inputs": [
				{"name":"name4Debot","type":"bytes"},
				{"name":"votes4Debot","type":"uint256[]"},
				{"name":"votingCentersArr4Debot","type":"uint256[]"},
				{"name":"votingPoolsArr4Debot","type":"uint256[]"},
				{"name":"municipalBodiesArr4Debot","type":"uint256[]"},
				{"name":"districtCurrentKeyD","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "fetchMB",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "SCfetchMB",
			"inputs": [
				{"name":"municipalBodyKeys","type":"uint256[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "getMBData",
			"inputs": [
				{"name":"curMB","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "SCgetMBData",
			"inputs": [
				{"name":"name4Debot","type":"bytes"},
				{"name":"votes4Debot","type":"uint256[]"},
				{"name":"votingCentersArr4Debot","type":"uint256[]"},
				{"name":"votingPoolsArr4Debot","type":"uint256[]"},
				{"name":"municipalBodyCurrentKeyD","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "fetchVP",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "SCfetchVP",
			"inputs": [
				{"name":"votingPoolKeys","type":"uint256[]"}
			],
			"outputs": [
			]
		},
		{
			"name": "getVPData",
			"inputs": [
				{"name":"curVP","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "SCgetVPData",
			"inputs": [
				{"name":"name4Debot","type":"bytes"},
				{"name":"votes4Debot","type":"uint256[]"},
				{"name":"votingCentersArr4Debot","type":"uint256[]"},
				{"name":"votingPoolCurrentKeyD","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "editDeAudit",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "goToATdebot",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "devshow",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAddDistrictSetName",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "setDistrictCall",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAddCandidateName",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "setCandidateName",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "onCurItemCheck",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "touchDistricts",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setTouchedDistrict",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "touchMB",
			"id": "0x11",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setTouchedMB",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "touchVP",
			"id": "0x12",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setTouchedVP",
			"inputs": [
				{"name":"index","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAddMB",
			"id": "0x21",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setMBname",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "touchCurVotingVP",
			"id": "0x22",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setVPname",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "touchCurVotingVC",
			"id": "0x23",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "setLocationVC",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "setVCname",
			"inputs": [
				{"name":"value","type":"bytes"}
			],
			"outputs": [
			]
		},
		{
			"name": "someError",
			"inputs": [
				{"name":"sdkError","type":"uint32"},
				{"name":"exitCode","type":"uint32"}
			],
			"outputs": [
			]
		},
		{
			"name": "getDebotInfo",
			"id": "0xDEB",
			"inputs": [
			],
			"outputs": [
				{"name":"name","type":"bytes"},
				{"name":"version","type":"bytes"},
				{"name":"publisher","type":"bytes"},
				{"name":"caption","type":"bytes"},
				{"name":"author","type":"bytes"},
				{"name":"support","type":"address"},
				{"name":"hello","type":"bytes"},
				{"name":"language","type":"bytes"},
				{"name":"dabi","type":"bytes"},
				{"name":"icon","type":"bytes"}
			]
		},
		{
			"name": "getRequiredInterfaces",
			"inputs": [
			],
			"outputs": [
				{"name":"interfaces","type":"uint256[]"}
			]
		},
		{
			"name": "getDebotOptions",
			"inputs": [
			],
			"outputs": [
				{"name":"options","type":"uint8"},
				{"name":"debotAbi","type":"bytes"},
				{"name":"targetAbi","type":"bytes"},
				{"name":"targetAddr","type":"address"}
			]
		},
		{
			"name": "setABI",
			"inputs": [
				{"name":"dabi","type":"bytes"},
				{"name":"ATdebotAddress","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "constructor",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "districtD",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"name","type":"bytes"},{"name":"municipalBodiesArr","type":"uint256[]"},{"name":"votingPoolsArr","type":"uint256[]"}],"name":"districtD","type":"map(uint256,tuple)"}
			]
		},
		{
			"name": "MBD",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"name","type":"bytes"},{"name":"votingPoolsArr","type":"uint256[]"}],"name":"MBD","type":"map(uint256,tuple)"}
			]
		},
		{
			"name": "votingPoolD",
			"inputs": [
			],
			"outputs": [
				{"components":[{"name":"name","type":"bytes"},{"name":"votingCentersArr","type":"uint256[]"}],"name":"votingPoolD","type":"map(uint256,tuple)"}
			]
		},
		{
			"name": "votingPoolKeysD",
			"inputs": [
			],
			"outputs": [
				{"name":"votingPoolKeysD","type":"uint256[]"}
			]
		}
	],
	"data": [
	],
	"events": [
	]
};

const pkg = {
    abi,
    imageBase64: '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',
};

class VA_EDContract {
    /**
    * @param {TONClient} client
    * @param {string} address can be null if contract will be deployed
    * @param {TONKeyPairData} keys
    */
    constructor(client, address, keys) {
        this.client = client;
        this.address = address;
        this.keys = keys;
        this.package = pkg;
        this.abi = abi;
    }

    /**
     */
    async deploy() {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams: {},
            initParams: {},
            keyPair: this.keys,
        })).address;
    }

    /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async run(functionName, input) {
        const result = await this.client.contracts.run({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

   /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async runLocal(functionName, input) {
        const result = await this.client.contracts.runLocal({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

    /**
     * @param {object} params
     * @param {bytes} params.icon
     */
    setIcon(params) {
        return this.run('setIcon', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.icon
     */
    setIconLocal(params) {
        return this.runLocal('setIcon', params);
    }

    /**
     */
    start() {
        return this.run('start', {});
    }

    /**
     */
    startLocal() {
        return this.runLocal('start', {});
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    prestart(params) {
        return this.run('prestart', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    prestartLocal(params) {
        return this.runLocal('prestart', params);
    }

    /**
     * @param {object} params
     * @param {string} params.partAddress (address)
     * @param {string} params.choosenDAD (address)
     */
    startGlobal(params) {
        return this.run('startGlobal', params);
    }

    /**
     * @param {object} params
     * @param {string} params.partAddress (address)
     * @param {string} params.choosenDAD (address)
     */
    startGlobalLocal(params) {
        return this.runLocal('startGlobal', params);
    }

    /**
     */
    startFetch() {
        return this.run('startFetch', {});
    }

    /**
     */
    startFetchLocal() {
        return this.runLocal('startFetch', {});
    }

    /**
     */
    fetchDistricts() {
        return this.run('fetchDistricts', {});
    }

    /**
     */
    fetchDistrictsLocal() {
        return this.runLocal('fetchDistricts', {});
    }

    /**
     * @param {object} params
     * @param {string[]} params.districtKeys (uint256[])
     */
    SCfetchDistricts(params) {
        return this.run('SCfetchDistricts', params);
    }

    /**
     * @param {object} params
     * @param {string[]} params.districtKeys (uint256[])
     */
    SCfetchDistrictsLocal(params) {
        return this.runLocal('SCfetchDistricts', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curDistr (uint256)
     */
    getDistrictData(params) {
        return this.run('getDistrictData', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curDistr (uint256)
     */
    getDistrictDataLocal(params) {
        return this.runLocal('getDistrictData', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string[]} params.votingPoolsArr4Debot (uint256[])
     * @param {string[]} params.municipalBodiesArr4Debot (uint256[])
     * @param {string} params.districtCurrentKeyD (uint256)
     */
    SCchooseDistrict(params) {
        return this.run('SCchooseDistrict', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string[]} params.votingPoolsArr4Debot (uint256[])
     * @param {string[]} params.municipalBodiesArr4Debot (uint256[])
     * @param {string} params.districtCurrentKeyD (uint256)
     */
    SCchooseDistrictLocal(params) {
        return this.runLocal('SCchooseDistrict', params);
    }

    /**
     */
    fetchMB() {
        return this.run('fetchMB', {});
    }

    /**
     */
    fetchMBLocal() {
        return this.runLocal('fetchMB', {});
    }

    /**
     * @param {object} params
     * @param {string[]} params.municipalBodyKeys (uint256[])
     */
    SCfetchMB(params) {
        return this.run('SCfetchMB', params);
    }

    /**
     * @param {object} params
     * @param {string[]} params.municipalBodyKeys (uint256[])
     */
    SCfetchMBLocal(params) {
        return this.runLocal('SCfetchMB', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curMB (uint256)
     */
    getMBData(params) {
        return this.run('getMBData', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curMB (uint256)
     */
    getMBDataLocal(params) {
        return this.runLocal('getMBData', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string[]} params.votingPoolsArr4Debot (uint256[])
     * @param {string} params.municipalBodyCurrentKeyD (uint256)
     */
    SCgetMBData(params) {
        return this.run('SCgetMBData', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string[]} params.votingPoolsArr4Debot (uint256[])
     * @param {string} params.municipalBodyCurrentKeyD (uint256)
     */
    SCgetMBDataLocal(params) {
        return this.runLocal('SCgetMBData', params);
    }

    /**
     */
    fetchVP() {
        return this.run('fetchVP', {});
    }

    /**
     */
    fetchVPLocal() {
        return this.runLocal('fetchVP', {});
    }

    /**
     * @param {object} params
     * @param {string[]} params.votingPoolKeys (uint256[])
     */
    SCfetchVP(params) {
        return this.run('SCfetchVP', params);
    }

    /**
     * @param {object} params
     * @param {string[]} params.votingPoolKeys (uint256[])
     */
    SCfetchVPLocal(params) {
        return this.runLocal('SCfetchVP', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curVP (uint256)
     */
    getVPData(params) {
        return this.run('getVPData', params);
    }

    /**
     * @param {object} params
     * @param {string} params.curVP (uint256)
     */
    getVPDataLocal(params) {
        return this.runLocal('getVPData', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string} params.votingPoolCurrentKeyD (uint256)
     */
    SCgetVPData(params) {
        return this.run('SCgetVPData', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.name4Debot
     * @param {string[]} params.votes4Debot (uint256[])
     * @param {string[]} params.votingCentersArr4Debot (uint256[])
     * @param {string} params.votingPoolCurrentKeyD (uint256)
     */
    SCgetVPDataLocal(params) {
        return this.runLocal('SCgetVPData', params);
    }

    /**
     */
    editDeAudit() {
        return this.run('editDeAudit', {});
    }

    /**
     */
    editDeAuditLocal() {
        return this.runLocal('editDeAudit', {});
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    goToATdebot(params) {
        return this.run('goToATdebot', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    goToATdebotLocal(params) {
        return this.runLocal('goToATdebot', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    devshow(params) {
        return this.run('devshow', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    devshowLocal(params) {
        return this.runLocal('devshow', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onAddDistrictSetName(params) {
        return this.run('onAddDistrictSetName', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onAddDistrictSetNameLocal(params) {
        return this.runLocal('onAddDistrictSetName', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setDistrictCall(params) {
        return this.run('setDistrictCall', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setDistrictCallLocal(params) {
        return this.runLocal('setDistrictCall', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onAddCandidateName(params) {
        return this.run('onAddCandidateName', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onAddCandidateNameLocal(params) {
        return this.runLocal('onAddCandidateName', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setCandidateName(params) {
        return this.run('setCandidateName', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setCandidateNameLocal(params) {
        return this.runLocal('setCandidateName', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onCurItemCheck(params) {
        return this.run('onCurItemCheck', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    onCurItemCheckLocal(params) {
        return this.runLocal('onCurItemCheck', params);
    }

    /**
     */
    touchDistricts() {
        return this.run('touchDistricts', {});
    }

    /**
     */
    touchDistrictsLocal() {
        return this.runLocal('touchDistricts', {});
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedDistrict(params) {
        return this.run('setTouchedDistrict', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedDistrictLocal(params) {
        return this.runLocal('setTouchedDistrict', params);
    }

    /**
     */
    touchMB() {
        return this.run('touchMB', {});
    }

    /**
     */
    touchMBLocal() {
        return this.runLocal('touchMB', {});
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedMB(params) {
        return this.run('setTouchedMB', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedMBLocal(params) {
        return this.runLocal('setTouchedMB', params);
    }

    /**
     */
    touchVP() {
        return this.run('touchVP', {});
    }

    /**
     */
    touchVPLocal() {
        return this.runLocal('touchVP', {});
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedVP(params) {
        return this.run('setTouchedVP', params);
    }

    /**
     * @param {object} params
     * @param {number} params.index (uint32)
     */
    setTouchedVPLocal(params) {
        return this.runLocal('setTouchedVP', params);
    }

    /**
     */
    onAddMB() {
        return this.run('onAddMB', {});
    }

    /**
     */
    onAddMBLocal() {
        return this.runLocal('onAddMB', {});
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setMBname(params) {
        return this.run('setMBname', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setMBnameLocal(params) {
        return this.runLocal('setMBname', params);
    }

    /**
     */
    touchCurVotingVP() {
        return this.run('touchCurVotingVP', {});
    }

    /**
     */
    touchCurVotingVPLocal() {
        return this.runLocal('touchCurVotingVP', {});
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setVPname(params) {
        return this.run('setVPname', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setVPnameLocal(params) {
        return this.runLocal('setVPname', params);
    }

    /**
     */
    touchCurVotingVC() {
        return this.run('touchCurVotingVC', {});
    }

    /**
     */
    touchCurVotingVCLocal() {
        return this.runLocal('touchCurVotingVC', {});
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setLocationVC(params) {
        return this.run('setLocationVC', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setLocationVCLocal(params) {
        return this.runLocal('setLocationVC', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setVCname(params) {
        return this.run('setVCname', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.value
     */
    setVCnameLocal(params) {
        return this.runLocal('setVCname', params);
    }

    /**
     * @param {object} params
     * @param {number} params.sdkError (uint32)
     * @param {number} params.exitCode (uint32)
     */
    someError(params) {
        return this.run('someError', params);
    }

    /**
     * @param {object} params
     * @param {number} params.sdkError (uint32)
     * @param {number} params.exitCode (uint32)
     */
    someErrorLocal(params) {
        return this.runLocal('someError', params);
    }

    /**
     * @typedef VA_EDContract_getDebotInfo
     * @type {object}
     * @property {bytes} name 
     * @property {bytes} version 
     * @property {bytes} publisher 
     * @property {bytes} caption 
     * @property {bytes} author 
     * @property {string} support  (address)
     * @property {bytes} hello 
     * @property {bytes} language 
     * @property {bytes} dabi 
     * @property {bytes} icon 
     */

    /**
     * @return {Promise.<VA_EDContract_getDebotInfo>}
     */
    getDebotInfo() {
        return this.run('getDebotInfo', {});
    }

    /**
     * @return {Promise.<VA_EDContract_getDebotInfo>}
     */
    getDebotInfoLocal() {
        return this.runLocal('getDebotInfo', {});
    }

    /**
     * @typedef VA_EDContract_getRequiredInterfaces
     * @type {object}
     * @property {string[]} interfaces  (uint256[])
     */

    /**
     * @return {Promise.<VA_EDContract_getRequiredInterfaces>}
     */
    getRequiredInterfaces() {
        return this.run('getRequiredInterfaces', {});
    }

    /**
     * @return {Promise.<VA_EDContract_getRequiredInterfaces>}
     */
    getRequiredInterfacesLocal() {
        return this.runLocal('getRequiredInterfaces', {});
    }

    /**
     * @typedef VA_EDContract_getDebotOptions
     * @type {object}
     * @property {number} options  (uint8)
     * @property {bytes} debotAbi 
     * @property {bytes} targetAbi 
     * @property {string} targetAddr  (address)
     */

    /**
     * @return {Promise.<VA_EDContract_getDebotOptions>}
     */
    getDebotOptions() {
        return this.run('getDebotOptions', {});
    }

    /**
     * @return {Promise.<VA_EDContract_getDebotOptions>}
     */
    getDebotOptionsLocal() {
        return this.runLocal('getDebotOptions', {});
    }

    /**
     * @param {object} params
     * @param {bytes} params.dabi
     * @param {string} params.ATdebotAddress (address)
     */
    setABI(params) {
        return this.run('setABI', params);
    }

    /**
     * @param {object} params
     * @param {bytes} params.dabi
     * @param {string} params.ATdebotAddress (address)
     */
    setABILocal(params) {
        return this.runLocal('setABI', params);
    }

    /**
     * @typedef VA_EDContract_districtD
     * @type {object}
     * @property {map(uint256,tuple)} districtD 
     */

    /**
     * @return {Promise.<VA_EDContract_districtD>}
     */
    districtD() {
        return this.run('districtD', {});
    }

    /**
     * @return {Promise.<VA_EDContract_districtD>}
     */
    districtDLocal() {
        return this.runLocal('districtD', {});
    }

    /**
     * @typedef VA_EDContract_MBD
     * @type {object}
     * @property {map(uint256,tuple)} MBD 
     */

    /**
     * @return {Promise.<VA_EDContract_MBD>}
     */
    MBD() {
        return this.run('MBD', {});
    }

    /**
     * @return {Promise.<VA_EDContract_MBD>}
     */
    MBDLocal() {
        return this.runLocal('MBD', {});
    }

    /**
     * @typedef VA_EDContract_votingPoolD
     * @type {object}
     * @property {map(uint256,tuple)} votingPoolD 
     */

    /**
     * @return {Promise.<VA_EDContract_votingPoolD>}
     */
    votingPoolD() {
        return this.run('votingPoolD', {});
    }

    /**
     * @return {Promise.<VA_EDContract_votingPoolD>}
     */
    votingPoolDLocal() {
        return this.runLocal('votingPoolD', {});
    }

    /**
     * @typedef VA_EDContract_votingPoolKeysD
     * @type {object}
     * @property {string[]} votingPoolKeysD  (uint256[])
     */

    /**
     * @return {Promise.<VA_EDContract_votingPoolKeysD>}
     */
    votingPoolKeysD() {
        return this.run('votingPoolKeysD', {});
    }

    /**
     * @return {Promise.<VA_EDContract_votingPoolKeysD>}
     */
    votingPoolKeysDLocal() {
        return this.runLocal('votingPoolKeysD', {});
    }

}

VA_EDContract.package = pkg;

module.exports = VA_EDContract;
