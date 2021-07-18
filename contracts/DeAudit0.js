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