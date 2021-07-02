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
                "name": "pathVotingCenterForAct4",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "d",
                                "type": "uint256"
                            },
                            {
                                "name": "mb",
                                "type": "uint256"
                            },
                            {
                                "name": "vp",
                                "type": "uint256"
                            },
                            {
                                "name": "vc",
                                "type": "uint256"
                            }
                        ],
                        "name": "pathVotingCenterForAct4",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "pathVotingCenterForIndex",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "d",
                                "type": "uint256"
                            },
                            {
                                "name": "mb",
                                "type": "uint256"
                            },
                            {
                                "name": "vp",
                                "type": "uint256"
                            },
                            {
                                "name": "vc",
                                "type": "uint256"
                            }
                        ],
                        "name": "pathVotingCenterForIndex",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "countVotingCenteres",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countVotingCenteres",
                        "type": "uint256"
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
                                                    }
                                                ],
                                                "name": "votingCenter",
                                                "type": "map(uint256,tuple)"
                                            },
                                            {
                                                "name": "votingCenterKeys",
                                                "type": "uint256[]"
                                            }
                                        ],
                                        "name": "votingPool",
                                        "type": "map(uint256,tuple)"
                                    },
                                    {
                                        "name": "votingPoolKeys",
                                        "type": "uint256[]"
                                    }
                                ],
                                "name": "municipalBody",
                                "type": "map(uint256,tuple)"
                            },
                            {
                                "name": "municipalBodyKeys",
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
                "name": "countCandidates",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countCandidates",
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
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditDataContract };