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
                "name": "fVC",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fCD",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
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
    codeHash: "ad41d9efd4443b014109782f5ed8e2f0edf270699b70b6ca1e6722399101b226",
};
module.exports = { VA_CLContract };