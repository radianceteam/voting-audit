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
                "name": "publishData",
                "inputs": [
                    {
                        "name": "publishName",
                        "type": "bytes"
                    },
                    {
                        "name": "publishPhotoLink",
                        "type": "bytes"
                    },
                    {
                        "name": "publishDataLink",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPublishedData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pName",
                        "type": "bytes"
                    },
                    {
                        "name": "pPhotoLink",
                        "type": "bytes"
                    },
                    {
                        "name": "pDataLink",
                        "type": "bytes"
                    },
                    {
                        "name": "pAddress",
                        "type": "address"
                    },
                    {
                        "name": "pBalance",
                        "type": "uint128"
                    }
                ]
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
                "name": "receiveDeAuditMsg",
                "inputs": [
                    {
                        "name": "act4Arr",
                        "type": "address[]"
                    },
                    {
                        "name": "walletDeAudit",
                        "type": "address"
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
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "photoLink",
                "inputs": [],
                "outputs": [
                    {
                        "name": "photoLink",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "dataLink",
                "inputs": [],
                "outputs": [
                    {
                        "name": "dataLink",
                        "type": "bytes"
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
                "name": "activities",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "reg",
                                "type": "bool"
                            },
                            {
                                "name": "atype",
                                "type": "uint8"
                            },
                            {
                                "name": "act4Arr",
                                "type": "address[]"
                            },
                            {
                                "name": "wallet",
                                "type": "address"
                            }
                        ],
                        "name": "activities",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "walletsDC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "walletsDC",
                        "type": "address[]"
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