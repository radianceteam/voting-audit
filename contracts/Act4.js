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
                "name": "setValidator",
                "inputs": [
                    {
                        "name": "participant",
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
                "name": "lvfc",
                "inputs": [],
                "outputs": [
                    {
                        "name": "lvfc",
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
                "name": "collatorPhotoLink",
                "inputs": [],
                "outputs": [
                    {
                        "name": "collatorPhotoLink",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "voteMatrix",
                "inputs": [],
                "outputs": [
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
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
                "name": "validatorsFor",
                "inputs": [],
                "outputs": [
                    {
                        "name": "validatorsFor",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "validatorsAgainst",
                "inputs": [],
                "outputs": [
                    {
                        "name": "validatorsAgainst",
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
                "name": "vcms",
                "type": "uint8"
            },
            {
                "key": 5,
                "name": "lvfc",
                "type": "uint256"
            },
            {
                "key": 6,
                "name": "collator",
                "type": "address"
            },
            {
                "key": 7,
                "name": "collatorPhotoLink",
                "type": "bytes"
            },
            {
                "key": 8,
                "name": "voteMatrix",
                "type": "uint256[]"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { Act4Contract };