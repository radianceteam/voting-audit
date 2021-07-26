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
},
	tvc:"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\n"
}
module.exports = { VA_ED };
