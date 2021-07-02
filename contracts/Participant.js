const ParticipantContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransfer",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteAddActionTeamMember",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteRemoveActionTeamMember",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createDeAuditData",
                "inputs": [
                    {
                        "name": "nameDeAuditData",
                        "type": "bytes"
                    },
                    {
                        "name": "timeStart",
                        "type": "uint256"
                    },
                    {
                        "name": "colPeriod",
                        "type": "uint256"
                    },
                    {
                        "name": "valPeriod",
                        "type": "uint256"
                    },
                    {
                        "name": "colStake",
                        "type": "uint128"
                    },
                    {
                        "name": "valStake",
                        "type": "uint128"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteDeAudut",
                "inputs": [
                    {
                        "name": "addrDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteFor",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteAgainst",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resultVote",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTrigger",
                "inputs": [
                    {
                        "name": "addrDeAudit",
                        "type": "address"
                    },
                    {
                        "name": "addrAct4",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreatedDeAuditData",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addDistrict",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameDistrict",
                        "type": "bytes"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addMunicipalBody",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameMunicipalBody",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingPool",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameVotingPool",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "indexMunicipalBody",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingCenter",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameVotingCenter",
                        "type": "bytes"
                    },
                    {
                        "name": "location",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "indexMunicipalBody",
                        "type": "uint256"
                    },
                    {
                        "name": "indexVotingPool",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandidate",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameCandidate",
                        "type": "bytes"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getBalance",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "rootDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootDeAudit",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "initiatedDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "initiatedDeAuditData",
                        "type": "map(address,uint256)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "rootDeAudit",
                "type": "address"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { ParticipantContract };