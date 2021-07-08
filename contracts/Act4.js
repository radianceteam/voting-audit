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