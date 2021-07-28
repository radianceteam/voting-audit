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
    tvc: "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"
};
module.exports = { DeAuditContract };