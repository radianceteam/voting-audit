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
                "name": "getRandomStepsFrom",
                "inputs": [
                    {
                        "name": "limit",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getQtyAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getStartPoint",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getNextKey",
                "inputs": [
                    {
                        "name": "key",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getGramsForAct4",
                "inputs": [
                    {
                        "name": "totalValue",
                        "type": "uint128"
                    },
                    {
                        "name": "qtyAct4",
                        "type": "uint128"
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
                "name": "getLimit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "isAct4Full",
                "inputs": [
                    {
                        "name": "qtyValidations",
                        "type": "uint256"
                    },
                    {
                        "name": "limit",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "bool"
                    }
                ]
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
                        "type": "uint128"
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
                        "name": "act4Arr4Debot",
                        "type": "address[]"
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
                "name": "queueAct4",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "indexVC",
                                "type": "uint256"
                            },
                            {
                                "name": "addressAct4",
                                "type": "address"
                            },
                            {
                                "name": "validators",
                                "type": "address[]"
                            }
                        ],
                        "name": "queueAct4",
                        "type": "map(uint256,tuple)"
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
                "name": "queueAct4Length",
                "inputs": [],
                "outputs": [
                    {
                        "name": "queueAct4Length",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "countCollatedVC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countCollatedVC",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "countSpointVC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countSpointVC",
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
                "name": "limitValsForCol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "limitValsForCol",
                        "type": "uint256"
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
                                "name": "act4Arr",
                                "type": "address[]"
                            },
                            {
                                "name": "validatorsArr",
                                "type": "map(address,address[])"
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