import React from 'react';
import Logo from "../../assets/Icons/Icon.svg";
import {Grid, Typography, makeStyles, Button, TextField, Slider, Switch, FormControlLabel} from '@material-ui/core';
import ProfileCard from "./ProfileCard";
import EditForm from "./EditForm";import Footer from "../Navigation/Footer/Footer";


const useStyles = makeStyles((theme) => ({
}))

export default function Edit() {
    const classes = useStyles();


    return(
            <div style={{position: "relative", width:"100%",backgroundColor: "#F7F8FC"}}>
                {/* Logo */}
                <Grid container justify = "flex-end">
                    <Grid item >
                        <img src = {Logo} style ={{height: "70px"}} /> 
                    </Grid>
                </Grid>
                {/* Body  */}
                <Grid container
                justify="space-evenly"
                alignItems="flex-start"
                >
                    <Grid item xs={10} sm={10} md={3} lg={3}>
                        <ProfileCard />
                    </Grid>
                    <Grid item lg={8} sm={10} md={8} xs={10}>
                        <EditForm />
                    </Grid>
                </Grid>
                <Footer />
                </div>

    )
}