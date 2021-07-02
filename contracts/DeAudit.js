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
                "name": "rootDeAudit",
                "type": "address"
            },
            {
                "key": 3,
                "name": "dataDeAudit",
                "type": "address"
            },
            {
                "key": 4,
                "name": "tokenDeAudit",
                "type": "address"
            },
            {
                "key": 5,
                "name": "timeStart",
                "type": "uint256"
            },
            {
                "key": 6,
                "name": "colPeriod",
                "type": "uint256"
            },
            {
                "key": 7,
                "name": "valPeriod",
                "type": "uint256"
            },
            {
                "key": 8,
                "name": "colStake",
                "type": "uint128"
            },
            {
                "key": 9,
                "name": "valStake",
                "type": "uint128"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditContract };