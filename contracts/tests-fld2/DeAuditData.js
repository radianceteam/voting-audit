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
                "name": "getNextAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "addValidatorToAct4",
                "inputs": [
                    {
                        "name": "validatorAddr",
                        "type": "address"
                    },
                    {
                        "name": "position",
                        "type": "uint256"
                    },
                    {
                        "name": "gramsForAct4",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "act4",
                        "type": "address"
                    },
                    {
                        "name": "status",
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
                                "name": "validatorIndex",
                                "type": "map(address,uint256)"
                            },
                            {
                                "name": "validatorQty",
                                "type": "uint256"
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