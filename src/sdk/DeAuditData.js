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
    tvc: "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"
};
module.exports = { DeAuditDataContract };