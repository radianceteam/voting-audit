const DeAuditRootContract = {
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
                        "name": "settingVoteCountModel",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTransfer",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodePaticipant",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreator",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setCodeDeAuditData",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeDeAudit",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeAct4",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeRootTokenContract",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeTONTokenWallet",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDeployFee",
                "inputs": [
                    {
                        "name": "settingDeployFee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "selectMajority",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "selectSoftMajority",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "selectSuperMajority",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setVotingDuration",
                "inputs": [
                    {
                        "name": "settingVotingDuration",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setGiver",
                "inputs": [
                    {
                        "name": "giverAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getParticipantAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "pubkeyParticipant",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "deployParticipant",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "deployedAddress",
                        "type": "address"
                    },
                    {
                        "name": "statusDeploy",
                        "type": "bool"
                    }
                ]
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
                "name": "createDeAuditData",
                "inputs": [
                    {
                        "name": "nameDeAuditData",
                        "type": "bytes"
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteAddActionTeamMember",
                "inputs": [
                    {
                        "name": "addressParticipant",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteRemoveActionTeamMember",
                "inputs": [
                    {
                        "name": "addressParticipant",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteDeAudut",
                "inputs": [
                    {
                        "name": "addrDeAuditData",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "isTimeUp",
                "inputs": [
                    {
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "name": "duration",
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
                "name": "timeNow",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "calculateVotes",
                "inputs": [
                    {
                        "name": "yes",
                        "type": "uint32"
                    },
                    {
                        "name": "no",
                        "type": "uint32"
                    },
                    {
                        "name": "total",
                        "type": "uint32"
                    },
                    {
                        "name": "selector",
                        "type": "uint8"
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
                "name": "resultVote",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteFor",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteAgainst",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTrigger",
                "inputs": [
                    {
                        "name": "addrDeAudit",
                        "type": "address"
                    },
                    {
                        "name": "addrAct4",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "soUINT",
                "inputs": [],
                "outputs": [
                    {
                        "name": "soUINT",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "codeParticipant",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeParticipant",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDeAudit",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDeAuditData",
                        "type": "cell"
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
                "name": "codeRootTokenContract",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeRootTokenContract",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeTONTokenWallet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeTONTokenWallet",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "actionTeam",
                "inputs": [],
                "outputs": [
                    {
                        "name": "actionTeam",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "actionTeamMembers",
                "inputs": [],
                "outputs": [
                    {
                        "name": "actionTeamMembers",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "balanceOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balanceOf",
                        "type": "map(address,uint128)"
                    }
                ]
            },
            {
                "name": "giverFor",
                "inputs": [],
                "outputs": [
                    {
                        "name": "giverFor",
                        "type": "map(uint256,address)"
                    }
                ]
            },
            {
                "name": "participantAddr",
                "inputs": [],
                "outputs": [
                    {
                        "name": "participantAddr",
                        "type": "map(uint256,address)"
                    }
                ]
            },
            {
                "name": "participantPubKey",
                "inputs": [],
                "outputs": [
                    {
                        "name": "participantPubKey",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "participantArr",
                "inputs": [],
                "outputs": [
                    {
                        "name": "participantArr",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "paramDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "creator",
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
                            }
                        ],
                        "name": "paramDeAudit",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "countDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countDeAuditData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "launchedDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "launchedDeAudit",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "keysDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "keysDeAudit",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "countDeAudit",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countDeAudit",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "deployFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "deployFee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "votingDuration",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingDuration",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "voteCountModel",
                "inputs": [],
                "outputs": [
                    {
                        "name": "voteCountModel",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "vote",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "initiator",
                                "type": "address"
                            },
                            {
                                "name": "startTime",
                                "type": "uint256"
                            },
                            {
                                "name": "duration",
                                "type": "uint256"
                            },
                            {
                                "name": "vcms",
                                "type": "uint8"
                            },
                            {
                                "name": "yes",
                                "type": "map(address,uint32)"
                            },
                            {
                                "name": "no",
                                "type": "map(address,uint32)"
                            },
                            {
                                "name": "yesCount",
                                "type": "uint32"
                            },
                            {
                                "name": "noCount",
                                "type": "uint32"
                            },
                            {
                                "name": "data",
                                "type": "cell"
                            },
                            {
                                "name": "actionType",
                                "type": "uint8"
                            },
                            {
                                "name": "completed",
                                "type": "bool"
                            }
                        ],
                        "name": "vote",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "voteKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "voteKeys",
                        "type": "uint256[]"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "soUINT",
                "type": "uint256"
            }
        ],
        "events": []
    },
    tvc: "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",
};
module.exports = { DeAuditRootContract };