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
    tvc: "te6ccgECpgEAFrQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gujBwSlAQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkRBgEU0x8B2zz4R27yfAgBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAgCKCCCEEQUTgy74wIgghB97NDbu+MCIQkCKCCCEF13jDm74wIgghB97NDbu+MCFQoDPCCCEGi1Xz+64wIgghB5KeGWuuMCIIIQfezQ27rjAhAOCwN2MPhIbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+GeiDJ4E9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNKWlDQ0BAoilAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z6IPngEUIPhy+En4bts8MJ8CKjD4SG7jAPhG8nNx+GbR+ADbPH/4ZxGeAfjtRNAg10nCAY5v0//TP9MA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B+kDU0dDTf9N/+kDU0dD6QNT0BNMf9ARZbwIB0//TH9H4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hijoDiEgHA9AVw+Gpt+Gtt+Gxt+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bnD4b3D4cI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhxEwK8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HKI+HNt+HRwbW8C+HVw+HZw+HdwAYBA9A7yvdcL//hicPhjcPhmf/hoghApuScA+G+CELjGPwD4cKUUAEyNCGAEnb/2ylSnisdYMEmLqi40kkl4qGBlKCKHzOAobF5Njkz4cQRQIIIQRpgyFrrjAiCCEFhkLQq64wIgghBbhUk+uuMCIIIQXXeMObrjAhwaGBYDHjD4SG7jANTR2zzbPH/4Z6IXngAw+EL4RSBukjBw3rry4GT4APhKcbH4avhrAyAw+Ehu4wDTH9HbPNs8f/hnohmeAJ5t+FKLuSYbXcFEo0wZCwF0yM7Occ8LBfhQ+FbIz4OBAgDPQFNEbpMwz4GVAc+Dy//i+CPPCz+BASPPCx/Pkd4JQhJZyMv/y3/Nzclw+wBbA4Qw+Ehu4wDR2zwhji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANhkLQqM8WAW8iAssf9ADJcPsAkTDi4wB/+GeiG54AaHBtbwJxbYLwh5ZTY2buIYUttW3MtgvFZFmLYYyGX8UMixq3QLuhKOPIy/9wWIAg9ENvAjEDJDD4SG7jANMf0x/R2zzbPH/4Z6IdngRUcG8AyIunNka0Vycm9yOiCNs8JHBwcNs8i6CmV4aXRDT2RlOo2zwjcHBwgHWAHgQO2zzbPNs8cXV0oB8CCIjbPFsgoAAeQmFjayB0byBtZW51Li4uBFAgghAFejLTu+MCIIIQKft7WbvjAiCCED+P+Em74wIgghBEFE4Mu+MCS0AsIgRQIIIQQNUDd7rjAiCCEEFzZ1C64wIgghBD4wCHuuMCIIIQRBRODLrjAiopJyMDLDD4SG7jANMf9ARZbwIB0ds82zx/+GeiJJ4ELCD4dXCWIPhVbxC5joDoMHCI2zzbPDAmJaAvAA5TdWNjZXNzASYg+FVvEYAg9A7ystcL/9s8pLUHRAMgMPhIbuMA0x/R2zzbPH/4Z6IongEG2zwwLwMgMPhIbuMA0x/R2zzbPH/4Z6JVngMgMPhIbuMA0x/R2zzbPH/4Z6IrngCebfhSi7kmG13BRKNMGQsBdMjOznHPCwX4T/hWyM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5Bf+zd6WcjL/8t/zc3JcPsAWwRQIIIQNruCibrjAiCCEDcwoZW64wIgghA5c0c/uuMCIIIQP4/4SbrjAjo4Li0DIDD4SG7jANMf0ds82zx/+GeiZZ4DHDD4SG7jANHbPNs8f/hnoi+eBAqIiHRtiDelNjAEJIiCECn7e1lvA9s8cFiAIPRDiKVxNTEEJIiCED+P+ElvA9s8cViAIPRDiKVxNDIEJIiCEDcwoZVvA9s8cliAIPRDiKVxXjMDIIhwbwPbPHNYgCD0Q28C2zylcWcALlJldHVybiB0byBwcmV2aW91cyBtZW51ACZEaXNwbGF5IGFsbCB2b3RpbmdzABhSZWZyZXNoIGRhdGEAIlZvdGluZyBsaXN0IG1lbnU6AyAw+Ehu4wDTH9HbPNs8f/hnojmeAFz4UvhOyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkNmhVmrOzclw+wAwAyAw+Ehu4wDTB9HbPNs8f/hnojueAhIgwAGOgI6A4jA+PAMMcIjbPNs8PaCfACBFcnJvciwgdHJ5IGFnYWluAwxwiNs82zw/oJ8AVFN1Y2Nlc3MsIHlvdXIgbWVzc2FnZSBzZW5kZWQgdG8gYmxvY2tjaGFpbgRQIIIQC9ob8rrjAiCCEA9th+m64wIgghAWKgYQuuMCIIIQKft7WbrjAkdFQ0EDIDD4SG7jANMf0ds82zx/+GeiQp4BBts8MJ8DMDD4SG7jANcN/5XU0dDT/9/R2zzbPH/4Z6JEngB2bfhRi7kmBe0N+SNMGQsBdMjOznHPCwUiyM+BI27y4EDPgfgjzws/gQEjzwsfz5G9EP+Oy//NyXD7AFsDHjD4SG7jANTR2zzbPH/4Z6JGngAk+EUgbpIwcN74Qrry4GT4APhzAv4w+Ehu4wD6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cNB5XU0dDTB9/0BpXU0dD0BN/0BpXU0dD0BN/XDR+V1NHQ0x/f1w0fldTR0NMf3yDXS8ABAcAAsJPU0dDe1NcNB5XU0dDTB9/XDACV1NHQ0gDf1w3/ldTR0NP/okgCEt/R2zzbPH/4Z0meA3Ig+FSBAQD0D46AjoDiLG9QK29RKm9SKW9TJm9UJW9VJG9WI29XIm9YIfhUIts8yVmBAQD0F/h0Xw2NjEoAMm8pXnDIzsv/VWDIy//LB8sfyx/MywfKAM0EPiDAAeMCIIEN67rjAiCCC36nqrrjAiCCEAV6MtO64wKdkY9MAyAw+Ehu4wDTH9HbPNs8f/hnok2eBCj4VvhUgQEA9A+OgI6A4oghbxh/uo2MpU4EFo6AjoDiiCJvF8ACioilTwRMjoCOgOJwbwDII9DbPI0FgpJbml0aWF0b3Igb2Ygdm90aW5nOiCCGgYBQBDzbPCVvENs8i9ClN0YXJ0IHRpbWU6II2zwlbxFwcHCAeIBRBE7bPIuwpEdXJhdGlvbjogjbPCVvEnBwcNs8i8ClllcyB2b3Rlczogh1gHVSBD7bPCVvFHBwcNs8i7Ck5vIHZvdGVzOiCNs8JW8VcHBwgHWAUwQo2zyLoKIFN0YXR1czogjbPCTQ2zx1gIBUAxTbPNs8+FfbPF8EdKBVBFwg+Hcg+FVvEYAg9A7ystcL/yD4dvhUgQEA9A+OgI6A4nBtbwIhbxiOgI6A4l8DjYxkVgQ2IIiIggt+p6pvA9s8AW8iIaQDWYAg9ENvAjEgY6VxVwQ2iIiCEEDVA3dvA9s8AW8iIaQDWYAg9ENvAjEgYqVxWAQ+iIiCEFuFST5vA9s8AW8iIaQDWYAg9ENvAjEhbxfAAmGlcVkEHI6A3iCIiIIQQ+MAh28DX2mlWgQs2zwBbyIhpANZgCD0Q28CMSCIiHBvA3FepVsEats8AW8iIaQDWYAg9ENvAjFvAMiLtJbml0aWF0b3I6II2zwjbxDbPIvCBWb3RpbmcgaWQ6IIcYB4XAQc2zz4VnBwcNs8ixCo2zyAdYBdAxDbPCCII9s8MHSlZwAIUXVpdAM2IIiIghAFejLTbwPbPAFvIiGkA1mAIPRDbwIxYKVxAChEaXNwbGF5IERlQXVkaXQgRGF0YQAYUmVzdWx0IHZvdGVzABhWb3RlIGFnYWluc3QAEFZvdGUgZm9yAw5wiNs8cNs8c6BlBDZwbW8CcJYg+FVvELmOgOgwIIiIghAp+3tZbwNqaaVmBCzbPAFvIiGkA1mAIPRDbwIxiIgi2zxbcWilZwCujQhnDWDSafZ1EZckvB76UR1AwR5uUZAu4sZpBibZLOErAtpEVHEjI8jPhYjOjQVOYloAAAAAAAAAAAAAAAAAADTAoxzAzxbMzAFvIgLLH/QAyXD7AF8EADxDaG9vc2Ugdm90aW5nIG9yIGJhY2sgdG8gbWVudToAMEJhY2sgdG8gdm90aW5nIGxpc3QgbWVudQRSIPhVbxGAIPQO8rLXC/8g+FSBAQD0D46AjoDiIG8W0CD6QDKII28Yf7qNjKVrBBaOgI6A4ogkbxfAAoqIpWwESI6AjoDibwDIItDbPI0FQpWb3RpbmcgZm9yIGFkZHJlc3M6IIIZygG0ENts8JNs8i8ClllcyB2b3RlczogjbPCZvFHBwcIB4gG4ESNs8i7Ck5vIHZvdGVzOiCNs8Jm8VcHBw2zyLkKU3RhdHVzIDqHWAdW8EFts8I9DbPIsQqNs8gICAcANE2zxTgIiCEEFzZ1BvA9s8AW8iIaQDWYAg9ENvAjlfB6S1B3SlcQAQbyMCyMzMyx8CFCRvF8ABjoCOgOKEggBiRXJyb3I6IHRoaXMgVm90aW5nIGNvbXBsZXRlZCwgY2hvb3NlIGFub3RoZXIgb25lCgAuliFviMAAs5ohb40BM1MBzTEx6CDJbCECeCTPNasCIJpfJm+MNzDINYB/3yKSgDCSgCDiIpcmgC3PCwc33iGlMiGaXydvjDjIN4B/Mt8lets8IG+IJn52Ad6OVVNguSCUMCbCf9/y0EJTYKFTBLuOGiCWU5PPCwc65FNAoTUkml8qb4w7yDqAfzXfjiIkllOTzwsHOuRfKm+MO8g6UwShllOTzwsHOuSAfyGhJaA14jDeUwO7jhIgnyFvjQEzKYAwIqDPCwc6MOR3AGiOLSOfIW+NATMpgDAioM8LBzow5F8pb4w6yDlTA6GfIW+NATMpgDAioM8LBzow5OJfKWyiA2og2zxfJCPbPAE2NCPPNSDCCJckgDrPCwc1nl8lb4w2yDUkgDrPCwc14l8lI4BAf39w2zxsYn95egEcXzK2C3BwfybBANs8bDJ6AnolzzWrAiCaXydvjDgwyDaAf98jkoAwkoAg4iKXJ4AtzwsHON4hpTIhml8ob4w5yDiAfzLfJoAQ2zwgb4gnfnsBto5VU3C5IJQwJ8J/3/LQRVNwoVMEu44aIJZTo88LBzvkU0ChNSSaXytvjDzIO4B/Nd+OIiSWU6PPCwc75F8rb4w8yDtTBKGWU6PPCwc75IB/IaEloDXiMN5TA7t8AVSOKCCOJCFvjQEzIMEKmSqAMCKgzwsHO59TppKAV5KAN+IioM8LBzviMOR9AMCOWSOOJCFvjQEzIMEKmSqAMCKgzwsHO59TppKAV5KAN+IioM8LBzviMORfKm+MO8g6UwOhjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDk4l8qbLIAQm8AjhoilSBwb4wx4XCTI8MAml2pDAE1MVxvjDLoMNhsIQAqIPpCIG8QwwLydSBvEiFvE9cL/2wiAGwhzzWm+SHXSyCWI3Ai1zE03lMSuyCUU0XONo4VXyTXGDZTBs43XydvjDgwyDZTRc424l8mbHICFCJvF8ABjoCOgOKEggEEiDGDAExWb3RpbmcgZm9yIGFkZCBtZW1iZXIgZnJvbSBBY3Rpb24gVGVhbQEEiDGFAFJWb3RpbmcgZm9yIHJlbW92ZSBtZW1iZXIgZnJvbSBBY3Rpb24gVGVhbQEEiDGHACRWb3RpbmcgZm9yIERlQXVkaXQBBIgxiQAQVW5kZXJ3YXkBBIgxiwASQ29tcGxldGVkAViNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwX0CIcHBvCaUBBtDbPI4ApPpA0//XDf+V1NHQ0//f1w0HldTR0NMH39cNH5XU0dDTH9/XDR+V1NHQ0x/fINdLwAEBwACwk9TR0N7U1w0HldTR0NMH39cMAJXU0dDSAN/RbwkDIDD4SG7jANMf0ds82zx/+GeikJ4Anm34Uou5JhtdwUSjTBkLAXTIzs5xzwsF+E/4VsjPg4ECAM9AU0RukzDPgZUBz4PL/+L4I88LP4EBI88LH8+RskLIplnIy//Lf83NyXD7AFsDkDD4SG7jANHbPCqOMyzQ0wH6QDAxyM+HIM5xzwthXoFVkMjPkAAAN67MzMxVYMjMzM7MVSDIzMzMzc3NyXD7AJJfCuLjAH/4Z6KSngQGiIiIpaWlkwROiIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIpaWllAQGiIiIpaWllQQMiDqIOYg4nJualgRuiDeINo0IYAQglEdp2q7ObX1ANAP4FQVwYLTVL2/0RTxNMkEhS6tUpDWINIgz+EsgbvJ/MjD4U5mamJcABGVuAHJUaGF0J3MgZGVib3QgZm9yIFZvdGluZyBBdWRpdC4gRGV2ZWxvcGVkIGJ5IFJhZGlhbmNlIFRlYW0ARERlQm90IGZvciBEZUF1ZGl0IGJ5IFJhZGlhbmNlIFRlYW0AGlJhZGlhbmNlIFRlYW0ACjAuMS4wAFJSYWRpYW5jZSBWb3RpbmcgQXVkaXQgRGVCb3QgW1ZvdGluZyBMaXN0XQMcMPhIbuMA0ds82zx/+Gein54A+PhX+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8sAywcBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyM4Bz4PPEeLOVYDIy3/Lf85VUMjOzPQAAW8iAssf9ADL/8sfzc3J7VQCeHCI2zxt+FGLuSYiCicGI0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+QgYw/zs3JcPsAMKGgAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DACBGZXRjaGluZyBkYXRhLi4uAOTtRNDT/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0NN/03/6QNTR0PpA1PQE0x/0BFlvAgHT/9Mf0fh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GICCvSkIPShpaQAFHNvbCAwLjQ1LjAAAA==",
    code: "te6ccgECowEAFocABCSK7VMg4wMgwP/jAiDA/uMC8gugBAGiAQACAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkOAwEU0x8B2zz4R27yfAUBQiLQ0wP6QDD4aak4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAUCKCCCEEQUTgy74wIgghB97NDbu+MCHgYCKCCCEF13jDm74wIgghB97NDbu+MCEgcDPCCCEGi1Xz+64wIgghB5KeGWuuMCIIIQfezQ27rjAg0LCAN2MPhIbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+GefCZsE9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNKKiCgoBAoiiAy4w+Ehu4wD6QZXU0dD6QN/R2zzbPH/4Z58MmwEUIPhy+En4bts8MJwCKjD4SG7jAPhG8nNx+GbR+ADbPH/4Zw6bAfjtRNAg10nCAY5v0//TP9MA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B+kDU0dDTf9N/+kDU0dD6QNT0BNMf9ARZbwIB0//TH9H4d/h2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqf/ho+Gb4Y/hijoDiDwHA9AVw+Gpt+Gtt+Gxt+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bnD4b3D4cI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhxEAK8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HKI+HNt+HRwbW8C+HVw+HZw+HdwAYBA9A7yvdcL//hicPhjcPhmf/hoghApuScA+G+CELjGPwD4cKIRAEyNCGAEnb/2ylSnisdYMEmLqi40kkl4qGBlKCKHzOAobF5Njkz4cQRQIIIQRpgyFrrjAiCCEFhkLQq64wIgghBbhUk+uuMCIIIQXXeMObrjAhkXFRMDHjD4SG7jANTR2zzbPH/4Z58UmwAw+EL4RSBukjBw3rry4GT4APhKcbH4avhrAyAw+Ehu4wDTH9HbPNs8f/hnnxabAJ5t+FKLuSYbXcFEo0wZCwF0yM7Occ8LBfhQ+FbIz4OBAgDPQFNEbpMwz4GVAc+Dy//i+CPPCz+BASPPCx/Pkd4JQhJZyMv/y3/Nzclw+wBbA4Qw+Ehu4wDR2zwhji4j0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANhkLQqM8WAW8iAssf9ADJcPsAkTDi4wB/+GefGJsAaHBtbwJxbYLwh5ZTY2buIYUttW3MtgvFZFmLYYyGX8UMixq3QLuhKOPIy/9wWIAg9ENvAjEDJDD4SG7jANMf0x/R2zzbPH/4Z58amwRUcG8AyIunNka0Vycm9yOiCNs8JHBwcNs8i6CmV4aXRDT2RlOo2zwjcHBwfXJ9GwQO2zzbPNs8cXJxnRwCCIjbPFsdnQAeQmFjayB0byBtZW51Li4uBFAgghAFejLTu+MCIIIQKft7WbvjAiCCED+P+Em74wIgghBEFE4Mu+MCSD0pHwRQIIIQQNUDd7rjAiCCEEFzZ1C64wIgghBD4wCHuuMCIIIQRBRODLrjAicmJCADLDD4SG7jANMf9ARZbwIB0ds82zx/+GefIZsELCD4dXCWIPhVbxC5joDoMHCI2zzbPDAjIp0sAA5TdWNjZXNzASYg+FVvEYAg9A7ystcL/9s8pLUHQQMgMPhIbuMA0x/R2zzbPH/4Z58lmwEG2zwwLAMgMPhIbuMA0x/R2zzbPH/4Z59SmwMgMPhIbuMA0x/R2zzbPH/4Z58omwCebfhSi7kmG13BRKNMGQsBdMjOznHPCwX4T/hWyM+DgQIAz0BTRG6TMM+BlQHPg8v/4vgjzws/gQEjzwsfz5Bf+zd6WcjL/8t/zc3JcPsAWwRQIIIQNruCibrjAiCCEDcwoZW64wIgghA5c0c/uuMCIIIQP4/4SbrjAjc1KyoDIDD4SG7jANMf0ds82zx/+GefYpsDHDD4SG7jANHbPNs8f/hnnyybBAqIiHRtiDSiMy0EJIiCECn7e1lvA9s8cFiAIPRDiKJuMi4EJIiCED+P+ElvA9s8cViAIPRDiKJuMS8EJIiCEDcwoZVvA9s8cliAIPRDiKJuWzADIIhwbwPbPHNYgCD0Q28C2zyibmQALlJldHVybiB0byBwcmV2aW91cyBtZW51ACZEaXNwbGF5IGFsbCB2b3RpbmdzABhSZWZyZXNoIGRhdGEAIlZvdGluZyBsaXN0IG1lbnU6AyAw+Ehu4wDTH9HbPNs8f/hnnzabAFz4UvhOyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WAcjPkNmhVmrOzclw+wAwAyAw+Ehu4wDTB9HbPNs8f/hnnzibAhIgwAGOgI6A4jA7OQMMcIjbPNs8Op2cACBFcnJvciwgdHJ5IGFnYWluAwxwiNs82zw8nZwAVFN1Y2Nlc3MsIHlvdXIgbWVzc2FnZSBzZW5kZWQgdG8gYmxvY2tjaGFpbgRQIIIQC9ob8rrjAiCCEA9th+m64wIgghAWKgYQuuMCIIIQKft7WbrjAkRCQD4DIDD4SG7jANMf0ds82zx/+GefP5sBBts8MJwDMDD4SG7jANcN/5XU0dDT/9/R2zzbPH/4Z59BmwB2bfhRi7kmBe0N+SNMGQsBdMjOznHPCwUiyM+BI27y4EDPgfgjzws/gQEjzwsfz5G9EP+Oy//NyXD7AFsDHjD4SG7jANTR2zzbPH/4Z59DmwAk+EUgbpIwcN74Qrry4GT4APhzAv4w+Ehu4wD6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cNB5XU0dDTB9/0BpXU0dD0BN/0BpXU0dD0BN/XDR+V1NHQ0x/f1w0fldTR0NMf3yDXS8ABAcAAsJPU0dDe1NcNB5XU0dDTB9/XDACV1NHQ0gDf1w3/ldTR0NP/n0UCEt/R2zzbPH/4Z0abA3Ig+FSBAQD0D46AjoDiLG9QK29RKm9SKW9TJm9UJW9VJG9WI29XIm9YIfhUIts8yVmBAQD0F/h0Xw2KiUcAMm8pXnDIzsv/VWDIy//LB8sfyx/MywfKAM0EPiDAAeMCIIEN67rjAiCCC36nqrrjAiCCEAV6MtO64wKajoxJAyAw+Ehu4wDTH9HbPNs8f/hnn0qbBCj4VvhUgQEA9A+OgI6A4oghbxh/uoqJoksEFo6AjoDiiCJvF8ACh4WiTARMjoCOgOJwbwDII9DbPI0FgpJbml0aWF0b3Igb2Ygdm90aW5nOiCCDfn1NBDzbPCVvENs8i9ClN0YXJ0IHRpbWU6II2zwlbxFwcHB9dX1OBE7bPIuwpEdXJhdGlvbjogjbPCVvEnBwcNs8i8ClllcyB2b3RlczoghyfXJPBD7bPCVvFHBwcNs8i7Ck5vIHZvdGVzOiCNs8JW8VcHBwfXJ9UAQo2zyLoKIFN0YXR1czogjbPCTQ2zxyfX1RAxTbPNs8+FfbPF8EcZ1SBFwg+Hcg+FVvEYAg9A7ystcL/yD4dvhUgQEA9A+OgI6A4nBtbwIhbxiOgI6A4l8DiolhUwQ2IIiIggt+p6pvA9s8AW8iIaQDWYAg9ENvAjEgYKJuVAQ2iIiCEEDVA3dvA9s8AW8iIaQDWYAg9ENvAjEgX6JuVQQ+iIiCEFuFST5vA9s8AW8iIaQDWYAg9ENvAjEhbxfAAl6iblYEHI6A3iCIiIIQQ+MAh28DXGaiVwQs2zwBbyIhpANZgCD0Q28CMSCIiHBvA25bolgEats8AW8iIaQDWYAg9ENvAjFvAMiLtJbml0aWF0b3I6II2zwjbxDbPIvCBWb3RpbmcgaWQ6IIbn11WQQc2zz4VnBwcNs8ixCo2zx9cn1aAxDbPCCII9s8MHGiZAAIUXVpdAM2IIiIghAFejLTbwPbPAFvIiGkA1mAIPRDbwIxXaJuAChEaXNwbGF5IERlQXVkaXQgRGF0YQAYUmVzdWx0IHZvdGVzABhWb3RlIGFnYWluc3QAEFZvdGUgZm9yAw5wiNs8cNs8cJ1iBDZwbW8CcJYg+FVvELmOgOgwIIiIghAp+3tZbwNnZqJjBCzbPAFvIiGkA1mAIPRDbwIxiIgi2zxbbmWiZACujQhnDWDSafZ1EZckvB76UR1AwR5uUZAu4sZpBibZLOErAtpEVHEjI8jPhYjOjQVOYloAAAAAAAAAAAAAAAAAADTAoxzAzxbMzAFvIgLLH/QAyXD7AF8EADxDaG9vc2Ugdm90aW5nIG9yIGJhY2sgdG8gbWVudToAMEJhY2sgdG8gdm90aW5nIGxpc3QgbWVudQRSIPhVbxGAIPQO8rLXC/8g+FSBAQD0D46AjoDiIG8W0CD6QDKII28Yf7qKiaJoBBaOgI6A4ogkbxfAAoeFomkESI6AjoDibwDIItDbPI0FQpWb3RpbmcgZm9yIGFkZHJlc3M6IIINvfWoENts8JNs8i8ClllcyB2b3RlczogjbPCZvFHBwcH11fWsESNs8i7Ck5vIHZvdGVzOiCNs8Jm8VcHBw2zyLkKU3RhdHVzIDqHJ9cmwEFts8I9DbPIsQqNs8fX19bQNE2zxTgIiCEEFzZ1BvA9s8AW8iIaQDWYAg9ENvAjlfB6S1B3GibgAQbyMCyMzMyx8CFCRvF8ABjoCOgOKBfwBiRXJyb3I6IHRoaXMgVm90aW5nIGNvbXBsZXRlZCwgY2hvb3NlIGFub3RoZXIgb25lCgAuliFviMAAs5ohb40BM1MBzTEx6CDJbCECeCTPNasCIJpfJm+MNzDINYB/3yKSgDCSgCDiIpcmgC3PCwc33iGlMiGaXydvjDjIN4B/Mt8lets8IG+IJntzAd6OVVNguSCUMCbCf9/y0EJTYKFTBLuOGiCWU5PPCwc65FNAoTUkml8qb4w7yDqAfzXfjiIkllOTzwsHOuRfKm+MO8g6UwShllOTzwsHOuSAfyGhJaA14jDeUwO7jhIgnyFvjQEzKYAwIqDPCwc6MOR0AGiOLSOfIW+NATMpgDAioM8LBzow5F8pb4w6yDlTA6GfIW+NATMpgDAioM8LBzow5OJfKWyiA2og2zxfJCPbPAE2NCPPNSDCCJckgDrPCwc1nl8lb4w2yDUkgDrPCwc14l8lI4BAf39w2zxsYnx2dwEcXzK2C3BwfybBANs8bDJ3AnolzzWrAiCaXydvjDgwyDaAf98jkoAwkoAg4iKXJ4AtzwsHON4hpTIhml8ob4w5yDiAfzLfJoAQ2zwgb4gne3gBto5VU3C5IJQwJ8J/3/LQRVNwoVMEu44aIJZTo88LBzvkU0ChNSSaXytvjDzIO4B/Nd+OIiSWU6PPCwc75F8rb4w8yDtTBKGWU6PPCwc75IB/IaEloDXiMN5TA7t5AVSOKCCOJCFvjQEzIMEKmSqAMCKgzwsHO59TppKAV5KAN+IioM8LBzviMOR6AMCOWSOOJCFvjQEzIMEKmSqAMCKgzwsHO59TppKAV5KAN+IioM8LBzviMORfKm+MO8g6UwOhjiQhb40BMyDBCpkqgDAioM8LBzufU6aSgFeSgDfiIqDPCwc74jDk4l8qbLIAQm8AjhoilSBwb4wx4XCTI8MAml2pDAE1MVxvjDLoMNhsIQAqIPpCIG8QwwLydSBvEiFvE9cL/2wiAGwhzzWm+SHXSyCWI3Ai1zE03lMSuyCUU0XONo4VXyTXGDZTBs43XydvjDgwyDZTRc424l8mbHICFCJvF8ABjoCOgOKBfwEEiDGAAExWb3RpbmcgZm9yIGFkZCBtZW1iZXIgZnJvbSBBY3Rpb24gVGVhbQEEiDGCAFJWb3RpbmcgZm9yIHJlbW92ZSBtZW1iZXIgZnJvbSBBY3Rpb24gVGVhbQEEiDGEACRWb3RpbmcgZm9yIERlQXVkaXQBBIgxhgAQVW5kZXJ3YXkBBIgxiAASQ29tcGxldGVkAViNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwX0CIcHBvCaIBBtDbPIsApPpA0//XDf+V1NHQ0//f1w0HldTR0NMH39cNH5XU0dDTH9/XDR+V1NHQ0x/fINdLwAEBwACwk9TR0N7U1w0HldTR0NMH39cMAJXU0dDSAN/RbwkDIDD4SG7jANMf0ds82zx/+GefjZsAnm34Uou5JhtdwUSjTBkLAXTIzs5xzwsF+E/4VsjPg4ECAM9AU0RukzDPgZUBz4PL/+L4I88LP4EBI88LH8+RskLIplnIy//Lf83NyXD7AFsDkDD4SG7jANHbPCqOMyzQ0wH6QDAxyM+HIM5xzwthXoFVkMjPkAAAN67MzMxVYMjMzM7MVSDIzMzMzc3NyXD7AJJfCuLjAH/4Z5+PmwQGiIiIoqKikAROiIiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIoqKikQQGiIiIoqKikgQMiDqIOYg4mZiXkwRuiDeINo0IYAQglEdp2q7ObX1ANAP4FQVwYLTVL2/0RTxNMkEhS6tUpDWINIgz+EsgbvJ/MjD4U5aXlZQABGVuAHJUaGF0J3MgZGVib3QgZm9yIFZvdGluZyBBdWRpdC4gRGV2ZWxvcGVkIGJ5IFJhZGlhbmNlIFRlYW0ARERlQm90IGZvciBEZUF1ZGl0IGJ5IFJhZGlhbmNlIFRlYW0AGlJhZGlhbmNlIFRlYW0ACjAuMS4wAFJSYWRpYW5jZSBWb3RpbmcgQXVkaXQgRGVCb3QgW1ZvdGluZyBMaXN0XQMcMPhIbuMA0ds82zx/+GefnJsA+PhX+Fb4VfhU+FP4UvhR+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8sAywcBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyM4Bz4PPEeLOVYDIy3/Lf85VUMjOzPQAAW8iAssf9ADL/8sfzc3J7VQCeHCI2zxt+FGLuSYiCicGI0wZCwF0yM7Occ8LBcjPgSJu8uBAz4H4I88LP4EBI88LH8+QgYw/zs3JcPsAMJ6dAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DACBGZXRjaGluZyBkYXRhLi4uAOTtRNDT/9M/0wDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wH6QNTR0NN/03/6QNTR0PpA1PQE0x/0BFlvAgHT/9Mf0fh3+Hb4dfh0+HP4cvhx+HD4b/hu+G34bPhr+Gp/+Gj4Zvhj+GICCvSkIPShoqEAFHNvbCAwLjQ1LjAAAA==",
    codeHash: "81734786a1c906ab679f32aaaba9ebcc913e118773d23d58bd0e38f0e20aacb4",
};
module.exports = { VA_VLContract };