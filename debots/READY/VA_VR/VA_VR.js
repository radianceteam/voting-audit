const VA_VRContract = {
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
                "name": "invokeValidatorDebot",
                "inputs": [
                    {
                        "name": "curPart",
                        "type": "address"
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
                "name": "fetchDA",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCgetDeauditAddresses",
                "inputs": [
                    {
                        "name": "keysDeAudit",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deauditsCaller",
                "inputs": [
                    {
                        "name": "curDeAudit",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetDAstruct",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "fetchActivities",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCfetchActivities",
                "inputs": [
                    {
                        "name": "activeDeAudits",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchCurAvtivity",
                "inputs": [
                    {
                        "name": "curDeAuditforActivD",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchCurAvtivity",
                "inputs": [
                    {
                        "name": "reg",
                        "type": "bool"
                    },
                    {
                        "name": "atype",
                        "type": "uint8"
                    },
                    {
                        "name": "act4Arr",
                        "type": "address[]"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "curDAactiv",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "preStart",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mainMenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "goToCore",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onValidate",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onsetDaD",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetCollatorPhotoLink",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetPhotoLink",
                "inputs": [
                    {
                        "name": "collatorPhotoLink",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetAdditionalPhotos",
                "inputs": [
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "act4Validmenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "showACT4dt",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteForValidator",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteAgainstValidator",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "DAmenu",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showVotingAuditss",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValStake",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValStakeCall",
                "inputs": [],
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
            },
            {
                "name": "activitiesD",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "reg",
                                "type": "bool"
                            },
                            {
                                "name": "atype",
                                "type": "uint8"
                            },
                            {
                                "name": "act4Arr",
                                "type": "address[]"
                            },
                            {
                                "name": "wallet",
                                "type": "address"
                            }
                        ],
                        "name": "activitiesD",
                        "type": "map(address,tuple)"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "5afc4f28beb52c9398d95e46e86f3352c98528bff62672f031819c5c11269e04",
};
module.exports = { VA_VRContract };