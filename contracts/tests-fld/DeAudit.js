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
                        "name": "vcfvArr",
                        "type": "uint256[]"
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