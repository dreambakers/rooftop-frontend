import React from 'react';
import SignupImage from "../../../assets/Image/Signup.png";
import Logo from "../../../assets/Icons/Icon.svg";
import Facebook from "../../../assets/Icons/Facebook.svg";
import Google from "../../../assets/Icons/Google.svg";
import {Grid, TextField, Typography, makeStyles, Button} from '@material-ui/core';
import ForgotPassword from "./ForgotPassword.js";


const useStyles = makeStyles((theme) => ({
    form:{
        padding: theme.spacing(0),
        width: "70%",
    },
    image: {
        width: "100%",
        maxHeight: "100vh",
        zIndex: "-5",
    },
    Button: {
        background: "#FAAF31",
        borderColor: "#FAAF31",
        margin: theme.spacing(2, 0, 2, 0),
    },
    text: {
        width: "100%",
    },
    rectangle: {
        background: 'black',
        position:"absolute", 
        width: '100%', 
        height: "100%", 
        opacity:"0.55",
        //zIndex: "1"
    },
    signup: {
        color: "white",
        borderColor: "gray",
        background: "gray",
        margin: theme.spacing(2, 0, 0, 0),
    },
    logo: {
        height: "95px",
        zIndex: "9999",
        position:"relative",
    },
    icons: {
        width: "10%",
        margin: theme.spacing(1, 2, 0, 0),
    }
}));

export default function Signup() {
    const classes = useStyles();
    return(
        <Grid container 
        justify="center"
        alignItems="center"
        >
            <Grid container 
            direction="column"
            justify="center"
            alignItems="center"
            lg={7} md={7}>
                <Grid item className={classes.form} >
                    <Typography variant = "h4" align="center">Welcome, Sign in and turn up!</Typography>
                    <div align="center">
                        <img src={Facebook} className={classes.icons}></img>
                        <img src={Google} className={classes.icons}></img>
                        <Typography variant="subtitle2" style ={{color:"#8A929D", paddingTop:"20px"}}> or sign in with your email</Typography>
                    </div>
                    <br />
                    <Typography variant = "overline">Username</Typography> <br />
                    <TextField variant = "outlined" 
                    placeholder = "Type your username here"
                    className={classes.text}
                    />
                    <br />
                    <Typography variant = "overline">Create a password</Typography> <br />
                    <div align="right">
                    <ForgotPassword />
                    </div>
                    <TextField variant = "outlined" 
                    placeholder = "Type your password here"
                    className={classes.text}
                    /> 
                    <br />
                    <Grid item>
                    <div align="center">
                        <Button variant = "outlined" className={classes.Button}>Sign In</Button>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={5} md={5}>
                <div style={{width: '100%', maxHeight: "100vh",position: "relative"}}>
                    <div className={classes.rectangle}></div>
                    <div style = {{position:"absolute", width: '100%', height: "100%", }}>
                        <div align="right">
                            <img src={Logo} className={classes.logo}  style={{}}></img>
                        </div>
                        <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{paddingTop:"30vh", zIndex:"2", position:"relative"}}
                        >
                            <Grid item>
                                <Typography variant="h5" style={{FontSize: "40px", color: "white"}}>
                                    Hello, Friend!
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2" style={{marginTop:"5px", FontSize: "20px", color: "white"}}>
                                    Not a rooftop member yet?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.signup} 
                                href="/signup">
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <img src={SignupImage} className={classes.image}></img>
                </div>
            </Grid>
        </Grid>
    )
}
