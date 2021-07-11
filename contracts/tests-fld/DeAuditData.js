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
                "name": "setValidationForParticipant",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyValidations",
                        "type": "uint256"
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
                            },
                            {
                                "name": "validatorsArr",
                                "type": "address[]"
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
                "name": "labelLVA4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "labelLVA4",
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