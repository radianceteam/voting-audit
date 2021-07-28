import * as React from 'react';
import {createTheme, styled, ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {FormControl, Grid, InputLabel, MenuItem, Select, Skeleton, useMediaQuery} from "@material-ui/core";
    import {getAllDeAudits} from "./sdk";
import {useEffect} from "react";
import DeAuditGrid from "./components/DeAuditGrid/DeAuditGrid";
import { useSelector, useDispatch } from 'react-redux'
import {setDeAudits} from "./store/slices/DeAuditsSlice";
import DeAuditModal from "./components/DeAuditModal/DeAuditModal";


function App() {


    const keys = useSelector((state) => state.deAudit.deAudits)
    const dispatch = useDispatch()

    async function fetchDeAudits() {
        let f = await getAllDeAudits();
        console.log(5675656756,f);
        dispatch(setDeAudits(f));
    }

    useEffect(async () => {
        if(keys.length === 0) await fetchDeAudits();
    }, [keys])


  return (
<>
    <DeAuditGrid/>
    <DeAuditModal/>
</>

  );
}

export default App;
