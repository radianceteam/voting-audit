import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {
    CircularProgress,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Skeleton
} from "@material-ui/core";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {getDeAudit} from "../../sdk";
import moment from "moment";
import {deAuditModalTrigger} from "../../store/slices/ModalSlice";
import {setCurDeAudit} from "../../store/slices/DeAuditsSlice";

function DeAuditGrid() {

    const deAudits = useSelector((state) => state.deAudit.deAudits)
    console.log(deAudits)
    const locked = useSelector((state) => state.deAudit.locked)
    const dispatch = useDispatch()
    const [deAudit, setDeAudit] = React.useState("")
    const [deAuditData, setDeAuditData] = React.useState({})
    function computeStatus(deAudit) {
        /*
        colPeriodRaw: 60
colStake: "3000000000"
dataDeAudit: "0:a3a7788399daf465b83835c2bbc06daaf43cadb5ccee019b12d642095a0cd339"
districts: (2) [{…}, {…}]
districtsKeys: (2) ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002"]
formated: {0x0000000000000000000000000000000000000000000000000000000000000001: {…}, 0x0000000000000000000000000000000000000000000000000000000000000002: {…}}
municipalBodys: (4) ["MunicipalBody A1", "MunicipalBody A2", "MunicipalBody B1", "MunicipalBody B2"]
name: "Voting DeAudit TEST # 1, deploed: 20 Jul 2021 19:50:24"
rootDeAudit: "0:aaa43758f17b6ad589924ed8dad5b7bbfcfbdbb6661135944f435b93ae542efe"
sequentialNumber: "1"
timeStart: "20.07.2021, 19:50:24"
timeStartRaw: 1626799824
tokenData: {name: "DemocracyToken 1", symbol: "DT 1", decimals: "9", root_public_key: "0x0000000000000000000000000000000000000000000000000000000000000000", root_owner_address: "0:56769171fc62f13bee3ae14d098aa12fb0c690a4f3b87bbf6036b87920acd7e2", …}
tokenDeAudit: "0:7ced6bb4f065caf07a887cf4c2ba2f81e149af9c624af35ceb1389c965ba2e08"
valPeriod: "30 d. 00 h. 00 m. 00 s."
valPeriodRaw: 2592000
valStake: "1000000000"

         */

        let now = Date.now();
        let start = deAudit.timeStartRaw * 1000;
        let colPeriod = deAudit.colPeriodRaw * 1000;
        let valPeriod = deAudit.valPeriodRaw * 1000;
        let colEnd = start + colPeriod;
        let valEnd = colEnd + valPeriod;
        let status = ``

        if(now < start) status = `Wait to start`
        if(now < colEnd && now > start) status = `Collation period`
        if(now > colEnd && now < valEnd) status = `Validation period`
        if(now > valEnd) status = `Ended`
        return status;
    }
    const handleChange = (event) => {
        setDeAudit(event.target.value);
    };
    //
    // useEffect(async () => {
    //     console.log(deAudit, deAuditData)
    //     if(deAudit.length === 66) {
    //         let res = await getDeAudit(deAudit)
    //         setDeAuditData(res);
    //
    //     }
    // }, [deAudit])

    let list = [];
    let triggered = true;

    function openModal(val) {
        console.log(val)
        dispatch(setCurDeAudit(val))
        dispatch(deAuditModalTrigger(true))
    }

    for(let val of deAudits) {
        triggered = false;
        list.push(
            <Grid key={val.address} item>
                <Card onClick={() => openModal(val)} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title={
                            val.name
                        }
                        subheader={<>
                            {val.timeStart}
                            <br/>
                            Status: {computeStatus(val)}
                        </>}


                    />

                    <CardContent>
                        <Typography variant="h6">
                            Collation period
                            {
                                <Typography variant="subtitle2" color="text.secondary">{val.colPeriod}</Typography>
                            }

                        </Typography>
                        <Typography variant="h6">
                            Validation period
                            {

                                <Typography variant="subtitle2" color="text.secondary">{val.valPeriod}</Typography>
                            }

                        </Typography>
                        <Typography variant="h6">
                            Collation stake
                            {

                                <Typography  variant="subtitle2" color="text.secondary">{Number((val.colStake / 1e9).toFixed(2)).toLocaleString()}
                                    <img width={13} src={"data:image/png;base64,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"}/>
                                </Typography>
                            }

                        </Typography>
                        <Typography variant="h6">
                            Validation stake
                            {

                                <Typography variant="subtitle2" color="text.secondary">{Number((val.valStake / 1e9).toFixed(2)).toLocaleString()}
                                    <img width={13} src={"data:image/png;base64,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"}/>
                                </Typography>
                            }

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
        <Container sx={{display: 'flex', justifyContent: 'center', paddingTop: '24px'}}>
            {triggered === true && <CircularProgress/>}
            {triggered === false && <Grid container spacing={2}>

                {list.map(val =>
                {
                    return (val)
                })}
            </Grid> }
        </Container>
            </>
    );
}

export default DeAuditGrid;
