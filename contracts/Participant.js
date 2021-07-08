const ParticipantContract = {
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
                "name": "initVoteAddActionTeamMember",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "initVoteRemoveActionTeamMember",
                "inputs": [
                    {
                        "name": "participantAddr",
                        "type": "address"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "resultVote",
                "inputs": [
                    {
                        "name": "voteId",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreatedDeAuditData",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addDistrict",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameDistrict",
                        "type": "bytes"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addMunicipalBody",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameMunicipalBody",
                        "type": "bytes"
                    },
                    {
                        "name": "indexDistrict",
                        "type": "uint256"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingPool",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addVotingCenter",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
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
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCandidate",
                "inputs": [
                    {
                        "name": "addressDeAuditData",
                        "type": "address"
                    },
                    {
                        "name": "nameCandidate",
                        "type": "bytes"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addCollation",
                "inputs": [
                    {
                        "name": "addressDeAudit",
                        "type": "address"
                    },
                    {
                        "name": "indexVotingCenter",
                        "type": "uint256"
                    },
                    {
                        "name": "linkToCollationPhoto",
                        "type": "bytes"
                    },
                    {
                        "name": "voteMatrix",
                        "type": "uint256[]"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
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
                "name": "initiatedDeAuditData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "initiatedDeAuditData",
                        "type": "map(address,uint256)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "rootDeAudit",
                "type": "address"
            }
        ],
        "events": []
    },
    tvc: "te6ccgECOQEACtsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gs3BwQ4AQAFAvyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8Bjh34QyG5IJ8wIPgjgQPoqIIIG3dAoLnekyD4Y+DyNNgw0x8B+CO88rkPBgEU0x8B2zz4R27yfAgBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8CAIoIIIQYbm6xLvjAiCCEHtXi/a74wISCQRQIIIQZwTpoLrjAiCCEGi1Xz+64wIgghB3xbteuuMCIIIQe1eL9rrjAhAODAoC8DDTH/hEWG91+GTR2zwhwP+OKiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA+1eL9ozxYhzwt/yXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LHyHPC3/J+ERvFPsA4jDjAH/4Zws0ACT4RHBvcnBvcYBAb3T4ZPgnbxADljD4SG7jANTXDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f1w1/ldTR0NN/39cNf5XU0dDTf9/R2zzjAH/4ZzYNNACS+EUgbpIwcN74Qrry4Gb4AMjPkEurt5onzxQmzwv/Jc8L/yTPC/8jzwt/yCPPC3/NySH4SsjPhYjOAfoCcc8LaiHPFMlw+wBfCAImMPhIbuMA+Ebyc3H4ZtHbPH/4Zw80AN7tRNAg10nCAY4Y0//TP9MA+kD0BNH4a/hqf/ho+Gb4Y/hijkr0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqbfhrcAGAQPQO8r3XC//4YnD4Y3D4Zn/4aOIDQjD4SG7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zzjAH/4ZzYRNABm+EUgbpIwcN74Qrry4Gb4AMjPkbjnPPoizxbJIfhKyM+FiM4B+gJxzwtqIc8UyXD7AF8DBFAgghAuSki+u+MCIIIQPAT+qbvjAiCCEE+5H3C74wIgghBhubrEu+MCLCQbEwRQIIIQU3h7v7rjAiCCEFhiQti64wIgghBZycy1uuMCIIIQYbm6xLrjAhkXFhQCTDD6QZXU0dD6QN/XDX+V1NHQ03/f1wwAldTR0NIA39HbPOMAf/hnFTQAVPhFIG6SMHDe+EK68uBm+ABUcSDIz4WAygBzz0DOAfoCgGvPQMlw+wBfAwFUMNHbPPhKIY4djQRwAAAAAAAAAAAAAAAANnJzLWDIziHPFslw+wDef/hnNgOyMPhIbuMA+kGV1NHQ+kDfINdKwAGT1NHQ3tQg10vAAQHAALCT1NHQ3tTXDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f0ds84wB/+Gc2GDQAoPhFIG6SMHDe+EK68uBm+AAm+EuBAQv0CiCRMd7y4GfIz5EC2/F2Js8UJc8UJM8L/yPPC/8izwv/yVMXyM+FiM4B+gJxzwtqIc8UyXD7AF8IA0Qw+Ehu4wDXDf+V1NHQ0//f1w1/ldTR0NN/39HbPOMAf/hnNho0AGj4RSBukjBw3vhCuvLgZvgAyM+RPWwbYiLPC//JIfhKyM+FiM4B+gJxzwtqIc8UyXD7AF8DBFAgghBHvOtSuuMCIIIQShxdbbrjAiCCEEzzwb264wIgghBPuR9wuuMCIiAeHAKKMPpBldTR0PpA39cN/5XU0dDT/98g10vAAQHAALCT1NHQ3tQgxwGT1NHQ3tMf9ARZbwIB1w1/ldTR0NN/39HbPOMAf/hnHTQAfPhFIG6SMHDe+EK68uBm+ADIz5GZscCuJM8L/yPPFCJvIgLLH/QAyVMVyM+FiM4B+gJxzwtqIc8UyXD7AF8GA1Qw+Ehu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDX+V1NHQ03/f0ds84wB/+Gc2HzQAcPhFIG6SMHDe+EK68uBm+ADIz5C/78cWI88WyCPPFs3JIfhKyM+FiM4B+gJxzwtqIc8UyXD7AF8EA0Iw+Ehu4wD6QZXU0dD6QN/XDX+V1NHQ03/f0ds84wB/+Gc2ITQAZvhFIG6SMHDe+EK68uBm+ADIz5Cnqn4WIs8WySH4SsjPhYjOAfoCcc8LaiHPFMlw+wBfAwNCMPhIbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPOMAf/hnNiM0AGb4RSBukjBw3vhCuvLgZvgAyM+QerJlDiLPFskh+ErIz4WIzgH6AnHPC2ohzxTJcPsAXwMEUCCCEDGjBhu64wIgghAz1m8auuMCIIIQNNvhM7rjAiCCEDwE/qm64wIqKCclAlYw+kGV1NHQ+kDfINdLwAEBwACwk9TR0N7U1w1/ldTR0NN/39HbPOMAf/hnJjQAZPhFIG6SMHDe+EK68uBm+ADIz5ASBNr+Is8UyVMTyM+FiM4B+gJxzwtqIc8UyXD7AF8EAVYw0ds8+Eshjh6NBHAAAAAAAAAAAAAAAAAtNvhM4MjOIQH0AMlw+wDef/hnNgOIMPhIbuMA+kGV1NHQ+kDfINdLwAEBwACwk9TR0N7U1w3/ldTR0NP/39cN/5XU0dDT/9/XDX+V1NHQ03/f0ds84wB/+Gc2KTQAkvhFIG6SMHDe+EK68uBm+AAk+EuBAQv0CiCRMd7y4GfIz5GL3lvaJM8UI88L/yLPC//JUxXIz4WIzgH6AnHPC2ohzxTJcPsAXwYDRDD4SG7jANcN/5XU0dDT/9/XDX+V1NHQ03/f0ds84wB/+Gc2KzQAaPhFIG6SMHDe+EK68uBm+ADIz5Ha6bn+Is8L/8kh+ErIz4WIzgH6AnHPC2ohzxTJcPsAXwMEUCCCEA2/0ee64wIgghAa7MrwuuMCIIIQKVDeP7rjAiCCEC5KSL664wIzMS8tA2Aw+Ehu4wD6QZXU0dD6QN8g10vAAQHAALCT1NHQ3tTXDX+V1NHQ03/f0ds84wB/+Gc2LjQAgvhFIG6SMHDe+EK68uBm+AAi+EuBAQv0CiCRMd7y4GfIz5HAA+byIs8UyVMTyM+FiM4B+gJxzwtqIc8UyXD7AF8EA3Qw+Ehu4wD6QZXU0dD6QN8g10vAAQHAALCT1NHQ3tTXDf+V1NHQ0//f1w1/ldTR0NN/39HbPOMAf/hnNjA0AIr4RSBukjBw3vhCuvLgZvgAI/hLgQEL9AogkTHe8uBnyM+RyjN7OiPPFCLPC//JUxTIz4WIzgH6AnHPC2ohzxTJcPsAXwUDLjD4SG7jAPpBldTR0PpA39HbPNs8f/hnNjI0ADr4SfhKxwXy4Gb4APgjIfhLWMjL/1mBAQv0QfhrMANEMPhIbuMA1w3/ldTR0NP/39cNf5XU0dDTf9/R2zzjAH/4ZzY1NAAy+Eb4Q/hCyMv/yz/LAPhKzxb4SwH0AMntVABo+EUgbpIwcN74Qrry4Gb4AMjPkGs7Eaoizwv/ySH4SsjPhYjOAfoCcc8LaiHPFMlw+wBfAwA27UTQ0//TP9MA+kD0BNH4a/hqf/ho+Gb4Y/hiAQr0pCD0oTgAAA==",
};
module.exports = { ParticipantContract };