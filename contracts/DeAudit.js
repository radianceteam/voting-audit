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
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditContract };