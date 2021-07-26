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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "validateFor",
                "inputs": [
                    {
                        "name": "addrAct4",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "validateAgainst",
                "inputs": [
                    {
                        "name": "addrAct4",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "name": "getCurActivity",
                "inputs": [
                    {
                        "name": "curLaunchedDeAudit",
                        "type": "address"
                    }
                ],
                "outputs": [
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
                    },
                    {
                        "name": "curDAactiv",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getRewardAndStakeBack",
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
                "outputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ]
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
                "name": "activeDeAudits",
                "inputs": [],
                "outputs": [
                    {
                        "name": "activeDeAudits",
                        "type": "address[]"
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