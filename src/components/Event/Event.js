import React from 'react';
import {makeStyles, Paper, Grid, Typography, Button} from '@material-ui/core';
import Header from "../Navigation/Header/Header";
import Home from "../../assets/Image/Home.png"
import users from "../../assets/Icons/users.svg"
import virus from "../../assets/Icons/virus.svg"
import measures from "../../assets/Icons/measured.svg"
import incognito from "../../assets/Icons/incognito.svg"
import rating from "../../assets/Icons/rating.svg"
import instagram from "../../assets/Icons/instagram.svg"
import twitter from "../../assets/Icons/twitter.svg"
import DehazeIcon from '@material-ui/icons/Dehaze';
import Line from "../../assets/Icons/Rectangle 16.svg"
import Pin from "../../assets/Icons/pin.svg"
import House from "../../assets/Icons/home (2).svg"
import Distance from "../../assets/Icons/distance.svg"
import Rating from "./Rating.js"

const useStyles = makeStyles((theme) => ({
    image:{
        width: "100%",
        height: "100vh",
        zIndex: "-5",
        backgroundSize: "100% 100%",
    },
    Paper: {
        marginTop: "20vh",
        padding: theme.spacing(4, 7, 4, 7),
        width: "60%",
        borderRadius: 12,
    },
    Button: {
        background: "#FAAF31",
        borderColor: "#FAAF31",
        margin: theme.spacing(1, 0, 0, 0),
        color: "white",
        width: '100%',
    },
    social: {
        width: "15px",
        padding: theme.spacing(0.5),
    },
    heading: {
        color: "#8A929D"
    },
    list: {
        width: "20px",
        margin: theme.spacing(0, 1, -1, 0),
    },
    listText: {
        color: "#8A929D"
    }
}))

export default function Event(){
    const classes = useStyles();

    return(
        <div>
        <Header>
        <div style={{width: '100%', height: "100vh",position: "relative"}}>
            <div style = {{position:"absolute", width: '100%', height: "100%", }}>
            <Grid container
            justify="center"
            alignItems="center"
            style={{zIndex:"2", position:"relative"}}>
                <Grid item lg={7} md={7} xs={12}>
                    <div style={{color:"white", marginLeft: "10vw", marginTop: "10vh"}}>
                        <Typography variant="h4">
                            $30
                        </Typography>
                        <Typography variant="h4">
                            Rockin' Rollick
                        </Typography>
                        <Typography variant="h5" style={{color: "#8A929D"}}>
                            New York Lab | 28 Dec
                        </Typography>
                        <Typography variant="h6">
                            <img src={Line} style={{width: "25px", marginBottom: "-30px", marginLeft:"-5px"}}/>
                            <img src={Pin} style={{width:"15px", marginRight: "8px"}}/>
                            Houston
                        </Typography>
                        <Typography variant="h6">
                            <br />
                            <img src={House} style={{width:"20px", marginBottom: "-4px", marginRight: "8px", marginTop:"5px"}}/>
                            33 Saint Marks Ave
                        </Typography>
                        <Typography variant="h6">
                            <br />
                            <img src={Distance} style={{width:"20px", marginBottom: "-4px", marginRight: "8px", marginTop:"5px"}}/>
                            You're 2km away from the party
                        </Typography>
                    </div>

                </Grid>

                <Grid item lg={5} md={5} xs={12}>
                <div align="center">
                <Paper className={classes.Paper}>
                    <div align="left">
                        <div align="right">
                            <img src={instagram} className={classes.social} />
                            <img src={twitter} className={classes.social} />
                        </div>
                    <div>
                        <Typography variant="h6">
                        <DehazeIcon style={{marginRight: "5px", marginBottom: "-5px"}} />
                        About
                        </Typography>
                    </div>
                    <Typography variant="body2" className={classes.heading}>
                    Come Experience Rockin' Rollick and New York Lab. Ladies free before 11pm. turn up with DJ Calypso at the rooftop bar in Flatbush!
                    </Typography>
                    <br/>
                    <div>
                        <Typography variant="body2" className={classes.listText}>
                        <img src = {users} className={classes.list} />
                         Crowd Control : <span style={{color: "black"}}>Packed</span>
                        </Typography>
                        <br />
                        <Typography variant="body2" className={classes.listText}>
                        <img src = {virus} className={classes.list} />
                        Covid Cautious Status : <span style={{color: "black"}}>Safe</span>
                        </Typography>
                        <br />
                        <Typography variant="body2" className={classes.listText}>
                        <img src = {measures} className={classes.list} />
                        Size of Venue : <span style={{color: "black"}}>50sqft</span>
                        </Typography>
                        <br />
                        <Typography variant="body2" className={classes.listText}>
                        <img src = {incognito} className={classes.list} />
                        Privacy : <span style={{color: "black"}}>Public</span>
                        </Typography>
                        <br/>
                        <Typography variant="body2" className={classes.listText}>
                        <img src = {rating} className={classes.list} />
                        Vibe : <span style={{color: "black"}}>Turntup</span>
                        </Typography>

                        <br />
                    </div>
                    <div align="center">
                    <Rating />
                    </div>
                    </div>
                </Paper>
                </div>
                </Grid>
            </Grid>
            
            </div>
            <img src={Home} className={classes.image} />
    
        </div>
        </Header>
        </div>

    )
};