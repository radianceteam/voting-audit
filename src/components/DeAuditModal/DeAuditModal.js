import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {deAuditModalTrigger} from "../../store/slices/ModalSlice";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Paper,
    Stack,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {styled} from "@material-ui/core/styles";
import {useEffect} from "react";
import hex2ascii from "hex2ascii";

export default function DeAuditModal() {

    const curDeAudit = useSelector((state) => state.deAudit.curDeAudit)
    const opened = useSelector((state) => state.modal.deAuditModal)

    const dispatch = useDispatch()
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        border: "1px solid #ccc",
        boxShadow: "none",
        color: theme.palette.text.secondary,
    }));



    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [vcExp, setvcExp] = React.useState(false);
    const handleVcChange = (panel) => (event, isExpanded) => {
        setvcExp(isExpanded ? panel : false);
    };

    const [mbExp, setmbExp] = React.useState(false);
    const handleMbChange = (panel) => (event, isExpanded) => {
        setmbExp(isExpanded ? panel : false);
    };

    const [vpExp, setvpExp] = React.useState(false);
    const handleVpChange = (panel) => (event, isExpanded) => {
        setvpExp(isExpanded ? panel : false);
    };




    return (
        <div>
            <Dialog
                open={opened || false}
                fullWidth={true}
                onClose={() => dispatch(deAuditModalTrigger(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">
                    {curDeAudit.name}
                </DialogTitle>
                <DialogContent>
                    <Container maxWidth="sm">
                        <Stack spacing={2}>
                        <Box sx={{ p: 2, border: '1px dashed grey' }}>
                            <Stack spacing={1}>
                                <Typography variant={"h6"}>
                                    Token information
                                </Typography>
                                <Box>
                                    <Box>
                                        <Typography variant={"caption"}>Name: </Typography>
                                        {(curDeAudit.tokenData && curDeAudit.tokenData.name) || ""}
                                    </Box>
                                    <Box>
                                        <Typography variant={"caption"}>Symbol: </Typography>
                                        {(curDeAudit.tokenData && curDeAudit.tokenData.symbol) || ""}
                                    </Box>
                                    <Box>
                                        <Typography variant={"caption"}>Total supply: </Typography>
                                        {(curDeAudit.tokenData && Math.round(Number(curDeAudit.tokenData.total_supply)/10**curDeAudit.tokenData.decimals))|| ""}
                                    </Box>
                                </Box>
                            </Stack>

                        </Box>

                        <Box>
                            <Accordion  sx={{boxShadow: "none",border: "1px solid #ccc"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '50%', flexShrink: 0 }}>
                                        Candidates list
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack spacing={2}>
                                        {(curDeAudit.candidates && curDeAudit.candidates.map(candidate => {
                                            return <Item key={candidate.name}>
                                                {candidate.name} <br/>
                                                Vote count: {Number(candidate.votes)}
                                            </Item>
                                        })) || <Item>Not found</Item>}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion  sx={{boxShadow: "none", border: "1px solid #ccc"}} expanded={expanded === 'panel2' || String(expanded).indexOf("panel5") !== -1} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Districts list</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Stack spacing={2}>
                                        {(curDeAudit.districts && curDeAudit.districts.map(district => {
                                            return  <Accordion  sx={{boxShadow: "none", border: "1px solid #ccc"}} key={curDeAudit.districts.indexOf(district)} expanded={expanded === `panel5|${hex2ascii(district.name)}` || String(expanded).indexOf(`panel5|${hex2ascii(district.name)}`) !== -1} onChange={handleChange(`panel5|${hex2ascii(district.name)}`)}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2bh-content"
                                                    id="panel2bh-header"
                                                >
                                                    <Typography sx={{ width: '50%', flexShrink: 0 }}>{hex2ascii(district.name)}</Typography>

                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Stack spacing={2}>
                                                        {(curDeAudit.formated[district.id].municipalBodies && Object.keys(curDeAudit.formated[district.id].municipalBodies).map(mbID => {
                                                            let mb = curDeAudit.formated[district.id].municipalBodies[mbID]
                                                            return   <Accordion sx={{boxShadow: "none", border: "1px solid #ccc"}} key={mbID} expanded={mbExp === `panel5|${hex2ascii(district.name)}|${hex2ascii(mb.name)}` || String(expanded).indexOf(`panel5|${hex2ascii(district.name)}|${hex2ascii(mb.name)}`) !== -1} onChange={handleMbChange(`panel5|${hex2ascii(district.name)}|${hex2ascii(mb.name)}`)}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel2bh-content"
                                                                    id="panel2bh-header"
                                                                >
                                                                    <Typography sx={{ width: '50%', flexShrink: 0 }}>{hex2ascii(mb.name)}</Typography>

                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Stack spacing={2}>
                                                                        {(curDeAudit.formated[district.id].municipalBodies[mbID].votingPools && Object.keys(curDeAudit.formated[district.id].municipalBodies[mbID].votingPools).map(vpID => {
                                                                            let vp = curDeAudit.formated[district.id].municipalBodies[mbID].votingPools[vpID]
                                                                            return   <Accordion sx={{boxShadow: "none", border: "1px solid #ccc"}} key={vpID} expanded={vcExp === `panel5|${hex2ascii(district.name)}|${hex2ascii(mb.name)}|${hex2ascii(vp.name)}`} onChange={handleVcChange(`panel5|${hex2ascii(district.name)}|${hex2ascii(mb.name)}|${hex2ascii(vp.name)}`)}>
                                                                                <AccordionSummary
                                                                                    expandIcon={<ExpandMoreIcon />}
                                                                                    aria-controls="panel2bh-content"
                                                                                    id="panel2bh-header"
                                                                                >
                                                                                    <Typography sx={{ width: '50%', flexShrink: 0 }}>{hex2ascii(vp.name)}</Typography>

                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                    <Stack spacing={2}>
                                                                                        {(curDeAudit.formated[district.id].municipalBodies[mbID].votingPools[vpID].votingCenters && Object.keys(curDeAudit.formated[district.id].municipalBodies[mbID].votingPools[vpID].votingCenters).map(vcID => {
                                                                                            let vc = curDeAudit.formated[district.id].municipalBodies[mbID].votingPools[vpID].votingCenters[vcID]
                                                                                            return <Item key={vcID}>
                                                                                                {hex2ascii(vc.name)}
                                                                                                <br/>
                                                                                                Location: {hex2ascii(vc.location)}
                                                                                                <br/>
                                                                                                Act4 count: {vc.act4Arr.length}
                                                                                                <br/>
                                                                                                Votes count: {vc.votes.length}
                                                                                            </Item>
                                                                                        })) || <Item>Not found</Item>}
                                                                                    </Stack>
                                                                                </AccordionDetails>
                                                                            </Accordion>
                                                                        })) || <Item>Not found</Item>}
                                                                    </Stack>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        })) || <Item>Not found</Item>}
                                                    </Stack>
                                                </AccordionDetails>
                                            </Accordion>
                                        })) || <Item>Not found</Item>}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        </Stack>
                    </Container>

                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(deAuditModalTrigger(false))}>Close</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
    //<Button onClick={() => dispatch(deAuditModalTrigger(false))}>Agree</Button>
}