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