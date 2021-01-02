import React from 'react';
import LoginImage from "../../../assets/Image/Login.png";
import Logo from "../../../assets/Icons/Icon.svg";
import {Grid, TextField, Typography, makeStyles, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    form:{
        padding: theme.spacing(0),
        width: "70%",
    },
    image: {
        width: "100%",
        maxHeight: "100vh",
        zIndex: "-5"
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
    }
}));

export default function Login() {
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
                    <Typography variant = "h4" align="center">Fun made easy, join to discover parties in NYC</Typography>
                    <Typography variant = "overline">Username</Typography> <br />
                    <TextField variant = "outlined" 
                    placeholder = "Type your username here"
                    className={classes.text}
                    />
                     <br />
                    <Typography variant = "overline">Email address</Typography> <br />
                    <TextField variant = "outlined" 
                    placeholder = "Type your email address here"
                    className={classes.text}
                    /> 
                    <br />
                    <Typography variant = "overline">Create a password</Typography> <br />
                    <TextField variant = "outlined" 
                    placeholder = "Type your password here"
                    className={classes.text}
                    /> 
                    <br />
                    <Typography variant = "overline">Confirm password</Typography> <br />
                    <TextField variant = "outlined" 
                    placeholder = "Type your password here"
                    className={classes.text}
                    /> 
                    <br />
                    <Grid item>
                    <div align="center">
                        <Button variant = "outlined" className={classes.Button}>Sign up</Button>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={5} md={5}>
                <div style={{width: '100%', maxHeight: "100vh",position: "relative"}}>
                <div className={classes.rectangle}></div>
                <div style ={{position:"absolute", width: '100%', height: "100%",}}>
                    <div align="right">
                        <img src={Logo} className={classes.logo}></img>
                    </div>
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{paddingTop:"30vh"}}
                    >
                        <Grid item>
                            <Typography variant="h5" style={{FontSize: "40px", color: "white"}}>
                                Welcome to Rooftop!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" style={{marginTop:"5px", FontSize: "20px", color: "white"}}>
                                Already a member?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className={classes.signup} 
                            href="/">
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <img src={LoginImage} className={classes.image}></img>
                </div>
            </Grid>
        </Grid>
    )
}
