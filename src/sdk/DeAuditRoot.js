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
                        "name": "settingLimitVFC",
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
                        "name": "settingLimitVFC",
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
                "name": "limitVFC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "limitVFC",
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
    tvc: "te6ccgECuwEAKIAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gu5BwS6AQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkZBgEU0x8B2zz4R27yfAgCgCLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHACCfMCHXDR/yvCHAACCSbCHe3+MCAds8+Edu8nyzCARQIIIQIAG29rvjAiCCEDj1x3O74wIgghBk7kMMu+MCIIIQfJmUVrvjAoNkKQkEUCCCEG45zz674wIgghBxaVe/u+MCIIIQe8lzNLvjAiCCEHyZlFa64wIhFQwKAx4w+Ehu4wDU0ds82zx/+Ge3C7QAJPhFIG6SMHDe+EK68uBm+AD4bgRQIIIQdrpuf7rjAiCCEHniH1q64wIgghB7V4v2uuMCIIIQe8lzNLrjAhIQDg0BVjDR2zz4WSGOHo0EcAAAAAAAAAAAAAAAAD7yXM0gyM4hAfQAyXD7AN5/+Ge3AvAw0x/4RFhvdfhk0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPtXi/aM8WIc8Lf8lw+wCOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx8hzwt/yfhEbxT7AOIw4wB/+GcPtAAk+ERwb3Jwb3GAQG90+GT4J28QAnQw0ds8IcD/jioj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPniH1qM8WIc8L/8lw+wDeMOMAf/hnEbQABPgjAzAw+Ehu4wDXDf+V1NHQ0//f0ds82zx/+Ge3E7QEkvhJ+FGBAQv0CiCRMd7y4GnbPIIQHc1lALmzIJ8wIIAj+ECBAQD0DiCRMd7e8uBt+CdvENs8obV/cvsC+EkhgCP4QIEBAPQPjoC2tpgUA/qOgOIgbxpwuiCOHzBcbxSBAQv0CiCRMd6zIJ4wXG8VgQEL9AogkTHes97e8uBuIG8WpLUfb1ZfIG8UIwEjbxbIyx9ZgQEL9EFvVDGAI/hAIwEi2zzJWYEBAPQXgCP4YCH4UVyBAQv0CpPXC/+RcOKkyMv/WYEBC/RB+HEhyJeWlQRQIIIQb0Q/47rjAiCCEG9xHDa64wIgghBwln1fuuMCIIIQcWlXv7rjAh8eGBYDMDD4SG7jANcNf5XU0dDTf9/R2zzbPH/4Z7cXtAAs+EUgbpIwcN74Qrry4Gb4ACCAIvhgMAKwMPhIbuMA+Ebyc3H4ZtMH1w3/ldTR0NP/39H4RSBukjBw3vhCuvLgZvgAIcAAIJswIcABIJQwIcAC39/y4Gwg8uBsIYAh+GBw+Htw+H4ggCL4YFvbPH/4Zxm0AhrtRNAg10nCAY6AjoDiHBoENPQFcSGAQPQOk9cL/5Fw4vhqiPhriPhsiPhturq6GwPoiPhuiPhviPhwbfhxcG1vAvhycPhzbfh0bfh1bfh2bfh3cG1vAvh4bfh5cG1vAvh6cPh7bfh8cG1vAvh9cPh+cPh/cIAg+GBwgCH4YHCAIvhgbYAj+GBwbW8CgCT4YHABgED0DvK91wv/+GJw+GNw+GZ/+Gi6uroB/tP/0z/TANP/1NTU1NHQ1NTU1NHQ9ATTH/QEWW8CAdMf9ATU0dD0BPQE9ATU0dDTH/QEWW8CAfQE0x/0BFlvAgHT/9TR0PQE0x/0BFlvAgHTH9N/0//TB9P/9ATU0dDTH/QEWW8CAdGAJPhggCP4YIAi+GCAIfhggCD4YPh/+H4dAGL4ffh8+Hv4evh5+Hj4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiAV4w0ds8+F0hjiKNBHAAAAAAAAAAAAAAAAA73EcNoMjOIW8iAssf9ADJcPsA3n/4Z7cD2jD4SG7jANcN/5XU0dDT/9/R2zwswP+OTS7Q0wH6QDAxyM+HIM5xzwthyM+TvRD/ji3PFizPC//ILM8L/yvPCwcqAfQAKQH0ACjPCx8nzwsfJs8UJc8LByTPCgAjzwv/zc3JcPsA3l8M4wB/+Ge3ILQD2o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfIG1tcHCIcF8gLIAj+ECBAQD0D46AjoDiIG8QPSBvETwgbxI7IG8TOiBvFDkgbxU4IG8WNyBvFzYgbxg1IG8ZNG8aMjArbBy6mJcEUCCCEGXNjVa64wIgghBmG+NmuuMCIIIQZyZOzrrjAiCCEG45zz664wIoJiUiAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z7cjtASe+En4UYEBC/QKIJEx3vLgads8ghAdzWUAubMgnjAg+FGBAQv0CiCRMd6z3vLgavgnbxDbPKG1f3L7AvhJgCT4QG8QpCCAI/hAgQEA9A+OgLa2mCQD/o6A4iJvUPgjb1EggCD4QG9SMSCAIfhAb1MxI8jOIMkiAW9YMiFwb1kyIXBvWjKAI/hAIwEj2zzJWYEBAPQXgCP4YIAk+EAjyMv/AW8iIaQDWYAg9ENvAoAk+GAj+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxI8jPhYjOgG+Xlo0BXjDR2zz4WCGOIo0EcAAAAAAAAAAAAAAAADnJk7OgyM4hbyICyx/0AMlw+wDef/hntwMwMPhIbuMA1w3/ldTR0NP/39HbPNs8f/hntye0ACz4RSBukjBw3vhCuvLgZvgAIIAg+GAwApww1w3/ldTR0NP/39cN/5XU0dDT/9/R2zwhwP+OKiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA5c2NVozxYhzwoAyXD7AN4w4wB/+GdWtARQIIIQRFgEkbvjAiCCEEy5GeG74wIgghBYWe+3u+MCIIIQZO5DDLvjAl5XMCoEUCCCEGG5usS64wIgghBi6HlyuuMCIIIQZAMOz7rjAiCCEGTuQwy64wIuLSwrAVQw0ds8+E4hjh2NBHAAAAAAAAAAAAAAAAA5O5DDIMjOIc8UyXD7AN5/+Ge3AVYw0ds8+FMhjh6NBHAAAAAAAAAAAAAAAAA5AMOz4MjOIc8LH8lw+wDef/hntwFUMNHbPPhPIY4djQRwAAAAAAAAAAAAAAAAOLoeXKDIziHPFMlw+wDef/hntwJMMPpBldTR0PpA39cNf5XU0dDTf9/XDACV1NHQ0gDf0ds84wB/+GcvtABU+EUgbpIwcN74Qrry4Gb4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8DBFAgghBPWwbYuuMCIIIQUHW9XbrjAiCCEFgXX3264wIgghBYWe+3uuMCODY0MQMcMPhIbuMA0ds82zx/+Ge3MrQB/vhFIG6SMHDe+EK68uBm+AD4RSBukjBw3iBwcIIQO5rKAI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG0lyMv/cFiAQPRD+ChxWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByV8g+QDIz4oAQMv/ydBUdAXIz4WAygAzAPxzz0DOAfoCi9AAAAAAAAAAAAAAAAAHzxYizxTPkNFqvn/JJ/sAMTIl+FYjWYEBAPQW+HYh+FcnyMv/WYEBC/RB+Hch+FhvIiGkA1mAIPQWbwL4eDBsQSD4UXHIy/9ZgQEL9EH4cSD4Um8iIaQDWYAg9BZvAvhyW/hTpLUf+HMDkDD4SG7jAPpBldTR0PpA39HbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYF199jPFiHPCgDJcPsA3jDjAH/4Z7c1tAAecCH4UYEBC/QKIJEx3jExAxww+Ehu4wDR2zzbPH/4Z7c3tAAq+EUgbpIwcN74Qrry4Gb4AHKAIfhgAzAw+Ehu4wDXDf+V1NHQ0//f0ds82zx/+Ge3ObQElvhJ+FGBAQv0CiCRMd7y4GnbPIIQstBeALV/ubMgnzAggCP4QIEBAPQOIJEx3t7y4Gv4J28Q2zyhtX9y+wL4SSGAI/hAgQEA9A+OgLa2mDoDWI6A4iBvGnC68uBsIG8RIW8S2zx/uo6AjhAhyM+FiM6Ab89AyYEAgPsA4l8Dl1Y7A2Qh+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxIG8WIW8X+FMjbxPbPCB/uo6AjoDiMJs9PAFSIX9vWjKAI/hAJAEj2zzJWYEBAPQXgCP4YCLIz4WIzoBvz0DJgQCA+wCWAhQhbxnAAI6AjoDiVT4CFCFvGcABjoCOgOJTPwE0IW8ZwAKOgI4QIsjPhYjOgG/PQMmBAID7AOJAA/ohbxjQIPpAMiD4WYEBC/QLjoCOgOIgbxEhbxJdbxMkbxQlbxUmbxYrbxONCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4XqS1HyDIbW8CyKemQQQ2i/RGVtb2NyYWN5VG9rZW4gjbPNs8InBwcNs8UlFNQgQg2zzbPMhtbwLIizRFQgjbPFFMUkMEFNs8I3BwcNs82zxRTVFEAvzbPFx5bfhCyMv/cFiAQPRDcMjL/3FYgED0QyNyWIBA9Bcic1iAQPQXIcjLB3RYgED0Q/hQdViAQPQXyPQAyfhPyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBsYTEybfhCyMv/cFiAQPRDIcjLH3FYgED0QytyWIBA9Bf4KHNYgEBMRQH89BYpdFiAQPQWInVYgED0FirIy/92WIBA9EMoyMv/d1iAQPRDJ8jL/3hYgED0QybIy395WIBA9EMlyMt/eliAQPRDJMjLB4ALWIBA9EPI9ADJ+EzIz4SA9AD0AM+ByV8g+QDIz4oAQMv/ydCCEDuaygAhcMjPhYDKAHPPQM4BRgTc+gKL0AAAAAAAAAAAAAAAAAfPFiLPFM+Q0Wq+f8lw+wAxNFMxghA7msoAjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEyG1vAsiL9EZW1vY3JhY3lUb2tlbiCNs82zwkcHBw2zxSUU1HBCDbPNs8yG1vAsiLNEVCCNs8UUxSSAQU2zwlcHBw2zzbPFFNUUkC/ts8XHlt+ELIy/9wWIBA9ENwyMv/cViAQPRDI3JYgED0FyJzWIBA9BchyMsHdFiAQPRD+FB1WIBA9BfI9ADJ+E/Iz4SA9AD0AM+ByV8g+QDIz4oAQMv/ydBTkHDIz4WAygBzz0DOAfoCi9AAAAAAAAAAAAAAAAAHzxYizxTPg8hMSgH+z5AHVPR2gQEAz0AtzxbNyXD7ADE3XwZsMTNbbIIh+FwqyMv/WYEBC/RB+Hwh+F1vIiGkA1mAIPQWbwL4ffhepLUf+H7Iz5Abtk0KIs8WyCnPFs3JJMjPhYjOjQSQdzWUAAAAAAAAAAAAAAAAAADAzxYhzxTJcPsAJ39vWjiAI0sBSPhAKgEp2zzJWYEBAPQXgCP4YCjIz4WIzoBvz0DJgQCA+wBfBpYARCCVIm8RbrOOFVMibxAizW9QMzAhbxAibxEgbvJ/M+jJbCECdCTPNasCyMhwI5kwfygzITmAfzTfJZKAMJKAIOIllymALc8LBzreJKU1JJl/Mik0IjqAfzXfKHrbPClQTgHkjlNTkbkglDApwn/f8tBCU5GhUwe7jhkgllPDzwsHPeRTcKE4J5l/NSw3JT2AfzjfjiEnllPDzwsHPeR/NSw3JT1TB6GWU8PPCwc95IB/IaEooDjiMN5TFruOFyGOEyuAMCJvEKDPCwc8IG8RIG7yfzHkTwCMjjYmjhMrgDAibxCgzwsHPCBvESBu8n8x5H80KzYkPFMWoY4TK4AwIm8QoM8LBzwgbxEgbvJ/MeTiI7OSKzaSKzXiXzVswwB2cHBtbwKOMSBvUSOXcXAibwJsIuGTI8MAjhUhpDJwbW8CXySpDAE2IgFvUDIBb1HoIG8RIG7yfzHYbCIANshtbwLIjhEilF8lbCLhU0VvAlMEbCNYMNhsQgBeIc81pvkh10sgliNwItcxNN7IUyO7IJRTVs43nF8l1xg3J843U1HOMuImXyKzbHMC/iFvGNAg+kAyXyD4UYEBC/RZMDH4cSD4UnBtbwIhbxFwbZ1TEoAg9A5voTAgMm6zjhhTBccFn1MDbyIhpANZgCD0Fm8CNN8hpDLoXwP4clv4U6W1H/hzI39vWjSAI/hAJgEl2zzJWYEBAPQXgCP4YCTIz4WIzoBvz0DJgQCA+wCWVAACWwGyIW8Y0CD6QDIg+FFxyMv/WYEBC/RB+HEg+FJvIiGkA1mAIPQWbwL4cvhTpLUf+HMjf29aNIAj+EAmASXbPMlZgQEA9BeAI/hgJMjPhYjOgG/PQMmBAID7AFuWABD4I18ioL5sIQRQIIIQRhKGFLrjAiCCEEh7lg+64wIgghBKypjLuuMCIIIQTLkZ4brjAl1bWVgBVjDR2zz4XyGOHo0EcAAAAAAAAAAAAAAAADMuRnhgyM4hzwt/yXD7AN5/+Ge3AzAw+Ehu4wDXDX+V1NHQ03/f0ds82zx/+Ge3WrQAJPhFIG6SMHDe+EK68uBm+AD4fwMeMPhIbuMA1NHbPNs8f/hnt1y0ACT4RSBukjBw3vhCuvLgZvgA+GsBWjDR2zyAIfhAIY4ejQRwAAAAAAAAAAAAAAAAMYShhSDIziHPCwfJcPsA3n/4Z7cEUCCCEDmhi9664wIgghA80Xk5uuMCIIIQQFu1QbrjAiCCEERYBJG64wJjYmBfAVYw0ds8+Fshjh6NBHAAAAAAAAAAAAAAAAAxFgEkYMjOIc8L/8lw+wDef/hntwO6MPhIbuMA+kGV1NHQ+kDf0ds8KMD/jj4q0NMB+kAwMcjPhyDOcc8LYcjPkwFu1QYpzxYozxQnzwv/yCfPC/8mzwv/Jc8L/8glzwv/JM8Wzc3NyXD7AN5fCOMAf/hnt2G0A/CNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIcF9AjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEKPhZgQEL9AuOgI6A4iBvEDkgbxE4IG8SNyBvEzYgbxQ1IG8VNG8WMjAnbBi6p6YBVDDR2zz4UCGOHY0EcAAAAAAAAAAAAAAAAC80Xk5gyM4hzxTJcPsA3n/4Z7cBVjDR2zz4VSGOHo0EcAAAAAAAAAAAAAAAAC5oYvegyM4hAfQAyXD7AN5/+Ge3BFAgghAkWwjvu+MCIIIQKI41NLvjAiCCEC/rYwW74wIgghA49cdzu+MCfXRsZQRQIIIQL/vxxbrjAiCCEDKiT7K64wIgghAzNqVSuuMCIIIQOPXHc7rjAmloZ2YBWjDR2zyAIvhAIY4ejQRwAAAAAAAAAAAAAAAALj1x3ODIziHPC//JcPsA3n/4Z7cBVjDR2zz4SiGOHo0EcAAAAAAAAAAAAAAAACzNqVSgyM4hzwv/yXD7AN5/+Ge3AVQw0ds8+Ewhjh2NBHAAAAAAAAAAAAAAAAAsqJPsoMjOIc8UyXD7AN5/+Ge3A0Aw+Ehu4wD6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z7dqtALk+En4UYEBC/QKIJEx3vLgaSH4XIEBC/QKIJEx3iCOgN7y4G74J28Q2zyhtX9y+wL4ScjPkA7TltoizxbIIs8Wzckh+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxI8jPhYjOcc8LbiHPFMmBAID7AF8Ea7YBFjDbPIIQWWgvALmztgRQIIIQKeqfhbrjAiCCECpWQiC64wIgghAsHs8HuuMCIIIQL+tjBbrjAnFwb20DHDD4SG7jANHbPNs8f/hnt260ACr4RSBukjBw3vhCuvLgZvgAcIAh+GABXjDR2zz4UiGOIo0EcAAAAAAAAAAAAAAAACsHs8HgyM4hbyICyx/0AMlw+wDef/hntwFUMNHbPPhLIY4djQRwAAAAAAAAAAAAAAAAKpWQiCDIziHPFMlw+wDef/hntwMuMPhIbuMA+kGV1NHQ+kDf0ds82zx/+Ge3crQEnPhJ+FGBAQv0CiCRMd7y4GnbPIIQHc1lALmzIJ0wIPhZgQEL9AogkTHe3vLgavgnbxDbPKG1f3L7AvhJgCT4QG8QpCCAI/hAgQEA9A+OgLa2mHMD/o6A4iJvUPgjb1EggCD4QG9SMSCAIfhAb1MxI8jOIMkiAW9YMiFyb1kyIXBvWjKAI/hAIwEj2zzJWYEBAPQXgCP4YIAk+EAjyMv/AW8iIaQDWYAg9ENvAoAk+GAj+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxI8jPhYjOgG+Xlo0EUCCCECXDlha64wIgghAnJY71uuMCIIIQJ/4tmrrjAiCCECiONTS64wJ8e3Z1AVYw0ds8+FYhjh6NBHAAAAAAAAAAAAAAAAAqI41NIMjOIQH0AMlw+wDef/hntwOGMPhIbuMA1w3/ldTR0NP/39HbPCLA/44kJNDTAfpAMDHIz4cgznHPC2HIz5Kf+LZqI88WIs8KAM3JcPsA3lvbPH/4Z7d3tAH+jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcPgAMHCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyIvhVgQEA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4VHgB/oEBC/QKk9cLf5Fw4iP4VoEBAPQOIJEx3rMgmjAgghA7msoAubPe8uBo+F+htX8jcHAjjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbSXIy/9wWIBA9EP4KHFYgED0Fsj0AMn4S8jPhID0APQAz4HJXyD5AMh5AdLPigBAy//J0FR0BcjPhYDKAHPPQM4B+gKL0AAAAAAAAAAAAAAAAAfPFiLPFM+Q0Wq+f8kn+wAxMiX4ViNZgQEA9Bb4diH4VyfIy/9ZgQEL9EH4dyH4WG8iIaQDWYAg9BZvAvh4MGxBMyJ6ANCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBY48+FQk+FWBAQD0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3wGBAQv0WTD4dH8y3zBsEgFaMNHbPIAg+EAhjh6NBHAAAAAAAAAAAAAAAAApyWO9YMjOIc8L/8lw+wDef/hntwFWMNHbPPhUIY4ejQRwAAAAAAAAAAAAAAAAKXDlhaDIziEB9ADJcPsA3n/4Z7cEUCCCECBjD/O64wIgghAg6dJNuuMCIIIQIaioPrrjAiCCECRbCO+64wKCgYB+A/ww+Ehu4wDTH/hEWG91+GTXDf+V1NHQ0//f0ds8IcD/jiAj0NMB+kAwMcjPhyDOcc8LYcjPkpFsI74izxbNyXD7AI40+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpyPhEbxXPCx8izxbNyfhEbxT7AOIw4wB/+Ge3f7QAgPhEcG9ycG9xgEBvdPhkIG0hyMv/cFiAQPRD+ChxWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByfkAyM+KAEDL/8nQMTEBXjDR2zz4WiGOIo0EcAAAAAAAAAAAAAAAAChqKg+gyM4hbyICyx/0AMlw+wDef/hntwFaMNHbPIAj+EAhjh6NBHAAAAAAAAAAAAAAAAAoOnSTYMjOIQH0AMlw+wDef/hntwFiMNHbPIAk+EAhjiKNBHAAAAAAAAAAAAAAAAAoGMP84MjOIW8iAssf9ADJcPsA3n/4Z7cEUCCCEAti9kO74wIgghAVTZUhu+MCIIIQG5wjYrvjAiCCECABtva74wKtnI6EBFAgghAerJlDuuMCIIIQH1Fs57rjAiCCEB+7kfK64wIgghAgAbb2uuMCioiGhQFWMNHbPPheIY4ejQRwAAAAAAAAAAAAAAAAKABtvaDIziHPCx/JcPsA3n/4Z7cDHjD4SG7jANTR2zzbPH/4Z7eHtAAk+EUgbpIwcN74Qrry4Gb4APhtAx4w+Ehu4wDU0ds82zx/+Ge3ibQAJPhFIG6SMHDe+EK68uBm+AD4cAMuMPhIbuMA+kGV1NHQ+kDf0ds82zx/+Ge3i7QEnPhJ+FGBAQv0CiCRMd7y4GnbPIIQHc1lALmzIJ0wIPhRgQEL9AogkTHe3vLgavgnbxDbPKG1f3L7AvhJgCT4QG8QpCCAI/hAgQEA9A+OgLa2mIwD/o6A4iJvUPgjb1EggCD4QG9SMSCAIfhAb1MxI8jOIMkiAW9YMiFxb1kyIXBvWjKAI/hAIwEj2zzJWYEBAPQXgCP4YIAk+EAjyMv/AW8iIaQDWYAg9ENvAoAk+GAj+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxI8jPhYjOgG+Xlo0AFM9AyYEAgPsAXwUEUCCCEBnbrZ+64wIgghAazsRquuMCIIIQGs8B8brjAiCCEBucI2K64wKakpGPAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z7eQtABC+EUgbpIwcN7y4GX4ACD4VfhFIG6SMHDeAYEBAPQW+HUwAVYw0ds8+Fchjh6NBHAAAAAAAAAAAAAAAAAms8B8YMjOIQH0AMlw+wDef/hntwMwMPhIbuMA1w3/ldTR0NP/39HbPNs8f/hnt5O0BJL4SfhRgQEL9AogkTHe8uBp2zyCEB3NZQC5syCfMCCAI/hAgQEA9A4gkTHe3vLgbfgnbxDbPKG1f3L7AvhJIYAj+ECBAQD0D46AtraYlAP6joDiIG8acLogjh8wXG8UgQEL9AogkTHesyCeMFxvFYEBC/QKIJEx3rPe3vLgbiBvF6S1H29XXyBvFSMBI28XyMsfWYEBC/RBb1UxgCP4QCMBIts8yVmBAQD0F4Aj+GAh+FFcgQEL9AqT1wv/kXDipMjL/1mBAQv0QfhxIciXlpUAIM+FiM6Ab89AyYEAgPsAXwMAYm8ryCvPFirPC//IKs8L/ynPCwcoAfQAJwH0ACbPCx8lzwsfJM8UI88LByLPCgDNbLEBYI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfIG1tcHCIcHBvC7oBBtDbPJkAyPpA0//XDf+V1NHQ0//f1w0HldTR0NMH3/QGldTR0PQE3/QGldTR0PQE39cNH5XU0dDTH9/XDR+V1NHQ0x/fINdLwAEBwACwk9TR0N7U1w0HldTR0NMH39cMAJXU0dDSAN/RbwsChDDTH9Mf0x/TB9HbPCHA/44qI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACZ262fjPFiHPCgDJcPsA3jDjAH/4Z5u0ALBwIcAAlF8kvDGOSiHAAY4gU0KotR+nCrUfUzOotR8leCaotR+mFLUfqLUfoLUfvjGOIiHAAo4cU0KotR+nA7UfUzOotR9fJaYGtR+otR+gtR++Md7i4mxBBFAgghAMHciyuuMCIIIQDeVV4rrjAiCCEBLq7ea64wIgghAVTZUhuuMCq6mfnQMeMPhIbuMA1NHbPNs8f/hnt560ACT4RSBukjBw3vhCuvLgZvgA+GwDgjD4SG7jANTXDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f1w1/ldTR0NN/39HbPNs8f/hnt6C0A/74SfhRgQEL9AogkTHe8uBp2zyCEDuaygC58tBq+CdvENs8obV/cvsC+EmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARt+ELIy/9wWIBA9EP4W6TIy/9xWIBA9EP4KHJYgED0FiJzWIBA9BYodFiAQPQX+E51trahAchYgED0F8j0AMn4TcjPhID0APQAz4HJXyD5AMjPigBAy//J0IIQO5rKACFwyM+FgMoAc89AzgH6AovQAAAAAAAAAAAAAAAAB88WIs8Uz4PIz5DyR4cWgCL4QM8L/83JcPsAMTIhogF8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWzjoCOECLIz4WIzoBvz0DJgQCA+wDiXwmjBP4h+FmBAQv0C46AjoDiI29QKW9RKG9SJ29TJm9UJW9VJG9WIvhZIts8yVmBAQv0E/h5IvhabyIhpANZgCD0Fm8C+Hr4W6T4eyP4UVyBAQv0CpPXC/+RcOKkyMv/WYEBC/RB+HHIz5BrsyvCI88WySTIz4WIznHPC24hzxTJgQCAp6alpAAG+wBbAEJvJ8gnzxYmzxQlzwv/yCXPC/8kzwv/I88LfyLPC3/NbHEBVI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhwX0BvB7oBBtDbPKgAYPpA1NP/1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f1w1/ldTR0NN/39FvBwMcMPhIbuMA0ds82zx/+Ge3qrQAKvhFIG6SMHDe+EK68uBm+ABxgCH4YAOGMPhIbuMA1w3/ldTR0NP/39HbPCLA/44kJNDTAfpAMDHIz4cgznHPC2HIz5IwdyLKI88KACLPFs3JcPsA3lvjAH/4Z7estADIcI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCL4VoEBAPQOIJEx3jIi+FaBAQD0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3zFsEgROIIIIX2bMuuMCIIIQBicuybrjAiCCEAnBWPa64wIgghALYvZDuuMCsrGvrgFUMNHbPPhNIY4djQRwAAAAAAAAAAAAAAAAIti9kODIziHPFMlw+wDef/hntwMeMPhIbuMA1NHbPNs8f/hnt7C0ACT4RSBukjBw3vhCuvLgZvgA+G8BVjDR2zz4XCGOHo0EcAAAAAAAAAAAAAAAACGJy7JgyM4hAfQAyXD7AN5/+Ge3AVYw0ds8+FEhjh6NBHAAAAAAAAAAAAAAAAAgF9mzIMjOIQH0AMlw+wDef/hntwNU+Ehu4wDbPPhJ+FRcgQEL9AqT1wt/kXDiVQKgtX/Iy39ZgQEL9EH4dNs8t7a0Afz4RvhD+ELIy//LP8sA+ErPC//4S88U+EzPFPhNzxT4TsjM+E/PFPhQzxT4Ucj0APhSbyICyx/0APhTzwsf+FQB9AD4Vcj0APhWAfQA+FcB9ADI+FhvIgLLH/QA+FkB9AD4Wm8iAssf9AD4W88L//hcyPQA+F1vIgLLH/QA+F61AHLPCx/4X88Lf4Ag+EDPC/+AIfhAzwsHgCL4QM8L/4Aj+EAB9ADIgCT4QG8iAssf9ADNzc3Nzc3J7VQAGHBopvtglWim/mAx3wH87UTQ0//TP9MA0//U1NTU0dDU1NTU0dD0BNMf9ARZbwIB0x/0BNTR0PQE9AT0BNTR0NMf9ARZbwIB9ATTH/QEWW8CAdP/1NHQ9ATTH/QEWW8CAdMf03/T/9MH0//0BNTR0NMf9ARZbwIB0YAk+GCAI/hggCL4YIAh+GCAIPhguABq+H/4fvh9+Hz4e/h6+Hn4ePh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GIBCvSkIPShugAA"
};
module.exports = { DeAuditRootContract };