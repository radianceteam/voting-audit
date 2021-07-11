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
                "name": "addCollation",
                "inputs": [
                    {
                        "name": "addressDeAudit",
                        "type": "address"
                    },
                    {
                        "name": "indexVotingCenter",
                        "type": "uint256"
                    },
                    {
                        "name": "linkToCollationPhoto",
                        "type": "bytes"
                    },
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "registrationForValidation",
                "inputs": [
                    {
                        "name": "addressDeAudit",
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
                "name": "setDeAuditValidations",
                "inputs": [
                    {
                        "name": "votingCentersArr",
                        "type": "uint256[]"
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
            },
            {
                "name": "validations",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "reg",
                                "type": "bool"
                            },
                            {
                                "name": "votingCentersArr",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "validations",
                        "type": "map(address,tuple)"
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