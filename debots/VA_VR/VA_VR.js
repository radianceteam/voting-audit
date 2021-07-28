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
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "VoteAgainstValidator",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
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
    tvc: "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",
    code: "te6ccgEC0gEAH2EABCSK7VMg4wMgwP/jAiDA/uMC8gvPBAHRAQACAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkeAwEU0x8B2zz4R27yfAUBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAUDPCCCEEOQeDm74wIgghBzzrw4u+MCIIIQfezQ27vjAlYNBgM8IIIQd5Jk5LrjAiCCEHz6tci64wIgghB97NDbuuMCCwoHA3Yw+Ehu4wDR2zwkjiYm0NMB+kAwMcjPhyDOcc8LYV4hVTDIz5P3s0NuywfMzM7NyXD7AJJfBOLjAH/4Z80ItgT2cIiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Etus5b4SyBu8n+OgOIz+Exus5b4TCBu8n+OgOIy+E1us5b4TSBu8n+OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOIx+Eo00dEJCQECiNEDHDD4SG7jANHbPNs8f/hnzcm2Ayww+Ehu4wDTH/QEWW8CAdHbPNs8f/hnzQy2AxQg+HxwiNs82zwwyMuSBFAgghBQ0j7xu+MCIIIQXHOLE7vjAiCCEGnpJsW74wIgghBzzrw4u+MCSyoZDgRQIIIQbg5jUbrjAiCCEHCTieW64wIgghBy5gTkuuMCIIIQc868OLrjAhQSEQ8DLjD4SG7jAPpBldTR0PpA39HbPNs8f/hnzRC2ARQg+HP4Sfhx2zwwuAFSMNHbPPhXIY4cjQRwAAAAAAAAAAAAAAAAPLmBOSDIzvQAyXD7AN5/+GfNAyAw+Ehu4wDTH9HbPNs8f/hnzRO2AFz4U/hRyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkP/3uhrOzclw+wAwAyAw+Ehu4wDTH9HbPNs8f/hnzRW2BHr4WfhXgQEL9AqKiuIgbxJTIG8RgCD0DvKy+HpwbwDIjQXU2VsZWN0ZWQgQWN0NCBhZGRyZXNzOiCDbPPhag4KjFgQS2zyLEKjbPNs8ZaOiFwN+2zxwiNs8bfhai7kmIkuNYiNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/PkDmbD4rNyXD7AF8EyxjLAD5GZXRjaGluZyBjb2xsYXRvciBwaG90byBsaW5rLi4uBFAgghBdd4w5uuMCIIIQYcunGrrjAiCCEGi1Xz+64wIgghBp6SbFuuMCKCUdGgMgMPhIbuMA0x/R2zzbPH/4Z80btgRacG8AyI0G1lvdSBhcmUgZ29pbmcgdG8gdm90ZSBmb3I6IINs8+FrbPIsQqNs8o2WjHAKk2zzbPG34U4u5JhtdwUSjTBkLAXTIzs5xzwsF+FD4WsjPg4ECAM9AU0RukzDPgZUBz4PL/+L4I88LP4EBI88LH8+RPJYd+lnIzst/zc3JcPsAW6LLAiow+Ehu4wD4RvJzcfhm0fgA2zx/+GcetgIa7UTQINdJwgGOgI6A4iMfAbr0BXD4am34a234bG34bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G9w+HAgAv6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4cY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhyjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HOI+HRt+HVwbW8C+HZt0SECuvh3cG1vAvh4jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HmNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4eoj4e3BtbwL4fNEiAeqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4fXD4foj4f3CAIPhgcAGAQPQO8r3XC//4YnD4Y3D4Zn/4aIIQI8NGAPhwjQhgBJ2/9spUp4rHWDBJi6ouNJJJeKhgZSgih8zgKGxeTY5M+HLRAf7T/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0PpA03/U0dD6QNTR0PpA1NHQ+kDU9ATTH/QEWW8CAdTR0PQE0x/0BFlvAgH6QNTR0PpA1NMf9ARZbwIB1NHQ+kDTf9TTf9GAIPhg+H/4fvh9JABe+Hz4e/h6+Hn4ePh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GIDIDD4SG7jANMf0ds82zx/+GfNJrYEYnBvAMiNB9Zb3UgYXJlIGdvaW5nIHRvIHZvdGUgYWdhaW5zdDogg2zz4Wts8ixCo2zyjZaMnAqTbPNs8bfhTi7kmG13BRKNMGQsBdMjOznHPCwX4UPhayM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5Ci8cwKWcjOy3/Nzclw+wBbossDHjD4SG7jANTR2zzbPH/4Z80ptgAw+EL4RSBukjBw3rry4GT4APhKcbH4avhrBFAgghBQ+4RnuuMCIIIQWGQtCrrjAiCCEFu80sy64wIgghBcc4sTuuMCODYuKwMsMPhIbuMA0x/0BFlvAgHR2zzbPH/4Z80stgEcIPh2cJVTAW8QuY6A6FstAR5TAW8RgCD0DvKy2zyktQd4AyAw+Ehu4wDTH9HbPNs8f/hnzS+2BI4g+FZvEYAg9A7ysiD4ffhVgQEL9AuOgI6A4iBvEfh/IG8Z+H74I1MBbxUjbxagvCCeMFMBbxUjbxagI28XoLnejoCOgOJfA4mIMjADDnCI2zxw2zwxyzkAZllvdSBuZWVkIHRvIGNob29zZSBhdmFpbGFibGUgZm9yIFZhbGlkYXRpb24gRGVBdWRpdARWghBDkHg5bwDIjQVVmFsaWRhdGlvbiBzdGFrZSBpczogg2zz4XnBwcNs8iaOeNTMDINs82zxwcIIgCRhOcqAA2zyjojQAvI0IZw0OmjhM8U4LEmREgwzteQPe8MdJb6kQUqXmNsLBhPZ0JFRxI1R3g8jPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlVAyM+QWdAvTssfzMsHy3/Lf83JcPsAXwYAkCBuYW5vVE9OcyBmb3IgMSB2YWxpZGF0aW9uLCAwLjUgdG9uIHNob3VsZCBiZSBhZGRlZCBhcyByZWdpc3RyYXRpb24gZmVlCgOEMPhIbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYZC0KjPFgFvIgLLH/QAyXD7AJEw4uMAf/hnzTe2AGhwbW8CcW2C8IeWU2Nm7iGFLbVtzLYLxWRZi2GMhl/FDIsat0C7oSjjyMv/cFiAIPRDbwIxAyAw+Ehu4wDTH9HbPNs8f/hnzTm2BDZwbW8CcJYg+FZvELmOgOgwIIiIghAO7feCbwM8mNE6BCzbPAFvIiGkA1mAIPRDbwIxiIgi2zxbxTvRwAAeQ2hvb3NlIERlQXVkaXQ6BEAg+FZvEYAg9A7ysiD4VYEBC/QLjoCOgOKI+CNTAm8VuYmI0T0ESI6AjoDibwDIJG8R0Ns8jQTClZhbGlkYXRpb24gc3Rha2U6IIElBoz4ERNs8JG8ZcHBw2zyNBEgbmFub1RPTnMKU3RhdHVzOoNs8I9CjnqM/BBbbPIsQqNs82zxTYKOjokACPIiCEFu80sxvA9s8AW8iIaQDWYAg9ENvAjdfBaS1B9HFAi5TAm8VvCCaMFMCbxUkbxagud6OgI6A4kdCAj5TAm8VJG8WoLwgnjBTAm8VJG8WoCRvF6C53o6AjoDiRUMBBIgyRAAQRmluaXNoZWQBBIgyRgBOQmV0d2VlbiBjb2xsYXRpb24gYW5kIHZhbGlkYXRpb24gcGVyaW9kAQSIMkgAREJldHdlZW4gc3RhcnQgYW5kIGNvbGxhdGlvbiBwZXJpb2QBBIgySgAWTm90IHN0YXJ0ZWQEUCCCEESXGsS64wIgghBGmDIWuuMCIIIQSxvbVbrjAiCCEFDSPvG64wJTTk1MAxww+Ehu4wDR2zzbPH/4Z82StgMcMPhIbuMA0ds82zx/+GfNurYDJDD4SG7jANMf0x/R2zzbPH/4Z81PtgRUcG8AyIunNka0Vycm9yOiCNs8JHBwcNs8i6CmV4aXRDT2RlOo2zwjcHBwo56jUAQO2zzbPNs8cZ6iy1ECCIjbPFtSywAeQmFjayB0byBtZW51Li4uAx4w+Ehu4wDU0ds82zx/+GfNVLYEhiD4e3CI2zxwiNs8bfhai7kmO8kyciNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/PkKVDjCbNyXD7AFvIy1XLAC5GZXRjaGluZyB2b3RlIG1hdHJpeC4uLgRQIIIQD22H6bvjAiCCEB86vX274wIgghAph0wGu+MCIIIQQ5B4ObvjAqSEc1cEUCCCEDBBEhu64wIgghA2u4KJuuMCIIIQPdxc1LrjAiCCEEOQeDm64wJybF5YAzAw+Ehu4wDXDX+V1NHQ03/f0ds82zx/+GfNWbYElCCAIPhgcG8AyI0H1lvdSBhcmUgZ29pbmcgdG8gdGFrZSBwYXJ0IGluIDyDbPPhf0Ns8jQRPiwgaXRgcyBhZGRyZXNzOiCDbPPhdo6OjWgRU2zyNBwsIHN0YWtlIGZvciAxIHZhbGlkYXRpb24gaXMgg2zz4XnBwcNs8ZaOeWwQwids8gCD4QHBwcNs8i6IG5hbm9UT05zCoXaOeXAQS2zzbPNs82zwwo6LLjABCIG5hbm9UT05zLCB5b3UgYXJlIGdvaW5nIHRvIHNlbmQgAyAw+Ehu4wDTH9HbPNs8f/hnzV+2BFYg+FhvEYAg9A7ysiD4efhXgQEL9AqKiuIgbxJwbW8CcJVTAm8QuY6A6DAgg4JjYAQ0iIiCEA7t94JvA9s8AW8iIaQDWYAg9ENvAjGY0cVhAw6IiCLbPF8EYtHAADhDaG9vc2UgQWN0NCBvciBiYWNrIHRvIG1lbnU6BE5TAm8RgCD0DvKybwDIi+QUNUNCBhZGRyZXNzOiCNs8Its8ixCo2zyjZaNkA0LbPFMwiIIQbg5jUW8D2zwBbyIhpANZgCD0Q28CNFuktQei0cUDaiDbPF8kI9s8ATY0I881IMIIlySAOs8LBzWeXyVvjDbINSSAOs8LBzXiXyUjgEB/f3DbPGxia2ZnARxfMrYLcHB/JsEA2zxsMmcCeiXPNasCIJpfJ2+MODDINoB/3yOSgDCSgCDiIpcngC3PCwc43iGlMiGaXyhvjDnIOIB/Mt8mgBDbPCBviCehaAG2jlVTcLkglDAnwn/f8tBFU3ChUwS7jhogllOjzwsHO+RTQKE1JJpfK2+MPMg7gH81344iJJZTo88LBzvkXytvjDzIO1MEoZZTo88LBzvkgH8hoSWgNeIw3lMDu2kBVI4oII4kIW+NATMgwQqZKoAwIqDPCwc7n1OmkoBXkoA34iKgzwsHO+Iw5GoAwI5ZI44kIW+NATMgwQqZKoAwIqDPCwc7n1OmkoBXkoA34iKgzwsHO+Iw5F8qb4w7yDpTA6GOJCFvjQEzIMEKmSqAMCKgzwsHO59TppKAV5KAN+IioM8LBzviMOTiXypssgAqIPpCIG8QwwLydSBvEiFvE9cL/2wiAyAw+Ehu4wDTB9HbPNs8f/hnzW22AhIgwAGOgI6A4jBwbgMMcIjbPNs8b8u4ACBFcnJvciwgdHJ5IGFnYWluAwxwiNs82zxxy7gAVFN1Y2Nlc3MsIHlvdXIgbWVzc2FnZSBzZW5kZWQgdG8gYmxvY2tjaGFpbgMcMPhIbuMA0ds82zx/+GfNyrYEUCCCECFOUAy64wIgghAnMcFwuuMCIIIQJ/ph5rrjAiCCECmHTAa64wJ/eXd0Ayww+Ehu4wDTH/QEWW8CAdHbPNs8f/hnzXW2AR4g+HhwliD4WG8QuY6A6Ft2ASAg+FhvEYAg9A7ysts8pLUHjgMuMPhIbuMA+kGV1NHQ+kDf0ds82zx/+GfNeLYAbm0hi7kmD51evqNMGQsBdMjOznHPCwXIz4EibvLgQM+B+CPPCz+BASPPCx/PkMy4JpbNyXD7AFsDIDD4SG7jANMf0ds82zx/+GfNerYENnBtbwJwliD4WG8QuY6A6DAgiIiCEA7t94JvA32Y0XsELNs8AW8iIaQDWYAg9ENvAjGIiCLbPFvFfNHAAD5DaG9vc2UgRGVBdWRpdCBvciBiYWNrIHRvIG1lbnU6BEgg+FhvEYAg9A7ysiD4VYEBC/QLjoCOgOJvAMgibxHQ2zyLEKiJiKN+BEjbPNs8U0CIghA93FzUbwPbPAFvIiGkA1mAIPRDbwI1XwOktQejotHFA1gw+Ehu4wDSANMH0x/0BFlvAgH6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z82AtgNOIPhXgQEL9AqKiuIlb1Akb1Ejb1Iib1Mh+Fci2zxZgQEL9EH4d18Gg4KBACRvJF4gyMoAywcBbyICyx/0AM4AWHBfIG1vAo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG8EACLSANMH0x/0BFlvAgH6QNFvBARQIIIQEo367rrjAiCCEBdljsK64wIgghAbfhn/uuMCIIIQHzq9fbrjAo+Ni4UDvDD4SG7jANMf1PpBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39cN/5XU0dDT/9/XDf+V1NHQ0//f1w3/ldTR0NP/39cNf5XU0dDTf9/XDX+V1NHQ03/f0ds82zx/+GfNhrYDfPhJ+FWBAQv0C46AjoDiKm9QKW9RKG9SJ29TJm9UJW9VJG9WI29XIm9YIW9Z+En4VSLbPMlZgQEL9BP4dV8LiYiHAEhvLF6gyMsfzM5VgMjOVXDIzsv/VVDIy//L/8t/y3/Lf8zNzc0C6HCIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcF9QiG8M0dEBBtDbPIoArtMf1PpA+kGV1NHQ+kDf+kGV1NHQ+kDf1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//f1w1/ldTR0NN/39cNf5XU0dDTf9/XDX+V1NHQ03/f1NFvDAMcMPhIbuMA0ds82zx/+GfNjLYAoG34U4u5JhtdwUSjTBkLAXTIzs5xzwsFgCD4QPhdyM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5F0aYtqWcjOy3/Nzclw+wAwAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z82OtgB0bfhTi7kmEKcoBiNMGQsBdMjOznHPCwUiyM+BI27y4EDPgfgjzws/gQEjzwsfz5B3xJZmzs3JcPsAWwMgMPhIbuMA0x/R2zzbPH/4Z82QtgRScG8AyI0FFBob3RvIGxpbmsgb2YgQWN0NDogg2zz4W9DbPIsyAKII2zyjo6ORBCbbPNs8cJYg+FxvELmOgOgw2zwwosuckgRAcG1vAiCIiIIQEo367m8D2zwBbyIhpANZgCD0Q28CMSCb0cWTBDaIiIIQaekmxW8D2zwBbyIhpANZgCD0Q28CMSCa0cWUBDaIiIIQYcunGm8D2zwBbyIhpANZgCD0Q28CMSCZ0cWVBDSIiIIQDu33gm8D2zwBbyIhpANZgCD0Q28CMZjRxZYDDIiIIts8MJfRwAAiQWN0NCB2b3RpbmcgbWVudToALEJhY2sgdG8gdmFsaWRhdG9yIG1lbnUAGFZvdGUgYWdhaW5zdAAQVm90ZSBmb3IAIkRpc3BsYXkgQWN0NCBkYXRhBJQg+FxvEYAg9A7ystcL/3BvAMiNBJDYW5kaWRhdGUgaW5kZXggOiCDbPCRwcHDbPI0EiBBbW91bnQgb2Ygdm90ZXM6IINs8I3BwcKOeo50EHts8ixCo2zzbPNs8MKS1B56jossCeCTPNasCIJpfJm+MNzDINYB/3yKSgDCSgCDiIpcmgC3PCwc33iGlMiGaXydvjDjIN4B/Mt8lets8IG+IJqGfAd6OVVNguSCUMCbCf9/y0EJTYKFTBLuOGiCWU5PPCwc65FNAoTUkml8qb4w7yDqAfzXfjiIkllOTzwsHOuRfKm+MO8g6UwShllOTzwsHOuSAfyGhJaA14jDeUwO7jhIgnyFvjQEzKYAwIqDPCwc6MOSgAGiOLSOfIW+NATMpgDAioM8LBzow5F8pb4w6yDlTA6GfIW+NATMpgDAioM8LBzow5OJfKWyiAEJvAI4aIpUgcG+MMeFwkyPDAJpdqQwBNTFcb4wy6DDYbCEALpYhb4jAALOaIW+NATNTAc0xMeggyWwhAGwhzzWm+SHXSyCWI3Ai1zE03lMSuyCUU0XONo4VXyTXGDZTBs43XydvjDgwyDZTRc424l8mbHIEQCDAAeMCIIEN67rjAiCCEA7t94K64wIgghAPbYfpuuMCtamnpQMeMPhIbuMA1NHbPNs8f/hnzaa2ACT4RSBukjBw3vhCuvLgZPgA+HQDIDD4SG7jANMf0ds82zx/+GfNqLYBBts8MLgDkDD4SG7jANHbPCqOMyzQ0wH6QDAxyM+HIM5xzwthXoFVkMjPkAAAN67MzMxVYMjMzM7MVSDIzMzMzc3NyXD7AJJfCuLjAH/4Z82qtgQGiIiI0dHRqwROiIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASI0dHRrAQGiIiI0dHRrQQMiDqIOYg4tLOyrgRuiDeINo0IYAQglEdp2q7ObX1ANAP4FQVwYLTVL2/0RTxNMkEhS6tUpDWINIgz+EsgbvJ/MjD4VLGysK8ABGVuAHJUaGF0J3MgZGVib3QgZm9yIFZvdGluZyBBdWRpdC4gRGV2ZWxvcGVkIGJ5IFJhZGlhbmNlIFRlYW0ARERlQm90IGZvciBEZUF1ZGl0IGJ5IFJhZGlhbmNlIFRlYW0AGlJhZGlhbmNlIFRlYW0ACjAuMS4wAE5SYWRpYW5jZSBWb3RpbmcgQXVkaXQgRGVCb3QgW1ZhbGlkYXRvcl0DHDD4SG7jANHbPNs8f/hnzbi2Af6AIPhA+F/4Xvhd+Fz4W/ha+Fn4WPhX+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8sAywcBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyM4Bz4PPEeLOgBJxY8jOy39V8MjOVeDItwB8zlXQyM7M9AABbyICyx/0AFWQyPQAAW8iAssf9ADOVWDIzswBbyICyx/0AFUwyM7Lf8zLf83Nzc3Nzc3J7VQEDHCI2zzbPMzLyrkEENs8cIjbPNs8ycjLugQKiIh1bYjH0ca7BCSIghAO7feCbwPbPHBYgCD0Q4jRxcS8BCSIghBQ+4RnbwPbPHFYgCD0Q4jRxcO9BCSIghAnMcFwbwPbPHJYgCD0Q4jRxcK+BCSIghBwk4nlbwPbPHNYgCD0Q4jRxcG/AyCIcG8D2zx0WIAg9ENvAts80cXAAK6NCGcNYNJp9nURlyS8HvpRHUDBHm5RkC7ixmkGJtks4SsC2kRUcSMjyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAANMCjHMDPFszMAW8iAssf9ADJcPsAXwQACFF1aXQALlJldHVybiB0byBwcmV2aW91cyBtZW51ABBWYWxpZGF0ZQAoUmVnaXN0ZXIgb24gRGUgQXVkaXQAEG8jAsjMzMsfABhSZWZyZXNoIGRhdGEAMldlbGNvbWUgdG8gVmFsaWRhdG9yIG1lbnUADlN1Y2Nlc3MAcG34U4u5JhTDpgMjTBkLAXTIzs5xzwsFyM+BIm7y4EDPgfgjzws/gQEjzwsfz5C3P6F6zclw+wAwAHBt+FKLuSYuOcWJo0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+RvcRw2s3JcPsAMACejQhnDDyymxs3cQwpbatuZbBeKyLMWwxkMv4oZFjVugXdCUccVHEgyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAABnMk4UDPFssfzMlw+wBfAwAgRmV0Y2hpbmcgZGF0YS4uLgH87UTQ0//TP9MA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B+kDU0dD6QNN/1NHQ+kDU0dD6QNTR0PpA1PQE0x/0BFlvAgHU0dD0BNMf9ARZbwIB+kDU0dD6QNTTH/QEWW8CAdTR0PpA03/U03/RgCD4YPh/zgBm+H74ffh8+Hv4evh5+Hj4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hiAgr0pCD0odHQABRzb2wgMC40NS4wAAA=",
    codeHash: "4cf9b9c0ff33dce044eca2563df104b7c06b90dc26711e140aaeaf5e2d915167",
};
module.exports = { VA_VRContract };