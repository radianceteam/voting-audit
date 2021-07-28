const VA_CLContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "setIcon",
                "inputs": [
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "preStart",
                "inputs": [
                    {
                        "name": "partic",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "pstart",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "start",
                "id": "0x1",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "fetchActivities",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCfetchActivities",
                "inputs": [
                    {
                        "name": "activeDeAudits",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchCurAvtivity",
                "inputs": [
                    {
                        "name": "curDeAuditforActivD",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchCurAvtivity",
                "inputs": [
                    {
                        "name": "reg",
                        "type": "bool"
                    },
                    {
                        "name": "atype",
                        "type": "uint8"
                    },
                    {
                        "name": "act4Arr",
                        "type": "address[]"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "curDAactiv",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchWalletInfo",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchWalletInfo",
                "inputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchCD",
                "inputs": [
                    {
                        "name": "deAuditAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchCD",
                "inputs": [
                    {
                        "name": "candidateKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCDdata",
                "inputs": [
                    {
                        "name": "curDAD",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetCDdata",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "fetchDA",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCfetchDA",
                "inputs": [
                    {
                        "name": "keysDeAudit",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDADdata",
                "inputs": [
                    {
                        "name": "curDAD",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetDADdata",
                "inputs": [
                    {
                        "name": "sequentialNumber4Debot",
                        "type": "uint32"
                    },
                    {
                        "name": "name4Debot",
                        "type": "bytes"
                    },
                    {
                        "name": "rootDeAudit4Debot",
                        "type": "address"
                    },
                    {
                        "name": "dataDeAudit4Debot",
                        "type": "address"
                    },
                    {
                        "name": "tokenDeAudit4Debot",
                        "type": "address"
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
                        "type": "uint128"
                    },
                    {
                        "name": "valStake4Debot",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "fetchVC",
                "inputs": [
                    {
                        "name": "DADaddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCfetchVC",
                "inputs": [
                    {
                        "name": "votingCenterKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getVCdata",
                "inputs": [
                    {
                        "name": "curVC",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetVCstruct",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "displayColInfo",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "CLmenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onAddCollation",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTouchedDA",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetVC",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setTouchedVC",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetLink2",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onSetLink",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setLink",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onSetVoteMatrix",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setTouchedCD",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "saveCandidateVotes",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandOnchainCheck",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "checkAns",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandOnchain",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "goToCore",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCcall",
                "inputs": [
                    {
                        "name": "status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "someError",
                "inputs": [
                    {
                        "name": "sdkError",
                        "type": "uint32"
                    },
                    {
                        "name": "exitCode",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDebotInfo",
                "id": "0xDEB",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "version",
                        "type": "bytes"
                    },
                    {
                        "name": "publisher",
                        "type": "bytes"
                    },
                    {
                        "name": "caption",
                        "type": "bytes"
                    },
                    {
                        "name": "author",
                        "type": "bytes"
                    },
                    {
                        "name": "support",
                        "type": "address"
                    },
                    {
                        "name": "hello",
                        "type": "bytes"
                    },
                    {
                        "name": "language",
                        "type": "bytes"
                    },
                    {
                        "name": "dabi",
                        "type": "bytes"
                    },
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "getRequiredInterfaces",
                "inputs": [],
                "outputs": [
                    {
                        "name": "interfaces",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "getDebotOptions",
                "inputs": [],
                "outputs": [
                    {
                        "name": "options",
                        "type": "uint8"
                    },
                    {
                        "name": "debotAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "setABI",
                "inputs": [
                    {
                        "name": "dabi",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "candidateD",
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
                            },
                            {
                                "name": "curVotes",
                                "type": "uint256"
                            }
                        ],
                        "name": "candidateD",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "candidateKeysD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "candidateKeysD",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "paramDeAuditD",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "sequentialNumber",
                                "type": "uint32"
                            },
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "rootDeAudit",
                                "type": "address"
                            },
                            {
                                "name": "dataDeAudit",
                                "type": "address"
                            },
                            {
                                "name": "tokenDeAudit",
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
                            },
                            {
                                "name": "status",
                                "type": "bytes"
                            }
                        ],
                        "name": "paramDeAuditD",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "keysDeAuditDataD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "keysDeAuditDataD",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "votingCenterD",
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
                            }
                        ],
                        "name": "votingCenterD",
                        "type": "map(uint256,tuple)"
                    }
                ]
            },
            {
                "name": "votingCenterKeysD",
                "inputs": [],
                "outputs": [
                    {
                        "name": "votingCenterKeysD",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "activitiesD",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "reg",
                                "type": "bool"
                            },
                            {
                                "name": "atype",
                                "type": "uint8"
                            },
                            {
                                "name": "act4Arr",
                                "type": "address[]"
                            },
                            {
                                "name": "wallet",
                                "type": "address"
                            },
                            {
                                "name": "walletBalance",
                                "type": "uint128"
                            }
                        ],
                        "name": "activitiesD",
                        "type": "map(address,tuple)"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgEC/QEAJbIAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gv6BwT8AQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkcBgEU0x8B2zz4R27yfAgBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAgEUCCCECJVFiO74wIgghBKwjYau+MCIIIQceuxMrvjAiCCEH3s0Nu74wKcSBAJBFAgghB2Yu69uuMCIIIQeR92ZrrjAiCCEHz6tci64wIgghB97NDbuuMCDw4NCgN2MPhIbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+Gf4C+UE9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNPz8DAwBAoj8Axww+Ehu4wDR2zzbPH/4Z/j25QFSMNHbPPhYIY4cjQRwAAAAAAAAAAAAAAAAPkfdmaDIzvQAyXD7AN5/+Gf4AVIw0ds8+FQhjhyNBHAAAAAAAAAAAAAAAAA9mLuvYMjO9ADJcPsA3n/4Z/gEUCCCEFI6xym74wIgghBdd4w5u+MCIIIQZ4Mra7vjAiCCEHHrsTK74wI7MiIRBFAgghBotV8/uuMCIIIQa282D7rjAiCCEHCTieW64wIgghBx67EyuuMCGxgWEgMwMPhIbuMA1w1/ldTR0NN/39HbPNs8f/hn+BPlBIgggCD4QPhSgQEA9A6KiuIhb1L4UoAg+EABIts8WYEBAPRD+HKCECTe0fxvAMiNBRTZWxlY3RlZCBjYW5kaWRhdGU6IIJuaGhQENNs8gCH4QNDbPIuQogVm90ZXM6II2zwlcHBwtLS0FQQa2zyLEKjbPNs82zxfA7C0qKcDIDD4SG7jANMf0ds82zx/+Gf4F+UAXPhQ+E7Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+Q//e6Gs7NyXD7ADADRjD4SG7jANTXDf+V1NHQ0//f1w3/ldTR0NP/39HbPNs8f/hn+BnlA0Ig+FKBAQD0DoqK4iNvUCJvUSH4UiLbPFmBAQD0Q/hyXwSbmhoAEm8jAsjMy//L/wIqMPhIbuMA+Ebyc3H4ZtH4ANs8f/hnHOUCGu1E0CDXScIBjoCOgOIgHQH89AVw+Gpt+Gtt+Gxt+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhvjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHgP++HCI+HFt+HJwbW8C+HNt+HRwbW8C+HVt+HZwbW8C+Hdt+HhwbW8C+HmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4enD4e3D4fI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPh9cPh+iPz8HwGg+H9wgCD4YIiAIfhgcG1vAoAi+GBwAYBA9A7yvdcL//hicPhjcPhmf/hojQhgBJ2/9spUp4rHWDBJi6ouNJJJeKhgZSgih8zgKGxeTY5M+G/8AfzT/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0PpA1NHQ+kDU9ATTH/QEWW8CAdTR0PQE0x/0BFlvAgH0BNTR0NMf9ARZbwIB9ATTH/QEWW8CAfpA0//U0dDTf/pA0//U1NHQ0//U0x/0BFkhAIpvAgHRgCL4YIAh+GCAIPhg+H/4fvh9+Hz4e/h6+Hn4ePh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GIEUCCCEF66I/+64wIgghBiyd0tuuMCIIIQZpHXnLrjAiCCEGeDK2u64wIpKCYjAyww+Ehu4wDTH/QEWW8CAdHbPNs8f/hn+CTlAR4g+HVwliD4VW8QuY6A6FslASQg+FVvEYAg9A7ysiDbPDCktQcnAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z/gn5QBubSGLuSYkFrUDI0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+QzLgmls3JcPsAWwMcMPhIbuMA0ds82zx/+Gf4Q+UDIDD4SG7jANMf0ds82zx/+Gf4KuUERiD4VW8RgCD0DvKyIPh6+FSBAQv0C46AjoDiIG8a+QCI+QC9fXx7KwIMjoCOgOJbMCwEkiBvEPh7IG8YIW8T+H0gghBfXhAAoLV/+Hz4Xds8+F3bPIIKcixIbwDIjQXU2VsZWN0ZWQgRGVBdWRpdCBuYW1lOiCDbPCRvEdBWvbQtBGjbPI0ESBTZXF1ZW50aWFsIOKEljogg2zz4W3BwcNs8jQSIENvbGxhdGlvbiBzdGFrZToggtLSwLgQu2zz4XHBwcNs8i6IG5hbm9UT05zCo2zy0sLQvAgrbPNs8MKinAw5wiNs8cds8MadqAFRFcnJvciB0YWtlIGZyb20gY29sbGF0aW9uIHBlcmlvZCBhdmFpbGFibGUEUCCCEFhkLQq64wIgghBYlVKWuuMCIIIQXPtOTbrjAiCCEF13jDm64wI5NjUzAx4w+Ehu4wDU0ds82zx/+Gf4NOUAMPhC+EUgbpIwcN668uBk+AD4SnGx+Gr4awFeMNHbPPhVIY4ijQRwAAAAAAAAAAAAAAAANz7Tk2DIzgFvIgLLH/QAyXD7AN5/+Gf4AyAw+Ehu4wDTH9HbPNs8f/hn+DflBI4g+FdvEYAg9A7ystcL/yD4fvhWgQEA9A+OgI6A4oIQJN7R/G8AyI0GFNlbGVjdGVkIFZvdGluZyBDZW50ZXI6IINs8I28Q0MLBtDgEGNs8ixCo2zzbPNs8W7S0qKcDhDD4SG7jANHbPCGOLiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA2GQtCozxYBbyICyx/0AMlw+wCRMOLjAH/4Z/g65QBocG1vAnFtgvCHllNjZu4hhS21bcy2C8VkWYthjIZfxQyLGrdAu6Eo48jL/3BYgCD0Q28CMQRQIIIQTCGGSLrjAiCCEE242ue64wIgghBQuUTbuuMCIIIQUjrHKbrjAkQ/PjwDHjD4SG7jANTR2zzbPH/4Z/g95QEMIPh/2zwwWAFSMNHbPPhSIY4cjQRwAAAAAAAAAAAAAAAANC5RNuDIzvQAyXD7AN5/+Gf4AyAw+Ehu4wDSANHbPNs8f/hn+EDlAg4gjoCOgOIwQkEBBNs86AEE2zxDAMRt+FCLuSYbXcFEo0wZCwF0yM7Occ8LBfhcgCL4QPhf+F74WsjPg4ECAM9AU3dukzDPgZUBz4PL/+L4I88LP4EBI88LH8+RkQSpElVAyM7L/8wBbyICyx/0AMt/zc3JcPsAMAMgMPhIbuMA0x/R2zzbPH/4Z/hF5QSSIPhTbxGAIPQO8rLXC/+AIPhggCD4QPhSgQEA9A6KiuIgbxCAIfhgghBx67EybwDIjQQQ2FuZGlkYXRlIG5hbWU6IINs8I28Q0JuatEYEKts8ixCo2zzbPHBwghjo1KUQANs8W7S0qEcAvI0IZw0OmjhM8U4LEmREgwzteQPe8MdJb6kQUqXmNsLBhPZ0JFRxI1R3g8jPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlVAyM+QWdAvTssfzMsHy3/Lf83JcPsAXwYEUCCCEC4UpqS74wIgghA2aFWau+MCIIIQPUti2bvjAiCCEErCNhq74wKBZlRJBFAgghBCilEkuuMCIIIQRpgyFrrjAiCCEEgtaga64wIgghBKwjYauuMCUk1LSgMwMPhIbuMA1w3/ldTR0NP/39HbPNs8f/hn+IXlA7ww+Ehu4wDTH9T6QZXU0dD6QN/6QZXU0dD6QN/6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f1w1/ldTR0NN/39HbPNs8f/hn+EzlA3z4SfhUgQEL9AuOgI6A4ipvUClvUShvUidvUyZvVCVvVSRvViNvVyJvWCFvWfhJ+FQi2zzJWYEBC/QT+HRfC318egMkMPhIbuMA0x/TH9HbPNs8f/hn+E7lBFRwbwDIi6c2RrRXJyb3I6II2zwkcHBw2zyLoKZXhpdENPZGU6jbPCNwcHC0sLRPBA7bPNs82zxwsKinUAMMiNs82zxbUafoAB5CYWNrIHRvIG1lbnUuLi4DIDD4SG7jANMf0ds82zx/+Gf4U+UDDts82zzbPDD39ugEUCCCEDa7gom64wIgghA4gVtiuuMCIIIQObJ0r7rjAiCCED1LYtm64wJgXldVAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z/hW5QBubSGLuSYRKosRo0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+Q12gKss3JcPsAWwMcMPhIbuMA0ds82zx/+Gf4WOUENnBtbwJwliD4V28QuY6A6DAgiIiCEEKKUSRvA1uU/FkELNs8AW8iIaQDWYAg9ENvAjGIiCLbPDDzWvzuACpDaG9vc2UgVm90aW5nIGNlbnRlcjoEZiD4V28RgCD0DvKy1wv/IPhWgQEA9A+OgI6A4m8AyCJvENDbPIvSwgIExvY2F0aW9uOiCMLBtFwEGts8Im8R0Ns8ixCo2zy0tLRdA0TbPFNAiIIQWJVSlm8D2zwBbyIhpANZgCD0Q28CNV8DpLUHqPzzAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z/hf5QB0bSGLuSYDSJj1I0wZCwF0yM7Occ8LBXDIz4EjbvLgQM+B+CPPCz+BASPPCx/PkSWlYf7LH83JcPsAWwMgMPhIbuMA0wfR2zzbPH/4Z/hh5QISIMABjoCOgOIwZGIDDHCI2zzbPGOn5wAgRXJyb3IsIHRyeSBhZ2FpbgMMcIjbPNs8ZafnAFRTdWNjZXNzLCB5b3VyIG1lc3NhZ2Ugc2VuZGVkIHRvIGJsb2NrY2hhaW4EUCCCEC+bTTe64wIgghAwQRIbuuMCIIIQMsedpLrjAiCCEDZoVZq64wKAf2lnAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z/ho5QMcIPhw+En4bts82zzbPDD39ugDIDD4SG7jANMf0ds82zx/+Gf4auUENnBtbwJwliD4VW8QuY6A6DAgiIiCEEKKUSRvA22U/GsELNs8AW8iIaQDWYAg9ENvAjGIiCLbPFvzbPzuAB5DaG9vc2UgRGVBdWRpdDoEYiD4VW8RgCD0DvKyIPhUgQEL9AuOgI6A4oj4IyJvFb4gnzD4IyJvFiNvFaAjbxegu959fPxuAhSOgI6A4l8DpLUHdG8ERogxXG9aMiL4VCPbPMlZgQEL9BP4dG8AyIsyAtII2zwjbxHQc3q0cAQW2zyJ2zwjbxBwcHC0crRxBILbPI0EywgQ29sbGF0aW9uIHN0YWtlOiCDbPCNvGHBwcNs8jQcIG5hbm9UT05zLCBEZUF1ZGl0IGFkZHJlc3M6IILC0sHcATCAtClN0YXR1czogQWxsIG90aGVyLCBTZXF1ZW50aWFsIOKEljogABJBbGwgb3RoZXIERogxXG9aMiL4VCPbPMlZgQEL9BP4dG8AyIsyAtII2zwjbxHQe3q0dQQW2zyJ2zwjbxBwcHC0ebR2BIDbPI0EiBDb2xsYXRpb24gc3Rha2U6IINs8I28YcHBw2zyNBwgbmFub1RPTnMsIERlQXVkaXQgYWRkcmVzczoggsLSwdwQU2zwk2zyLEKjbPLSptHgDPNs8U1CIghBeuiP/bwPbPAFvIiGkA1mAIPRDbwI2MKj88wBaIC0KU3RhdHVzOiBDb2xsYXRpb24gcGVyaW9kLCBTZXF1ZW50aWFsIOKEljogAERvK16QyMsfzM5VcMjOVWDIzsv/VUDIy//L/8t/y3/Mzc3NABJDb2xsYXRpb24C6HCIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcF9AiG8L/PwBBtDbPH4AmtMf1PpA+kGV1NHQ+kDf+kGV1NHQ+kDf1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//f1w1/ldTR0NN/39cNf5XU0dDTf9/U0W8LAxww+Ehu4wDR2zzbPH/4Z/j35QFeMNHbPPhTIY4ijQRwAAAAAAAAAAAAAAAAK+bTTeDIzgFvIgLLH/QAyXD7AN5/+Gf4BFAgghAk3tH8uuMCIIIQKYdMBrrjAiCCEC3Wa6m64wIgghAuFKakuuMCjouGggMsMPhIbuMA0x/0BFlvAgHR2zzbPH/4Z/iD5QEeIPh3cJYg+FdvELmOgOhbhAEqIPhXbxGAIPQO8rLXC/8g2zwwpLUHhQB2bfhdi7kmCA/qhCNMGQsBdMjOznHPCwUiyM+BI27y4EDPgfgjzws/gQEjzwsfz5HeGAEyy//NyXD7AFsDIDD4SG7jANMf0ds82zx/+Gf4h+UDLHCWIPhTbxC5joDoMIIQTbja54jbPDCKiYgAno0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACGkhnlAzxbLH8zJcPsAXwMAOEFyZSB5b3Ugc3VyZSB0byBkZXBsb3kgQWN0ND8CVCD4UoEBAPQOiorigCL4QCFvEsjL/wFvIiGkA1mAIPRDbwKAIvhgMKS1B5uaAyww+Ehu4wDTH/QEWW8CAdHbPNs8f/hn+IzlAR4g+HlwliD4WW8QuY6A6FuNASAg+FlvEYAg9A7ysts8pLUHuwMcMPhIbuMA0ds82zx/+Gf4j+UENnBtbwJwliD4U28QuY6A6DAgiIiCEBsHdLxvA5eW/JAENts8AW8iIaQDWYAg9ENvAjEgiIiCEC3Wa6lvA/OV/JEENts8AW8iIaQDWYAg9ENvAjEgiIiCEEKKUSRvA/OU/JIELNs8AW8iIaQDWYAg9ENvAjGIiCLbPDDzk/zuAFZQbGVhc2UgZW50ZXIgdGhlIHZvdGUgY291bnQgZm9yIGNhbmRpZGF0ZXM6ABhCYWNrIHRvIG1lbnUAFkRlcGxveSBBY3Q0ABBTZXQgbGluawRqIPhTbxGAIPQO8rLXC/8g+FKBAQD0DoqK4m8AyI0EENhbmRpZGF0ZSBuYW1lOiCDbPCJvENCbmrSYBBbbPIsQqNs82zxTQLS0qJkCPIiCEEwhhkhvA9s8AW8iIaQDWYAg9ENvAjVfA6S1B/zzAQqIcHBvA/wAENTT/9P/0W8DBE4gggoK0Nq74wIgghAPTvH2u+MCIIIQF2WOwrvjAiCCECJVFiO74wLVxrmdBFAgghAbB3S8uuMCIIIQIU5QDLrjAiCCECH6RXa64wIgghAiVRYjuuMCt7WhngMsMPhIbuMA0x/0BFlvAgHR2zzbPH/4Z/if5QEeIPhzcJYg+FNvELmOgOhboAEqIPhTbxGAIPQO8rLXC/8g2zwwpLUHyQMgMPhIbuMA0x/R2zzbPH/4Z/ii5QIecJYg+FlvELmOgOgw2zwwo+gEzCD4WW8RgCD0DvKyIPhYgQEL9AuOgI4tcF8gbW8CjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8F4nBvAMiLZhdHlwZTqNs8I28RcHBw2zyLkgd2FsbGV0OiCM+0sKQESts8I28T2zyNBMgZGVtb2NyYWN5IHRva2Vuczogg2zwjbxRwcHC0qbSlBDDbPNs82zwgbxJwlVMBbxC5joDoXwSktQewqKemBEhwbwDIi5QWN0NGFycjogjbPFM0bxGAIPQO8rLbPNs82zyktQe0qainAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DAC6WIW+IwACzmiFvjQEzUwHNMTHoIMlsIQNqINs8XyQj2zwBNjQjzzUgwgiXJIA6zwsHNZ5fJW+MNsg1JIA6zwsHNeJfJSOAQH9/cNs8bGKvqqsBHF8ytgtwcH8mwQDbPGwyqwJ6Jc81qwIgml8nb4w4MMg2gH/fI5KAMJKAIOIilyeALc8LBzjeIaUyIZpfKG+MOcg4gH8y3yaAENs8IG+IJ7OsAbaOVVNwuSCUMCfCf9/y0EVTcKFTBLuOGiCWU6PPCwc75FNAoTUkml8rb4w8yDuAfzXfjiIkllOjzwsHO+RfK2+MPMg7UwShllOjzwsHO+SAfyGhJaA14jDeUwO7rQFUjiggjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDkrgDAjlkjjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDkXypvjDvIOlMDoY4kIW+NATMgwQqZKoAwIqDPCwc7n1OmkoBXkoA34iKgzwsHO+Iw5OJfKmyyACog+kIgbxDDAvJ1IG8SIW8T1wv/bCICeCTPNasCIJpfJm+MNzDINYB/3yKSgDCSgCDiIpcmgC3PCwc33iGlMiGaXydvjDjIN4B/Mt8lets8IG+IJrOxAd6OVVNguSCUMCbCf9/y0EJTYKFTBLuOGiCWU5PPCwc65FNAoTUkml8qb4w7yDqAfzXfjiIkllOTzwsHOuRfKm+MO8g6UwShllOTzwsHOuSAfyGhJaA14jDeUwO7jhIgnyFvjQEzKYAwIqDPCwc6MOSyAGiOLSOfIW+NATMpgDAioM8LBzow5F8pb4w6yDlTA6GfIW+NATMpgDAioM8LBzow5OJfKWyiAEJvAI4aIpUgcG+MMeFwkyPDAJpdqQwBNTFcb4wy6DDYbCEAbCHPNab5IddLIJYjcCLXMTTeUxK7IJRTRc42jhVfJNcYNlMGzjdfJ2+MODDINlNFzjbiXyZscgNYMPhIbuMA0gDTB9Mf9ARZbwIB+kGV1NHQ+kDf+kGV1NHQ+kDf0ds82zx/+Gf4tuUCriD4WIEBC/QLjoCOLXBfIG1vAo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBvBeIlb1Akb1Ejb1Iib1Mh+Fgi2zzJWYEBC/QT+HhfBs/OAxww+Ehu4wDR2zzbPH/4Z/i45QEE2zzSBFAgghAPbYfpuuMCIIIQEB/VCLrjAiCCEBBEylK64wIgghAXZY7CuuMCxL68ugMuMPhIbuMA+kGV1NHQ+kDf0ds82zx/+Gf4u+UAdG34UIu5JhCnKAYjTBkLAXTIzs5xzwsFIsjPgSNu8uBAz4H4I88LP4EBI88LH8+Qd8SWZs7NyXD7AFsDLjD4SG7jAPpBldTR0PpA39HbPNs8f/hn+L3lAG5tIYu5JhcKU1IjTBkLAXTIzs5xzwsFyM+BIm7y4EDPgfgjzws/gQEjzwsfz5A7QneCzclw+wBbA7Qw+Ehu4wDU1NMf9ARZbwIB1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//f1wwAldTR0NIA3yDHAZPU0dDe0x/0BFlvAgHXDf+V1NHQ0//f0ds82zx/+Gf4v+UDZiD4VoEBAPQPjoCOgOIpb1Aob1Enb1Imb1Mlb1Qkb1Uib1ch+FYi2zzJWYEBAPQX+HZfCsLBwABEbyheYMjMzAFvIgLLH/QAy//L/8v/ygAByAFvIgLLH/QAzQIciIhwbW8CcF9AbW8Cbwj8/AEG0Ns8wwBK1NTTH/QEWW8CAdP/0//T/9IAIMcBk9TR0N7TH/QEWW8CAdFvCAMeMPhIbuMA1NHbPNs8f/hn+MXlACT4RSBukjBw3vhCuvLgZPgA+HEETiCCCnIsSLrjAiCCEAaRMeq64wIgghAHjiyyuuMCIIIQD07x9rrjAtHKyMcDHDD4SG7jANHbPNs8f/hn+OjlAzAw+Ehu4wDXDf+V1NHQ0//f0ds82zx/+Gf4yeUAdm34XYu5JjW3mwejTBkLAXTIzs5xzwsFIsjPgSNu8uBAz4H4I88LP4EBI88LH8+Qyb5W+sv/zclw+wBbAzAw+Ehu4wDXDX+V1NHQ03/f0ds82zx/+Gf4y+UBGHCWIPhZbxC5joDoW8wCpiD4WW8RgCD0DvKyIPhYgQEL9AuOgI4tcF8gbW8CjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcG8F4iBvE/hJxwWOgN5bpLUHz80BJCNvVCH4WCLbPMlZgQEL9BP4eM4AKG8lXjDIygDLBwFvIgLLH/QAzst/AQbQ2zzQACbSANMH0x/0BFlvAgH6QNN/0W8FAxww+Ehu4wDR2zzbPH/4Z/jS5QIUghBSOscpiHDbPNTTAKSNCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSMjyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAHKr7l8DPFssfzMoAyXD7AF8EADhTZXQgbGluayB0byB5b3VyIGNvbGxhdGlvbjoKBDwgwAHjAiCBDeu64wIggggh/mu64wIgggoK0Nq64wLk2NfWAVIw0ds8+FYhjhyNBHAAAAAAAAAAAAAAAAAggrQ2oMjO9ADJcPsA3n/4Z/gBXjDR2zz4VyGOIo0EcAAAAAAAAAAAAAAAACAIf5rgyM4BbyICyx/0AMlw+wDef/hn+AOQMPhIbuMA0ds8Ko4zLNDTAfpAMDHIz4cgznHPC2FegVWQyM+QAAA3rszMzFVgyMzMzsxVIMjMzMzNzc3JcPsAkl8K4uMAf/hn+NnlBAaIiIj8/PzaBE6IiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIj8/PzbBAaIiIj8/PzcBAyIOog5iDjj4uHdBG6IN4g2jQhgBCCUR2nars5tfUA0A/gVBXBgtNUvb/RFPE0yQSFLq1SkNYg0iDP4SyBu8n8yMPhR4OHf3gAEZW4AclRoYXQncyBkZWJvdCBmb3IgVm90aW5nIEF1ZGl0LiBEZXZlbG9wZWQgYnkgUmFkaWFuY2UgVGVhbQBERGVCb3QgZm9yIERlQXVkaXQgYnkgUmFkaWFuY2UgVGVhbQAaUmFkaWFuY2UgVGVhbQAKMC4xLjAASlJUIFZvdGluZyBBdWRpdCBTeXN0ZW0gMS4wIFtDb2xsYXRvcl0DHDD4SG7jANHbPNs8f/hn+OflAfyAIvhAgCH4QIAg+ED4X/he+F34XPhb+Fr4WfhY+Ff4VvhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ywDLBwEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzgHPg88R4s6AFHFjyM7mALCAE3FjyM7M9AABbyICyx/0AFXgyPQAAW8iAssf9AD0AFWwyAFvIgLLH/QA9AABbyICyx/0AM7L/1VgyMt/zsv/zFUgyMv/zAFvIgLLH/QAzc3Nzc3Nye1UAwzbPNs82zz39ugECoiIdW2I9fz06QQkiIIQQopRJG8D2zxwWIAg9EOI/PPy6gQkiIIQIfpFdm8D2zxxWIAg9EOI/PPx6wQkiIIQMsedpG8D2zxyWIAg9EOI/PPw7AQkiIIQcJOJ5W8D2zxzWIAg9EOI/PPv7QMgiHBvA9s8dFiAIPRDbwLbPPzz7gCujQhnDWDSafZ1EZckvB76UR1AwR5uUZAu4sZpBibZLOErAtpEVHEjI8jPhYjOjQVOYloAAAAAAAAAAAAAAAAAADTAoxzAzxbMzAFvIgLLH/QAyXD7AF8EAAhRdWl0ACJCYWNrIHRvIG1haW4gbWVudQAaQWRkIGNvbGxhdGlvbgAqRGlzcGxheSBDb2xsYXRvciBpbmZvABBvIwLIzMzLHwAYUmVmcmVzaCBkYXRhADBXZWxjb21lIHRvIENvbGxhdG9yIG1lbnUAcG34UIu5JhTDpgMjTBkLAXTIzs5xzwsFyM+BIm7y4EDPgfgjzws/gQEjzwsfz5C3P6F6zclw+wAwAHBt+E+LuSYzwZW1o0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+RvcRw2s3JcPsAMAH87UTQ0//TP9MA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B+kDU0dD6QNTR0PpA1PQE0x/0BFlvAgHU0dD0BNMf9ARZbwIB9ATU0dDTH/QEWW8CAfQE0x/0BFlvAgH6QNP/1NHQ03/6QNP/1NTR0NP/1NMf+QCQ9ARZbwIB0YAi+GCAIfhggCD4YPh/+H74ffh8+Hv4evh5+Hj4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiAgr0pCD0ofz7ABRzb2wgMC40NS4wAAA=",
    code: "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",
    codeHash: "6334dfc03a858099308f76a489258753f94fb8cf16a426959c01fd87151d6417",
};
module.exports = { VA_CLContract };