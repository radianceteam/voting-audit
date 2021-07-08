const DeAuditDataContract = {
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
                "inputs": [
                    {
                        "name": "valueMaxLength",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandidate",
                "inputs": [
                    {
                        "name": "nameCandidate",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addDistrict",
                "inputs": [
                    {
                        "name": "nameDistrict",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addMunicipalBody",
                "inputs": [
                    {
                        "name": "nameMunicipalBody",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingPool",
                "inputs": [
                    {
                        "name": "nameVotingPool",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "indexMunicipalBody",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingCenter",
                "inputs": [
                    {
                        "name": "nameVotingCenter",
                        "type": "bytes"
                    },
                    {
                        "name": "location",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "indexMunicipalBody",
                        "type": "uint256"
                    },
                    {
                        "name": "indexVotingPool",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDeAudit",
                "inputs": [
                    {
                        "name": "addressDeAudit",
                        "type": "address"
                    },
                    {
                        "name": "addressATM",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCollation",
                "inputs": [
                    {
                        "name": "collator",
                        "type": "address"
                    },
                    {
                        "name": "indexVotingCenter",
                        "type": "uint256"
                    },
                    {
                        "name": "linkToCollationPhoto",
                        "type": "bytes"
                    },
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    },
                    {
                        "name": "vcms",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "triggerToAct4",
                "inputs": [
                    {
                        "name": "addrAct4",
                        "type": "address"
                    },
                    {
                        "name": "member",
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
                "name": "getVotingCenter4Debot",
                "inputs": [
                    {
                        "name": "votingCenterCurrentKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
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
                        "name": "countAdditionlPhotoLinks4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "votingCenterCurrentKeyD",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getVotingPool4Debot",
                "inputs": [
                    {
                        "name": "votingPoolCurrentKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "votes4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingCentersArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingPoolCurrentKeyD",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getMunicipalBody4Debot",
                "inputs": [
                    {
                        "name": "municipalBodyCurrentKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "votes4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingCentersArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingPoolsArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "municipalBodyCurrentKeyD",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getDistrict4Debot",
                "inputs": [
                    {
                        "name": "districtCurrentKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "votes4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingCentersArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "votingPoolsArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "municipalBodiesArr4Debot",
                        "type": "uint256[]"
                    },
                    {
                        "name": "districtCurrentKeyD",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getCandidate4Debot",
                "inputs": [
                    {
                        "name": "candidateCurrentKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
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
                ]
            },
            {
                "name": "idDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "idDeAuditData",
                        "type": "uint256"
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
                "name": "initiator",
                "inputs": [],
                "outputs": [
                    {
                        "name": "initiator",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "codeAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeAct4",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "launchedDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "launchedDeAudit",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "votingCenter",
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
                                "name": "countAdditionlPhotoLinks",
                                "type": "uint256"
                            }
                        ],
                        "name": "votingCenter",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "votingCenterKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingCenterKeys",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "votingCenterForAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingCenterForAct4",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "act4ForVotingCenter",
                "inputs": [],
                "outputs": [
                    {
                        "name": "act4ForVotingCenter",
                        "type": "map(uint256,address)"
                    }
                ]
            },
            {
                "name": "countAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countAct4",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "votingPool",
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
                                "type": "uint256[]"
                            },
                            {
                                "name": "votingCentersArr",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "votingPool",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "votingPoolKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingPoolKeys",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "municipalBody",
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
                                "type": "uint256[]"
                            },
                            {
                                "name": "votingCentersArr",
                                "type": "uint256[]"
                            },
                            {
                                "name": "votingPoolsArr",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "municipalBody",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "municipalBodyKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "municipalBodyKeys",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "district",
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
                                "type": "uint256[]"
                            },
                            {
                                "name": "votingCentersArr",
                                "type": "uint256[]"
                            },
                            {
                                "name": "votingPoolsArr",
                                "type": "uint256[]"
                            },
                            {
                                "name": "municipalBodiesArr",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "district",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "districtKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "districtKeys",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "candidate",
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
                            }
                        ],
                        "name": "candidate",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "candidateKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "candidateKeys",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "settingLinksMaxLength",
                "inputs": [],
                "outputs": [
                    {
                        "name": "settingLinksMaxLength",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "idDeAuditData",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "rootDeAudit",
                "type": "address"
            },
            {
                "key": 3,
                "name": "initiator",
                "type": "address"
            },
            {
                "key": 4,
                "name": "name",
                "type": "bytes"
            },
            {
                "key": 5,
                "name": "codeAct4",
                "type": "cell"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditDataContract };