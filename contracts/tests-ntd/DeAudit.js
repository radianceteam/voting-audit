const DeAuditContract = {
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
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "sequentialNumber",
                                "type": "uint32"
                            },
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "rootDeAudit",
                                "type": "address"
                            },
                            {
                                "name": "dataDeAudit",
                                "type": "address"
                            },
                            {
                                "name": "tokenDeAudit",
                                "type": "address"
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
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "addCollation",
                "inputs": [
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "collationCallback",
                "inputs": [
                    {
                        "name": "statusCollation",
                        "type": "uint8"
                    },
                    {
                        "name": "addressCollator",
                        "type": "address"
                    },
                    {
                        "name": "msgData",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "expectedWalletAddressCallback",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "wallet_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "registrationForValidation",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "regForValidationCallback",
                "inputs": [
                    {
                        "name": "addressValidator",
                        "type": "address"
                    },
                    {
                        "name": "msgData",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "triggerToDeAuditData",
                "inputs": [
                    {
                        "name": "addrAct4",
                        "type": "address"
                    },
                    {
                        "name": "member",
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
                "name": "burnTokens",
                "inputs": [
                    {
                        "name": "addressParticipantArr",
                        "type": "address[]"
                    },
                    {
                        "name": "gasPayeerAddress",
                        "type": "address"
                    },
                    {
                        "name": "statusWithraw",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "shareOf",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
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
                "name": "getRewardAndStakeBack",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getDetails4Debot",
                "inputs": [],
                "outputs": [
                    {
                        "name": "sequentialNumber4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "rootDeAudit4Debot",
                        "type": "address"
                    },
                    {
                        "name": "dataDeAudit4Debot",
                        "type": "address"
                    },
                    {
                        "name": "tokenDeAudit4Debot",
                        "type": "address"
                    },
                    {
                        "name": "timeStart4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "colPeriod4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "valPeriod4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "colStake4Debot",
                        "type": "uint128"
                    },
                    {
                        "name": "valStake4Debot",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "sequentialNumber",
                "inputs": [],
                "outputs": [
                    {
                        "name": "sequentialNumber",
                        "type": "uint32"
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
                "name": "dataDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "dataDeAudit",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "tokenDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "tokenDeAudit",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "timeStart",
                "inputs": [],
                "outputs": [
                    {
                        "name": "timeStart",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "colPeriod",
                "inputs": [],
                "outputs": [
                    {
                        "name": "colPeriod",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "valPeriod",
                "inputs": [],
                "outputs": [
                    {
                        "name": "valPeriod",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "colStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "colStake",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "valStake",
                "inputs": [],
                "outputs": [
                    {
                        "name": "valStake",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "vcms",
                "inputs": [],
                "outputs": [
                    {
                        "name": "vcms",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "withdrawOpenStatus",
                "inputs": [],
                "outputs": [
                    {
                        "name": "withdrawOpenStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "stakeOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "stakeOf",
                        "type": "map(address,uint128)"
                    }
                ]
            },
            {
                "name": "totalStaked",
                "inputs": [],
                "outputs": [
                    {
                        "name": "totalStaked",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "walletOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "walletOf",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "msgForParticipant",
                "inputs": [],
                "outputs": [
                    {
                        "name": "msgForParticipant",
                        "type": "map(address,address[])"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "sequentialNumber",
                "type": "uint32"
            },
            {
                "key": 2,
                "name": "name",
                "type": "bytes"
            },
            {
                "key": 3,
                "name": "rootDeAudit",
                "type": "address"
            },
            {
                "key": 4,
                "name": "dataDeAudit",
                "type": "address"
            },
            {
                "key": 5,
                "name": "tokenDeAudit",
                "type": "address"
            },
            {
                "key": 6,
                "name": "timeStart",
                "type": "uint256"
            },
            {
                "key": 7,
                "name": "colPeriod",
                "type": "uint256"
            },
            {
                "key": 8,
                "name": "valPeriod",
                "type": "uint256"
            },
            {
                "key": 9,
                "name": "colStake",
                "type": "uint128"
            },
            {
                "key": 10,
                "name": "valStake",
                "type": "uint128"
            },
            {
                "key": 11,
                "name": "vcms",
                "type": "uint8"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditContract };