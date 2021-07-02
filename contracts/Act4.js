const Act4Contract = {
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
                "name": "trigger",
                "inputs": [
                    {
                        "name": "member",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteFor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "voteAgainst",
                "inputs": [],
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
                "name": "idVotingCenter",
                "inputs": [],
                "outputs": [
                    {
                        "name": "idVotingCenter",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "collator",
                "inputs": [],
                "outputs": [
                    {
                        "name": "collator",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "vcms",
                "inputs": [],
                "outputs": [
                    {
                        "name": "vcms",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "candidateVotes",
                "inputs": [],
                "outputs": [
                    {
                        "name": "candidateVotes",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "validator",
                "inputs": [],
                "outputs": [
                    {
                        "name": "validator",
                        "type": "map(address,bool)"
                    }
                ]
            },
            {
                "name": "countValidators",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countValidators",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "countValidationsFor",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countValidationsFor",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "countValidationsAgainst",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countValidationsAgainst",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "rootDeAudit",
                "type": "address"
            },
            {
                "key": 2,
                "name": "dataDeAudit",
                "type": "address"
            },
            {
                "key": 3,
                "name": "idVotingCenter",
                "type": "uint256"
            },
            {
                "key": 4,
                "name": "collator",
                "type": "address"
            },
            {
                "key": 5,
                "name": "vcms",
                "type": "uint256"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { Act4Contract };