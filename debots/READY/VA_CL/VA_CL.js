const VA_CLContract = {
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
                "name": "preStart",
                "inputs": [
                    {
                        "name": "partic",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "pstart",
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
                "name": "fetchCD",
                "inputs": [
                    {
                        "name": "deAuditAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchCD",
                "inputs": [
                    {
                        "name": "candidateKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCDdata",
                "inputs": [
                    {
                        "name": "curDAD",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetCDdata",
                "inputs": [
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "votes4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "candidateCurrentKeyD",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchDA",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCfetchDA",
                "inputs": [
                    {
                        "name": "keysDeAudit",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDADdata",
                "inputs": [
                    {
                        "name": "curDAD",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetDADdata",
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
                "name": "fetchVC",
                "inputs": [
                    {
                        "name": "DADaddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchVC",
                "inputs": [
                    {
                        "name": "votingCenterKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getVCdata",
                "inputs": [
                    {
                        "name": "curVC",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetVCstruct",
                "inputs": [
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "location4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "votes4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "idVotingPool4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "idMunicipalBody4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "idDistrict4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "collationStatus4Debot",
                        "type": "bool"
                    },
                    {
                        "name": "act4Arr4Debot",
                        "type": "address[]"
                    },
                    {
                        "name": "votingCenterCurrentKeyD",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "CLmenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onAddCollation",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTouchedDA",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetVC",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setTouchedVC",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetLink2",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onSetLink",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setLink",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetVoteMatrix",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setTouchedCD",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "saveCandidateVotes",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandOnchainCheck",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "checkAns",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandOnchain",
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
                "name": "candidateD",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "votes",
                                "type": "uint256"
                            },
                            {
                                "name": "curVotes",
                                "type": "uint256"
                            }
                        ],
                        "name": "candidateD",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "candidateKeysD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "candidateKeysD",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "paramDeAuditD",
                "inputs": [],
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
                            },
                            {
                                "name": "status",
                                "type": "bytes"
                            }
                        ],
                        "name": "paramDeAuditD",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "keysDeAuditDataD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "keysDeAuditDataD",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "votingCenterD",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "location",
                                "type": "bytes"
                            },
                            {
                                "name": "votes",
                                "type": "uint256[]"
                            },
                            {
                                "name": "idVotingPool",
                                "type": "uint256"
                            },
                            {
                                "name": "idMunicipalBody",
                                "type": "uint256"
                            },
                            {
                                "name": "idDistrict",
                                "type": "uint256"
                            },
                            {
                                "name": "collationStatus",
                                "type": "bool"
                            },
                            {
                                "name": "act4Arr",
                                "type": "address[]"
                            }
                        ],
                        "name": "votingCenterD",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "votingCenterKeysD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingCenterKeysD",
                        "type": "uint256[]"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "0e9f2f58d02e997925862d4ffaf6293ae6a148931719eb70e3afe622e228f0f0",
};
module.exports = { VA_CLContract };