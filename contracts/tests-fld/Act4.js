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
                "name": "addToAdditionalPhotoLinkArr",
                "inputs": [
                    {
                        "name": "linkToPhoto",
                        "type": "bytes"
                    },
                    {
                        "name": "participant",
                        "type": "address"
                    }
                ],
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
                "name": "additionalPhotoLinkArr",
                "inputs": [],
                "outputs": [
                    {
                        "name": "additionalPhotoLinkArr",
                        "type": "bytes[]"
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
                "name": "vcms",
                "type": "uint256"
            },
            {
                "key": 5,
                "name": "collator",
                "type": "address"
            },
            {
                "key": 6,
                "name": "collatorPhotoLink",
                "type": "bytes"
            },
            {
                "key": 7,
                "name": "voteMatrix",
                "type": "uint256[]"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { Act4Contract };