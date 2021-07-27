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
                "name": "receivePositivResultFromAct4",
                "inputs": [
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    },
                    {
                        "name": "validatorsFBT",
                        "type": "address[]"
                    },
                    {
                        "name": "gasPayeerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveNegativeResultFromAct4",
                "inputs": [
                    {
                        "name": "collatorFBT",
                        "type": "address"
                    },
                    {
                        "name": "validatorsFBT",
                        "type": "address[]"
                    },
                    {
                        "name": "gasPayeerAddr",
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
                "name": "countResultedAct4",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countResultedAct4",
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
                                "name": "act4PositiveArr",
                                "type": "address[]"
                            },
                            {
                                "name": "act4NegativeArr",
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