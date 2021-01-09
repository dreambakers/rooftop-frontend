import React from 'react';
import Logo from "../../assets/Icons/Icon.svg";
import {Grid, Typography, makeStyles, Button, Divider} from '@material-ui/core';
import ProfileCard from "./ProfileCard";

const useStyles = makeStyles((theme) => ({
    profileGrid:{
        margin: theme.spacing(0,0,0,5),
        backgroundColor: "white",
        borderRadius: "20px",
    },
    profile:{
        height: "100%",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        borderBottomColor: "#F7F8FC"
    },
    myParties: {
        padding: theme.spacing(10),
        width: "70%"

    },
    bio:{
        backgroundColor: "#FFF6EB", 
        padding: theme.spacing(2),
        borderRadius: "10px",
        color: "#8A929D"
    },
    profileText:{
        color: "#8A929D", 
        textDecoration: "underline", 
        marginTop: "3%"
    },
    Button: {
        background: "#FAAF31",
        borderColor: "#FAAF31",
        margin: theme.spacing(2, 0, 2, 0),
        color: "white",
        // width:  "250px",
        // height: "70px",
        '&:hover': {
            background: "#FAAF31",
            borderColor: "#FFFFFF"
        }
    },
}));

export default function Profile() {
    const classes = useStyles();


    return(
            <Grid container 
            direction = "column"
            alignItems = "stretch"
            justify = "flex-start"    
            >
            <div style = {{width:"100%",backgroundColor: "#F7F8FC", height: "100vh", position: "absolute"}}>
            </div>
            <div style={{position: "relative"}}>
                {/* Logo */}
                <Grid container justify = "flex-end">
                    <Grid item >
                        <img src = {Logo} style ={{height: "70px"}} /> 
                    </Grid>
                </Grid>
                {/* Body  */}
                <Grid container direction = "row">
                    <ProfileCard />
                    <Grid item >
                    </Grid>
                </Grid>
            </div>
            </Grid>
    )
}