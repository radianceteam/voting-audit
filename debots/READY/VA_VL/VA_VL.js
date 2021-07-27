const VA_VLContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "setIcon",
                "inputs": [
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "prestart",
                "inputs": [
                    {
                        "name": "m_participantC",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "preInd",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "start",
                "id": "0x1",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "votingListMenu_getVoteStuct",
                "inputs": [
                    {
                        "name": "voteKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "votingListMenu_getVoteStuctCur",
                "inputs": [
                    {
                        "name": "curVoteKey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetCurVote",
                "inputs": [
                    {
                        "name": "initiator4Debot",
                        "type": "address"
                    },
                    {
                        "name": "startTime4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "duration4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "vcms4Debot",
                        "type": "uint8"
                    },
                    {
                        "name": "yes4Debot",
                        "type": "map(address,uint32)"
                    },
                    {
                        "name": "no4Debot",
                        "type": "map(address,uint32)"
                    },
                    {
                        "name": "yesCount4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "noCount4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "data4Debot",
                        "type": "cell"
                    },
                    {
                        "name": "actionType4Debot",
                        "type": "uint8"
                    },
                    {
                        "name": "completed4Debot",
                        "type": "bool"
                    },
                    {
                        "name": "voteKeyD",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "premenu",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "votingListMenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "showallV",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "toungAllV",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "goToACTMdebot",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showVotings",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showDADdata",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteFor",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteAgainst",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resultVote",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCcall",
                "inputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "someError",
                "inputs": [
                    {
                        "name": "sdkError",
                        "type": "uint32"
                    },
                    {
                        "name": "exitCode",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDebotInfo",
                "id": "0xDEB",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "version",
                        "type": "bytes"
                    },
                    {
                        "name": "publisher",
                        "type": "bytes"
                    },
                    {
                        "name": "caption",
                        "type": "bytes"
                    },
                    {
                        "name": "author",
                        "type": "bytes"
                    },
                    {
                        "name": "support",
                        "type": "address"
                    },
                    {
                        "name": "hello",
                        "type": "bytes"
                    },
                    {
                        "name": "language",
                        "type": "bytes"
                    },
                    {
                        "name": "dabi",
                        "type": "bytes"
                    },
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "getRequiredInterfaces",
                "inputs": [],
                "outputs": [
                    {
                        "name": "interfaces",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "getDebotOptions",
                "inputs": [],
                "outputs": [
                    {
                        "name": "options",
                        "type": "uint8"
                    },
                    {
                        "name": "debotAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "setABI",
                "inputs": [
                    {
                        "name": "dabi",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "e250df80c9a9f814a9268a18cedca58b2af4e16ee8e6dfe4482c5e61bfa8d554",
};
module.exports = { VA_VLContract };