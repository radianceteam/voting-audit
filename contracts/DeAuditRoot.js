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
                        "name": "nameDeAudit",
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
                "name": "actionTeamKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "actionTeamKeys",
                        "type": "address[]"
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
                                "name": "name",
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
                        "name": "paramDeAudit",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "keysDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "keysDeAuditData",
                        "type": "address[]"
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