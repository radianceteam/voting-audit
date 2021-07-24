const VA_ED = {
	abi: {
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
}}
module.exports = { VA_ED };
