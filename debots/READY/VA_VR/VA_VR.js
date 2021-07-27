const VA_VRContract = {
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
                "name": "invokeValidatorDebot",
                "inputs": [
                    {
                        "name": "curPart",
                        "type": "address"
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
                "name": "fetchDA",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "SCgetDeauditAddresses",
                "inputs": [
                    {
                        "name": "keysDeAudit",
                        "type": "address[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deauditsCaller",
                "inputs": [
                    {
                        "name": "curDeAudit",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetDAstruct",
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
                "name": "preStart",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mainMenu",
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
                "name": "onValidate",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onsetDaD",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetCollatorPhotoLink",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetPhotoLink",
                "inputs": [
                    {
                        "name": "collatorPhotoLink",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onGetAdditionalPhotos",
                "inputs": [
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "goToValMenubyCurActiv",
                "inputs": [
                    {
                        "name": "additionalPhotoLinkArr",
                        "type": "bytes[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "act4Validmenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "showACT4dt",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteForValidator",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteAgainstValidator",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "DAmenu",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showVotingAuditss",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValStake",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValStakeCall",
                "inputs": [],
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
    tvc: "te6ccgEC3wEAIQAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gvcBwTeAQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkjBgEU0x8B2zz4R27yfAgBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAgDPCCCEDa7gom74wIgghBy5gTku+MCIIIQfezQ27vjAmcTCQRQIIIQc868OLrjAiCCEHeSZOS64wIgghB8+rXIuuMCIIIQfezQ27rjAhEODQoDdjD4SG7jANHbPCSOJibQ0wH6QDAxyM+HIM5xzwthXiFVMMjPk/ezQ27LB8zMzs3JcPsAkl8E4uMAf/hn2gvDBPZwiIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4S26zlvhLIG7yf46A4jP4TG6zlvhMIG7yf46A4jL4TW6zlvhNIG7yf44kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE4jH4SjTe3gwMAQKI3gMcMPhIbuMA0ds82zx/+Gfa1sMDLDD4SG7jANMf9ARZbwIB0ds82zx/+GfaD8MEhiD4fHCI2zxwiNs8bfhai7kmFJRc4KNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/PkbT8AeLNyXD7AFvV2BDYAERGZXRjaGluZyBhZGRpdGlvbmFsIHBob3RvIGxpbmtzLi4uAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z9oSwwEUIPhz+En4cds8MMUEUCCCEEaYMha74wIgghBYZC0Ku+MCIIIQaLVfP7vjAiCCEHLmBOS74wJRNiEUBFAgghBuDmNRuuMCIIIQbnOb/brjAiCCEHCTieW64wIgghBy5gTkuuMCHBgWFQFSMNHbPPhXIY4cjQRwAAAAAAAAAAAAAAAAPLmBOSDIzvQAyXD7AN5/+GfaAyAw+Ehu4wDTH9HbPNs8f/hn2hfDAFz4U/hRyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkP/3uhrOzclw+wAwAzAw+Ehu4wDXDX+V1NHQ03/f0ds82zx/+GfaGcMEInBvAMiJ2zz4Wts8i0IC0gCoG7CQGgOo2zzbPNs8bfhTi7kmG13BRKNMGQsBdMjOznHPCwX4UPhayM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5Ci8cwKWcjOy3/Nzclw+wBbsK/YAEQgLSBZb3UgYXJlIGdvaW5nIHRvIHZvdGUgYWdhaW5zdDogAyAw+Ehu4wDTH9HbPNs8f/hn2h3DBHz4WfhXgQEL9AqKiuIgbxJTIG8RgCD0DvKy+HpwbwDIjQYLSBUb3VjaGVkIEFjdDQgYWRkcmVzczogg2zz4WoOCsB4EGNs8i0IC0gCo2zzbPJCwrx8Dfts8cIjbPG34Wou5JiJLjWIjTBkLAXTIzs5xzwsFyM+BIm7y4EDPgfgjzws/gQEjzwsfz5A5mw+Kzclw+wBfBNgg2AA+RmV0Y2hpbmcgY29sbGF0b3IgcGhvdG8gbGluay4uLgRQIIIQW7zSzLrjAiCCEFxzixO64wIgghBdd4w5uuMCIIIQaLVfP7rjAi8sKiICKjD4SG7jAPhG8nNx+GbR+ADbPH/4ZyPDAhrtRNAg10nCAY6AjoDiKCQBuvQFcPhqbfhrbfhsbfhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4b3D4cCUC/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhxjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HKNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4c4j4dG34dXBtbwL4dm3eJgLG+HdwbW8C+HiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4eY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPh6iPh7cG1vAvh8cG1vAvh93icB7o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPh+cPh/iIAg+GBwgCH4YHABgED0DvK91wv/+GJw+GNw+GZ/+GiCECPDRgD4cI0IYAdZSqDu998Gk7IWgY4UGNv6ucqXnQAX2tnUmEe5sWES5Phy3gH+0//TP9MA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B+kDU0dD6QNN/1NHQ+kDU0dD6QNTR0PpA1PQE0x/0BFlvAgHU0dD0BNMf9ARZbwIB+kDU0dD6QNTTH/QEWW8CAdMf9ARZbwIB1NHQ+kDTf9TTf9GAISkAdvhggCD4YPh/+H74ffh8+Hv4evh5+Hj4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiAx4w+Ehu4wDU0ds82zx/+GfaK8MAMPhC+EUgbpIwcN668uBk+AD4SnGx+Gr4awMsMPhIbuMA0x/0BFlvAgHR2zzbPH/4Z9otwwEcIPh2cJVTAW8QuY6A6FsuAR5TAW8RgCD0DvKy2zyktQd3AyAw+Ehu4wDTH9HbPNs8f/hn2jDDBJIg+FZvEYAg9A7ysiD4fvhVgQEL9AuOgI6A4iBvEYAg+GAgbxn4f/gjUwFvFSNvFqC8IJ4wUwFvFSNvFqAjbxegud6OgI6A4l8DiIczMQMOcIjbPHDbPDLYOgB6WW91IG5lZWQgdG8gY2hvb3NlIGRlQXVkaXQgdGhhdCBpcyBiZXR3ZWVuIGNvbCBhbmQgdmFsIHBlcmlvZASIghBDkHg5bwDIjQZPT09PVZhbGlkYXRpb24gc3Rha2UgaXM6IINs8+F9wcHDbPI0ESBmb3IgMSB2YWxpZD09PT0Kg2zywq7A0AhzbPHBwgiAJGE5yoADbPK81ALyNCGcNDpo4TPFOCxJkRIMM7XkD3vDHSW+pEFKl5jbCwYT2dCRUcSNUd4PIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxZVQMjPkFnQL07LH8zLB8t/y3/NyXD7AF8GBFAgghBLG9tVuuMCIIIQUNI+8brjAiCCEFD7hGe64wIgghBYZC0KuuMCUE85NwOEMPhIbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYZC0KjPFgFvIgLLH/QAyXD7AJEw4uMAf/hn2jjDAGhwbW8CcW2C8IeWU2Nm7iGFLbVtzLYLxWRZi2GMhl/FDIsat0C7oSjjyMv/cFiAIPRDbwIxAyAw+Ehu4wDTH9HbPNs8f/hn2jrDBDZwbW8CcJYg+FZvELmOgOgwIIiIghAO7feCbwM+Pd47BCzbPAFvIiGkA1mAIPRDbwIxiIgi2zxb0jzezQAUQ2hvb3NlIERBOgAsQmFjayB0byB2YWxpZGF0b3IgbWVudQRAIPhWbxGAIPQO8rIg+FWBAQv0C46AjoDiiPgjUwJvFbmIh94/BEKOgI6A4m8AyI0ED09PT09PT0KREFuYW1lOiCDbPCRvEdBNRbBABE7bPIuwp0aW1lU3RhcnQ6jbPCRvFXBwcNs8i8CmNvbFBlcmlvZDogiwsKtBBEDbPCRvFnBwcNs8i8CnZhbFBlcmlvZDogjbPCRvF3BwcLCrsEIERts8i7CnZhbFN0YWtlOiCNs8JG8ZcHBw2zyLgKc3RhdHVzOoq7CrQwQY2zwj0Ns8iyCgqNs8sLCwRANE2zxTYIiCEFu80sxvA9s8AW8iIaQDWYAg9ENvAjdfBaS1B6/e0gIuUwJvFbwgmjBTAm8VJG8WoLnejoCOgOJLRgI+UwJvFSRvFqC8IJ4wUwJvFSRvFqAkbxegud6OgI6A4klHAQSIMkgACmVuZGVkAQSIMkoANGJldHdlZW4gY29sIGFuZCB2YWwgcGVyaW9kAQSIMkwAOGJldHdlZW4gc3RhcnQgYW5kIGNvbCBwZXJpb2QBBIgyTgAWbm90IHN0YXJ0ZWQDHDD4SG7jANHbPNs8f/hn2p3DAxww+Ehu4wDR2zzbPH/4Z9rHwwRQIIIQPdxc1LrjAiCCEEOQeDm64wIgghBElxrEuuMCIIIQRpgyFrrjAmBaV1IDJDD4SG7jANMf0x/R2zzbPH/4Z9pTwwRUcG8AyIunNka0Vycm9yOiCNs8JHBwcNs8i6CmV4aXRDT2RlOo2zwjcHBwsKuwVAQO2zzbPNs8cauv2FUCCIjbPFtW2AAeQmFjayB0byBtZW51Li4uAx4w+Ehu4wDU0ds82zx/+GfaWMMEhiD4e3CI2zxwiNs8bfhai7kmO8kyciNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/PkKVDjCbNyXD7AFvV2FnYAC5GZXRjaGluZyB2b3RlIG1hdHJpeC4uLgMwMPhIbuMA1w1/ldTR0NN/39HbPNs8f/hn2lvDBFIggCH4YHBvAMiJ2zyAIPhA0Ns8jQTPj4+LCBpdCpzIGFkZHJlc3M6IIF+wsFwEWNs8+F7bPI0HCwgc3Rha2UgZm9yIDEgdmFsaWRhdGlvbiBpcyCDbPPhfcHBwsJCwXQRg2zyNBgsIHlvdSBhcmUgZ29pbmcgdG8gc2VuZCCDbPIAh+EBwcHDbPItj09PT09Coq7CrXgQS2zzbPNs82zwwsK/YjABMPT09PT1Zb3UgYXJlIGdvaW5nIHRvIHRha2UgcGFydCBpbiA8PDwDIDD4SG7jANMf0ds82zx/+GfaYcMEViD4WG8RgCD0DvKyIPh5+FeBAQv0CoqK4iBvEnBtbwJwlVMCbxC5joDoMCCDgmViBDSIiIIQDu33gm8D2zwBbyIhpANZgCD0Q28CMaPe0mMDDoiIIts8XwRk3s0AOENob29zZSBBY3Q0IG9yIGJhY2sgdG8gbWVudToEXFMCbxGAIPQO8rJvAMiNBEgLSBBQ1Q0IGFkZHJlc3M6IINs8Its8i0IC0gCo2zywkLBmA0LbPFMwiIIQbg5jUW8D2zwBbyIhpANZgCD0Q28CNFuktQev3tIEUCCCEA9th+m74wIgghAbfhn/u+MCIIIQJ/ph5rvjAiCCEDa7gom74wKxinVoBFAgghApKLnBuuMCIIIQKYdMBrrjAiCCEDBBEhu64wIgghA2u4KJuuMCc3BvaQMgMPhIbuMA0wfR2zzbPH/4Z9pqwwISIMABjoCOgOIwbWsDDHCI2zzbPGzYxQAgRXJyb3IsIHRyeSBhZ2FpbgMMcIjbPNs8btjFAFRTdWNjZXNzLCB5b3VyIG1lc3NhZ2Ugc2VuZGVkIHRvIGJsb2NrY2hhaW4DHDD4SG7jANHbPNs8f/hn2tfDAyww+Ehu4wDTH/QEWW8CAdHbPNs8f/hn2nHDAR4g+HhwliD4WG8QuY6A6FtyASAg+FhvEYAg9A7ysts8pLUHmAMsMPhIbuMA0x/0BFlvAgHR2zzbPH/4Z9p0wwMUcIjbPCD4fds8MNXYnQRQIIIQHzq9fbrjAiCCECFOUAy64wIgghAnMcFwuuMCIIIQJ/ph5rrjAoR/eHYDLjD4SG7jAPpBldTR0PpA39HbPNs8f/hn2nfDAG5tIYu5Jg+dXr6jTBkLAXTIzs5xzwsFyM+BIm7y4EDPgfgjzws/gQEjzwsfz5DMuCaWzclw+wBbAyAw+Ehu4wDTH9HbPNs8f/hn2nnDBDZwbW8CcJYg+FhvELmOgOgwIIiIghAO7feCbwN8o956BCzbPAFvIiGkA1mAIPRDbwIxiIgi2zxb0nvezQA+Q2hvb3NlIERlQXVkaXQgb3IgYmFjayB0byBtZW51OgRMIPhYbxGAIPQO8rIg+FWBAQv0C46AjoDibwDIizIC0gjbPCJvEdCIh7B9BBzbPItCAtIAqNs82zxTQLCwr34CPIiCED3cXNRvA9s8AW8iIaQDWYAg9ENvAjVfA6S1B97SA1gw+Ehu4wDSANMH0x/0BFlvAgH6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z9qAwwNOIPhXgQEL9AqKiuIlb1Akb1Ejb1Iib1Mh+Fci2zxZgQEL9EH4d18Gg4KBACRvJF4gyMoAywcBbyICyx/0AM4AWHBfIG1vAo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG8EACLSANMH0x/0BFlvAgH6QNFvBAO8MPhIbuMA0x/U+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//f1w1/ldTR0NN/39cNf5XU0dDTf9/R2zzbPH/4Z9qFwwN8+En4VYEBC/QLjoCOgOIqb1Apb1Eob1Inb1Mmb1Qlb1Ukb1Yjb1cib1ghb1n4SfhVIts8yVmBAQv0E/h1XwuIh4YASG8sXqDIyx/MzlWAyM5VcMjOy/9VUMjL/8v/y3/Lf8t/zM3NzQLocIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwX1CIbwze3gEG0Ns8iQCu0x/U+kD6QZXU0dD6QN/6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/U0W8MBFAgghASjfruuuMCIIIQF2WOwrrjAiCCEBt6on264wIgghAbfhn/uuMCmZeNiwMcMPhIbuMA0ds82zx/+GfajMMAoG34U4u5JhtdwUSjTBkLAXTIzs5xzwsFgCH4QPheyM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5F0aYtqWcjOy3/Nzclw+wAwAzAw+Ehu4wDXDX+V1NHQ03/f0ds82zx/+GfajsMEZnBvAMiNB4gLSBZb3UgYXJlIGdvaW5nIHRvIHZvdGUgZm9yOiCDbPPha2zyLQgLSAKjbPLCQsI8CpNs82zxt+FOLuSYbXcFEo0wZCwF0yM7Occ8LBfhQ+FrIz4OBAgDPQFNEbpMwz4GVAc+Dy//i+CPPCz+BASPPCx/PkTyWHfpZyM7Lf83NyXD7AFuv2ANqINs8XyQj2zwBNjQjzzUgwgiXJIA6zwsHNZ5fJW+MNsg1JIA6zwsHNeJfJSOAQH9/cNs8bGKWkZIBHF8ytgtwcH8mwQDbPGwykgJ6Jc81qwIgml8nb4w4MMg2gH/fI5KAMJKAIOIilyeALc8LBzjeIaUyIZpfKG+MOcg4gH8y3yaAENs8IG+IJ66TAbaOVVNwuSCUMCfCf9/y0EVTcKFTBLuOGiCWU6PPCwc75FNAoTUkml8rb4w8yDuAfzXfjiIkllOjzwsHO+RfK2+MPMg7UwShllOjzwsHO+SAfyGhJaA14jDeUwO7lAFUjiggjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDklQDAjlkjjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDkXypvjDvIOlMDoY4kIW+NATMgwQqZKoAwIqDPCwc7n1OmkoBXkoA34iKgzwsHO+Iw5OJfKmyyACog+kIgbxDDAvJ1IG8SIW8T1wv/bCIDLjD4SG7jAPpBldTR0PpA39HbPNs8f/hn2pjDAHRt+FOLuSYQpygGI0wZCwF0yM7Occ8LBSLIz4EjbvLgQM+B+CPPCz+BASPPCx/PkHfElmbOzclw+wBbAyAw+Ehu4wDTH9HbPNs8f/hn2prDBFhwbwDIjQXIC0gUGhvdG8gbGluayBvZiBBY3Q0OiCDbPPhb0Ns8izIAogjbPLCwsJsEMNs82zxwliD4XG8QuY6A6DBwliD4XW8Qua/YqZwCDo6A6DDbPDCnnQRAcG1vAiCIiIIQEo367m8D2zwBbyIhpANZgCD0Q28CMSCm3tKeBDaIiIIQG3qifW8D2zwBbyIhpANZgCD0Q28CMSCl3tKfBDaIiIIQbnOb/W8D2zwBbyIhpANZgCD0Q28CMSCk3tKgBDSIiIIQDu33gm8D2zwBbyIhpANZgCD0Q28CMaPe0qEDDIiIIts8MKLezQAiQWN0NCB2b3RpbmcgbWVudToAGEJhY2sgdG8gbWVudQAYVm90ZSBhZ2FpbnN0ABBWb3RlIGZvcgAiRGlzcGxheSBBY3Q0IGRhdGEEdiD4XW8RgCD0D/KycG8AyI0GyAtIEFkZGl0aW9uYWwgcGhvdG8gbGlua3M6IINs8I9DbPItCAtIAqNs8sLCwqAIQ2zzbPDCktQev2ASaIPhcbxGAIPQO8rLXC/9wbwDIjQVIC0gQ2FuZGlkYXRlIGluZGV4IDogg2zwkcHBw2zyNBIgQW1vdW50IG9mIHZvdGVzOiCDbPCNwcHCwq7CqBCTbPItCAtIAqNs82zzbPDCktQersK/YAngkzzWrAiCaXyZvjDcwyDWAf98ikoAwkoAg4iKXJoAtzwsHN94hpTIhml8nb4w4yDeAfzLfJXrbPCBviCaurAHejlVTYLkglDAmwn/f8tBCU2ChUwS7jhogllOTzwsHOuRTQKE1JJpfKm+MO8g6gH81344iJJZTk88LBzrkXypvjDvIOlMEoZZTk88LBzrkgH8hoSWgNeIw3lMDu44SIJ8hb40BMymAMCKgzwsHOjDkrQBoji0jnyFvjQEzKYAwIqDPCwc6MORfKW+MOsg5UwOhnyFvjQEzKYAwIqDPCwc6MOTiXylsogBCbwCOGiKVIHBvjDHhcJMjwwCaXakMATUxXG+MMugw2GwhAC6WIW+IwACzmiFvjQEzUwHNMTHoIMlsIQBsIc81pvkh10sgliNwItcxNN5TErsglFNFzjaOFV8k1xg2UwbON18nb4w4MMg2U0XONuJfJmxyBEAgwAHjAiCBDeu64wIgghAO7feCuuMCIIIQD22H6brjAsK2tLIDHjD4SG7jANTR2zzbPH/4Z9qzwwAk+EUgbpIwcN74Qrry4GT4APh0AyAw+Ehu4wDTH9HbPNs8f/hn2rXDAQbbPDDFA5Aw+Ehu4wDR2zwqjjMs0NMB+kAwMcjPhyDOcc8LYV6BVZDIz5AAADeuzMzMVWDIzMzOzFUgyMzMzM3Nzclw+wCSXwri4wB/+Gfat8MEBoiIiN7e3rgEToiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiN7e3rkEBoiIiN7e3roEDIg6iDmIOMHAv7sEbog3iDaNCGAEIJRHadquzm19QDQD+BUFcGC01S9v9EU8TTJBIUurVKQ1iDSIM/hLIG7yfzIw+FS+v728AARlbgByVGhhdCdzIGRlYm90IGZvciBWb3RpbmcgQXVkaXQuIERldmVsb3BlZCBieSBSYWRpYW5jZSBUZWFtAEREZUJvdCBmb3IgRGVBdWRpdCBieSBSYWRpYW5jZSBUZWFtABpSYWRpYW5jZSBUZWFtAAowLjEuMABOUmFkaWFuY2UgVm90aW5nIEF1ZGl0IERlQm90IC0gVmFsaWRhdG9yAxww+Ehu4wDR2zzbPH/4Z9rFwwH+gCH4QIAg+ED4X/he+F34XPhb+Fr4WfhY+Ff4VvhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ywDLBwEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzgHPg88R4s6AE3FjyM7Lf4ARccQAmGPIzlXwyM5V4MjOzPQAAW8iAssf9ABVoMj0AAFvIgLLH/QAzlVwyM7MAW8iAssf9AABbyICyx/0AFUwyM7Lf8zLf83Nzc3Nzc3J7VQEDHCI2zzbPNnY18YEENs8cIjbPNs81tXYxwQKiIh1bYjU3tPIBCSIghAO7feCbwPbPHBYgCD0Q4je0tHJBCSIghBQ+4RnbwPbPHFYgCD0Q4je0tDKBCSIghAnMcFwbwPbPHJYgCD0Q4je0s/LBCSIghBwk4nlbwPbPHNYgCD0Q4je0s7MAyCIcG8D2zx0WIAg9ENvAts83tLNAK6NCGcNYNJp9nURlyS8HvpRHUDBHm5RkC7ixmkGJtks4SsC2kRUcSMjyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAANMCjHMDPFszMAW8iAssf9ADJcPsAXwQACFF1aXQALlJldHVybiB0byBwcmV2aW91cyBtZW51ABBWYWxpZGF0ZQAoUmVnaXN0ZXIgb24gRGUgQXVkaXQAEG8jAsjMzMsfABhSZWZyZXNoIGRhdGEAHFZhbGlkYXRvciBtZW51AA5TdWNjZXNzAHBt+FOLuSYUw6YDI0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+Qtz+hes3JcPsAMABwbfhSi7kmLjnFiaNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/Pkb3EcNrNyXD7ADAAno0IZww8spsbN3EMKW2rbmWwXisizFsMZDL+KGRY1boF3QlHHFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAAZzJOFAzxbLH8zJcPsAXwMAIEZldGNoaW5nIGRhdGEuLi4B/u1E0NP/0z/TANMH9AQBIG6T0NdM3wH0BAEgbpPQ10zfAfQEASBulND6QDDfAfpA1NHQ+kDTf9TR0PpA1NHQ+kDU0dD6QNT0BNMf9ARZbwIB1NHQ9ATTH/QEWW8CAfpA1NHQ+kDU0x/0BFlvAgHTH/QEWW8CAdTR0PpA03/U03/bAHzRgCH4YIAg+GD4f/h++H34fPh7+Hr4efh4+Hf4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4an/4aPhm+GP4YgIK9KQg9KHe3QAUc29sIDAuNDUuMAAA",
    code: "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",
    codeHash: "9814bacba775ca7d5cc381e2b8e0d01e6f3d0f34974f7dc80d7a86b148d019a6",
};
module.exports = { VA_VRContract };