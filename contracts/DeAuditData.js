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
                "inputs": [],
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
                                "name": "collator",
                                "type": "address"
                            },
                            {
                                "name": "collatorWallet",
                                "type": "address"
                            },
                            {
                                "name": "collatorPhotoIndex",
                                "type": "bytes"
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
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditDataContract };