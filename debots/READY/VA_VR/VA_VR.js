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
                        "name": "curDeAuditforActiv",
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
                "name": "goToValMenubyCurActiv",
                "inputs": [
                    {
                        "name": "additionalPhotoLinkArr",
                        "type": "bytes[]"
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
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteAgainstValidator",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
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
    codeHash: "8717eeb618b776248027be5896d911e52589bfa93f4cdee1f5966a7f0e8aeaa9",
};
module.exports = { VA_VRContract };