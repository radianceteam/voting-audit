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
                    },
                    {
                        "name": "settingLinksMaxLength",
                        "type": "uint256"
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
                "name": "setMaxQtyAct4Links",
                "inputs": [
                    {
                        "name": "settingLinksMaxLength",
                        "type": "uint128"
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
                "name": "getDeAuditParam4Debot",
                "inputs": [
                    {
                        "name": "keysDeAuditDataCurrent",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator4Debot",
                        "type": "address"
                    },
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "timeStart4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "colPeriod4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "valPeriod4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "colStake4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "valStake4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "curDADkeyD",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getVote4Debot",
                "inputs": [
                    {
                        "name": "voteKey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "initiator4Debot",
                        "type": "address"
                    },
                    {
                        "name": "startTime4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "duration4Debot",
                        "type": "uint256"
                    },
                    {
                        "name": "vcms4Debot",
                        "type": "uint8"
                    },
                    {
                        "name": "yes4Debot",
                        "type": "map(address,uint32)"
                    },
                    {
                        "name": "no4Debot",
                        "type": "map(address,uint32)"
                    },
                    {
                        "name": "yesCount4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "noCount4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "data4Debot",
                        "type": "cell"
                    },
                    {
                        "name": "actionType4Debot",
                        "type": "uint8"
                    },
                    {
                        "name": "completed4Debot",
                        "type": "bool"
                    },
                    {
                        "name": "voteKeyD",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "checkPubKey",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "participant",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "isActionTeamMember",
                "inputs": [
                    {
                        "name": "addressParticipant",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "bool"
                    }
                ]
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
                "name": "maxQtyAct4Links",
                "inputs": [],
                "outputs": [
                    {
                        "name": "maxQtyAct4Links",
                        "type": "uint256"
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