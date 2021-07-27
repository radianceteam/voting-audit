const VA_VLContract = {
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
                "name": "prestart",
                "inputs": [
                    {
                        "name": "m_participantC",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "preInd",
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
                "name": "votingListMenu_getVoteStuct",
                "inputs": [
                    {
                        "name": "voteKeys",
                        "type": "uint256[]"
                    }
                ],
                "outputs": []
            },
            {
                "name": "votingListMenu_getVoteStuctCur",
                "inputs": [
                    {
                        "name": "curVoteKey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SCgetCurVote",
                "inputs": [
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
                ],
                "outputs": []
            },
            {
                "name": "premenu",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "votingListMenu",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "showallV",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "toungAllV",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "goToACTMdebot",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showVotings",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "showDADdata",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteFor",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "voteAgainst",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resultVote",
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
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECrAEAGGcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gupBwSrAQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkRBgEU0x8B2zz4R27yfAgBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAgCKCCCEEPjAIe74wIgghB97NDbu+MCJQkCKCCCEFuFST674wIgghB97NDbu+MCFwoEUCCCEF13jDm64wIgghBotV8/uuMCIIIQeSnhlrrjAiCCEH3s0Nu64wIVEA4LA3Yw+Ehu4wDR2zwkjiYm0NMB+kAwMcjPhyDOcc8LYV4hVTDIz5P3s0NuywfMzM7NyXD7AJJfBOLjAH/4Z6gMpAT2cIiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Etus5b4SyBu8n+OgOIz+Exus5b4TCBu8n+OgOIy+E1us5b4TSBu8n+OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOIx+Eo0q6sNDQECiKsDLjD4SG7jAPpBldTR0PpA39HbPNs8f/hnqA+kARQg+HL4Sfhu2zwwpQIqMPhIbuMA+Ebyc3H4ZtH4ANs8f/hnEaQB+O1E0CDXScIBjm/T/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0NN/03/6QNTR0PpA1PQE0x/0BFlvAgHT/9Mf0fh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GKOgOISAcD0BXD4am34a234bG34bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhucPhvcPhwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HETAryNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4coj4c234dHBtbwL4dXD4dnD4d3ABgED0DvK91wv/+GJw+GNw+GZ/+GiCECm5JwD4b4IQuMY/APhwqxQATI0IYAdZSqDu998Gk7IWgY4UGNv6ucqXnQAX2tnUmEe5sWES5PhxAx4w+Ehu4wDU0ds82zx/+GeoFqQAMPhC+EUgbpIwcN668uBk+AD4SnGx+Gr4awRQIIIQRBRODLrjAiCCEEaYMha64wIgghBYZC0KuuMCIIIQW4VJPrrjAiEcGhgDIDD4SG7jANMf0ds82zx/+GeoGaQBom34Uou5JhtdwUSjTBkLAXTIzs5xzwsF+FD4VsjPg4ECAM9AU0RukzDPgZUBz4PL/+L4I88LP4EBI88LH8+R3glCElnIy//Lf83NyXD7ANs8W4kDhDD4SG7jANHbPCGOLiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA2GQtCozxYBbyICyx/0AMlw+wCRMOLjAH/4Z6gbpABocG1vAnFtgvCHllNjZu4hhS21bcy2C8VkWYthjIZfxQyLGrdAu6Eo48jL/3BYgCD0Q28CMQMkMPhIbuMA0x/TH9HbPNs8f/hnqB2kBFRwbwDIi6c2RrRXJyb3I6II2zwkcHBw2zyLoKZXhpdENPZGU6jbPCNwcHB/dH8eBA7bPNs82zxxdHOmHwIIiNs8WyCmAB5CYWNrIHRvIG1lbnUuLi4DLDD4SG7jANMf9ARZbwIB0ds82zx/+GeoIqQELCD4dXCWIPhVbxC5joDoMHCI2zzbPDAkI6aJAA5TdWNjZXNzASYg+FVvEYAg9A7ystcL/9s8pLUHOwRQIIIQBXoy07vjAiCCEBYqBhC74wIgghA5c0c/u+MCIIIQQ+MAh7vjAkw5LSYEUCCCED+P+Em64wIgghBA1QN3uuMCIIIQQXNnULrjAiCCEEPjAIe64wIsKiknAyAw+Ehu4wDTH9HbPNs8f/hnqCikAQbbPDCJAyAw+Ehu4wDTH9HbPNs8f/hnqFakAyAw+Ehu4wDTH9HbPNs8f/hnqCukAaJt+FKLuSYbXcFEo0wZCwF0yM7Occ8LBfhP+FbIz4OBAgDPQFNEbpMwz4GVAc+Dy//i+CPPCz+BASPPCx/PkF/7N3pZyMv/y3/Nzclw+wDbPFuJAyAw+Ehu4wDTH9HbPNs8f/hnqGWkBFAgghAp+3tZuuMCIIIQNruCibrjAiCCEDcwoZW64wIgghA5c0c/uuMCNzEvLgMcMPhIbuMA0ds82zx/+GeoiaQDIDD4SG7jANMf0ds82zx/+GeoMKQAXPhS+E7Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxYByM+Q2aFWas7NyXD7ADADIDD4SG7jANMH0ds82zx/+GeoMqQCEiDAAY6AjoDiMDUzAwxwiNs82zw0pqUAIEVycm9yLCB0cnkgYWdhaW4DDHCI2zzbPDampQBUU3VjY2VzcywgeW91ciBtZXNzYWdlIHNlbmRlZCB0byBibG9ja2NoYWluAyAw+Ehu4wDTH9HbPNs8f/hnqDikAQbbPDClBFAgghAL2hvyuuMCIIIQD22H6brjAiCCEBRz9di64wIgghAWKgYQuuMCSEY8OgMwMPhIbuMA1w3/ldTR0NP/39HbPNs8f/hnqDukAHZt+FGLuSYF7Q35I0wZCwF0yM7Occ8LBSLIz4EjbvLgQM+B+CPPCz+BASPPCx/Pkb0Q/47L/83JcPsAWwMgMPhIbuMA0x/R2zzbPH/4Z6g9pAIecJYg+FVvELmOgOgw2zwwPokEQCD4VW8RgCD0DvKy1wv/+FSBAQD0D46AjoDiiCFvGH+6hYSrPwRMjoCOgOJwbwDIjQVPT09PT09CmNyLmluaXRpYXRvcjogg2zwkbxCCgH9ABFrbPIvwpjci5zdGFydFRpbWU6II2zwkbxFwcHDbPIvgpjci5kdXJhdGlvbjogh3f3RBBDzbPCRvEnBwcNs8i6CmNyLnZjbXM6II2zwkbxNwcHB/dH9CBFbbPIvgpjci55ZXNDb3VudDogjbPCRvFHBwcNs8i9CmNyLm5vQ291bnQ6IIdH90QwRK2zwkbxVwcHDbPI0EApjci5hY3Rpb25UeXBlOiCDbPCRvF3BwcH90f0QEONs8i/CmNyLmNvbXBsZXRlZDogjbPCPQ2zyLEKh0f39FAxTbPNs82zxbpLUHf3OmAx4w+Ehu4wDU0ds82zx/+GeoR6QAJPhFIG6SMHDe+EK68uBk+AD4cwL+MPhIbuMA+kGV1NHQ+kDf1w3/ldTR0NP/39cN/5XU0dDT/9/XDQeV1NHQ0wff9AaV1NHQ9ATf9AaV1NHQ9ATf1w0fldTR0NMf39cNH5XU0dDTH98g10vAAQHAALCT1NHQ3tTXDQeV1NHQ0wff1wwAldTR0NIA39cN/5XU0dDT/6hJAhLf0ds82zx/+GdKpANyIPhUgQEA9A+OgI6A4ixvUCtvUSpvUilvUyZvVCVvVSRvViNvVyJvWCH4VCLbPMlZgQEA9Bf4dF8NhYRLADJvKV5wyM7L/1VgyMv/ywfLH8sfzMsHygDNBD4gwAHjAiCBDeu64wIgggt+p6q64wIgghAFejLTuuMCo5eHTQMgMPhIbuMA0x/R2zzbPH/4Z6hOpAQo+Fb4VIEBAPQPjoCOgOKIIW8Yf7qFhKtPBEyOgI6A4nBvAMiNBU9PT09PT0KY3IuaW5pdGlhdG9yOiCDbPCRvEIKAf1AEWts8i/CmNyLnN0YXJ0VGltZTogjbPCRvEXBwcNs8i+CmNyLmR1cmF0aW9uOiCHd/dFEEPNs8JG8ScHBw2zyLoKY3IudmNtczogjbPCRvE3BwcH90f1IEVts8i+CmNyLnllc0NvdW50OiCNs8JG8UcHBw2zyL0KY3Iubm9Db3VudDogh0f3RTBErbPCRvFXBwcNs8jQQCmNyLmFjdGlvblR5cGU6IINs8JG8XcHBwf3R/VAQy2zyL8KY3IuY29tcGxldGVkOiCNs8I9DbPHR/f1UDFNs82zz4V9s8XwNzplYEXCD4dyD4VW8RgCD0DvKy1wv/IPh2+FSBAQD0D46AjoDicG1vAiFvGI6AjoDiXwOFhGRXBDYgiIiCC36nqm8D2zwBbyIhpANZgCD0Q28CMSBjq5RYBDaIiIIQQNUDd28D2zwBbyIhpANZgCD0Q28CMSBiq5RZBD6IiIIQW4VJPm8D2zwBbyIhpANZgCD0Q28CMSFvF8ACYauUWgQcjoDeIIiIghBD4wCHbwNfaKtbBCzbPAFvIiGkA1mAIPRDbwIxIIiIcG8DlJCrXARw2zwBbyIhpANZgCD0Q28CMW8AyIviAtIEluaXRpYXRvcjogjbPCNvENs8i8IFZvdGluZyBpZDogiUf3ddBCLbPPhWcHBw2zyLQgLSAKjbPH90f14DENs8IIgj2zwwc6uPAzYgiIiCEAV6MtNvA9s8AW8iIaQDWYAg9ENvAjFgq5QAKERpc3BsYXkgRGVBdWRpdCBEYXRhABhSZXN1bHQgdm90ZXMAGFZvdGUgYWdhaW5zdAAQVm90ZSBmb3IDDnCI2zxw2zxypmUENnBtbwJwliD4VW8QuY6A6DAgiIiCECn7e1lvA2loq2YELNs8AW8iIaQDWYAg9ENvAjGIiCLbPFuUZ6uPADxDaG9vc2Ugdm90aW5nIG9yIGJhY2sgdG8gbWVudToAMEJhY2sgdG8gdm90aW5nIGxpc3QgbWVudQRSIPhVbxGAIPQO8rLXC/8g+FSBAQD0D46AjoDiIG8W0CD6QDKII28Yf7qFhKtqBEqOgI6A4m8AyI0FyAtIFZvdGluZyBmb3IgYWRkcmVzczogg2zwjgoB/awQ62zyLkgc3RhdHVzIDqNs8ItDbPIuCAgY3VySzogh3f39sBEbbPCZwcHDbPI0EyBpbml0aWF0b3IgYWRkcmVzczqDbPCVvEH90f20ETts8i8IHN0YXJ0VGltZTogjbPCVvEXBwcNs8i7IGR1cmF0aW9uOiCHd/dG4EPts8JW8ScHBw2zyLsgeWVzQ291bnQ6II2zwlbxRwcHB/dH9vBEzbPIuiBub0NvdW50OiCNs8JW8VcHBw2zyLwgYWN0aW9uVHlwZTqHR/dHAEJNs8JW8XcHBw2zyLQgLSAKjbPH90f3EDRNs8U3CIghBBc2dQbwPbPAFvIiGkA1mAIPRDbwI4XwaktQdzq5QAbiAtIEVycm9yOiB0aGlzIFZvdGluZyBjb21wbGV0ZWQsIGNob29zZSBhbm90aGVyIG9uZSAtIAoALpYhb4jAALOaIW+NATNTAc0xMeggyWwhAngkzzWrAiCaXyZvjDcwyDWAf98ikoAwkoAg4iKXJoAtzwsHN94hpTIhml8nb4w4yDeAfzLfJXrbPCBviCZ9dQHejlVTYLkglDAmwn/f8tBCU2ChUwS7jhogllOTzwsHOuRTQKE1JJpfKm+MO8g6gH81344iJJZTk88LBzrkXypvjDvIOlMEoZZTk88LBzrkgH8hoSWgNeIw3lMDu44SIJ8hb40BMymAMCKgzwsHOjDkdgBoji0jnyFvjQEzKYAwIqDPCwc6MORfKW+MOsg5UwOhnyFvjQEzKYAwIqDPCwc6MOTiXylsogNqINs8XyQj2zwBNjQjzzUgwgiXJIA6zwsHNZ5fJW+MNsg1JIA6zwsHNeJfJSOAQH9/cNs8bGJ+eHkBHF8ytgtwcH8mwQDbPGwyeQJ6Jc81qwIgml8nb4w4MMg2gH/fI5KAMJKAIOIilyeALc8LBzjeIaUyIZpfKG+MOcg4gH8y3yaAENs8IG+IJ316AbaOVVNwuSCUMCfCf9/y0EVTcKFTBLuOGiCWU6PPCwc75FNAoTUkml8rb4w8yDuAfzXfjiIkllOjzwsHO+RfK2+MPMg7UwShllOjzwsHO+SAfyGhJaA14jDeUwO7ewFUjiggjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDkfADAjlkjjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDkXypvjDvIOlMDoY4kIW+NATMgwQqZKoAwIqDPCwc7n1OmkoBXkoA34iKgzwsHO+Iw5OJfKmyyAEJvAI4aIpUgcG+MMeFwkyPDAJpdqQwBNTFcb4wy6DDYbCEAKiD6QiBvEMMC8nUgbxIhbxPXC/9sIgBsIc81pvkh10sgliNwItcxNN5TErsglFNFzjaOFV8k1xg2UwbON18nb4w4MMg2U0XONuJfJmxyAQSIMYEACmZhbHNlAQSIMYMACHRydWUBWI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHBfQIhwcG8JqwEG0Ns8hgCk+kDT/9cN/5XU0dDT/9/XDQeV1NHQ0wff1w0fldTR0NMf39cNH5XU0dDTH98g10vAAQHAALCT1NHQ3tTXDQeV1NHQ0wff1wwAldTR0NIA39FvCQMgMPhIbuMA0x/R2zzbPH/4Z6iIpAGibfhSi7kmG13BRKNMGQsBdMjOznHPCwX4T/hWyM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5GyQsimWcjL/8t/zc3JcPsA2zxbiQQKiIh1bYiWq5WKBCSIghAp+3tZbwPbPHBYgCD0Q4irlJOLBCSIghAUc/XYbwPbPHFYgCD0Q4irlJKMBCSIghA/j/hJbwPbPHJYgCD0Q4irlJGNBCSIghA3MKGVbwPbPHNYgCD0Q4irlJCOAyCIcG8D2zx0WIAg9ENvAts8q5SPAK6NCGcNYNJp9nURlyS8HvpRHUDBHm5RkC7ixmkGJtks4SsC2kRUcSMjyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAANMCjHMDPFszMAW8iAssf9ADJcPsAXwQACFF1aXQALlJldHVybiB0byBwcmV2aW91cyBtZW51ACZEaXNwbGF5IGFsbCB2b3RpbmdzABhEaXNwbGF5IGRhdGEAEG8jAsjMzMsfABhSZWZyZXNoIGRhdGEAIlZvdGluZyBsaXN0IG1lbnU6A5Aw+Ehu4wDR2zwqjjMs0NMB+kAwMcjPhyDOcc8LYV6BVZDIz5AAADeuzMzMVWDIzMzOzFUgyMzMzM3Nzclw+wCSXwri4wB/+GeomKQEBoiIiKurq5kEToiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiKurq5oEBoiIiKurq5sEDIg6iDmIOKKhoJwEbog3iDaNCGAEIJRHadquzm19QDQD+BUFcGC01S9v9EU8TTJBIUurVKQ1iDSIM/hLIG7yfzIw+FOfoJ6dAARlbgByVGhhdCdzIGRlYm90IGZvciBWb3RpbmcgQXVkaXQuIERldmVsb3BlZCBieSBSYWRpYW5jZSBUZWFtAEREZUJvdCBmb3IgRGVBdWRpdCBieSBSYWRpYW5jZSBUZWFtABpSYWRpYW5jZSBUZWFtAAowLjEuMABWUmFkaWFuY2UgVm90aW5nIEF1ZGl0IERlQm90IEFDVE1fdm90aW5nTGlzdAMcMPhIbuMA0ds82zx/+GeopaQA+PhX+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8sAywcBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyM4Bz4PPEeLOVYDIy3/Lf85VUMjOzPQAAW8iAssf9ADL/8sfzc3J7VQCeHCI2zxt+FGLuSYiCicGI0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+QgYw/zs3JcPsAMKemAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DACBGZXRjaGluZyBkYXRhLi4uAOTtRNDT/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0NN/03/6QNTR0PpA1PQE0x/0BFlvAgHT/9Mf0fh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GICCvSkIPShq6oAFHNvbCAwLjQ1LjAAAA==",
    code: "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",
    codeHash: "aa3b45f8690d29c4db21a7a221c0179ad90b61a577ccabe8877ba6f1c3255cbe",
};
module.exports = { VA_VLContract };