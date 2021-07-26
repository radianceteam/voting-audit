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
                "name": "setATaddress",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onsetEditDebaddress",
                "inputs": [
                    {
                        "name": "value",
                        "type": "address"
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
    codeHash: "9e9e8f8d0f8a7781663f583b6d65fe78163c4565641aa8daa725bacb42778b2d",
};
module.exports = { VA_VLContract };