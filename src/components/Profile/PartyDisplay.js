import React from 'react';
import Logo from "../../assets/Icons/Icon.svg";
import {Grid, Typography, makeStyles, Button} from '@material-ui/core';
import ProfileCard from "./ProfileCard";
import PartyCard from './PartyCard';
import PartyImage1 from '../../assets/Image/PartyCardImage1.png'
import PartyImage2 from '../../assets/Image/PartyCardImage2.png'
import FireIcon from "../../assets/Icons/Mask Group 17.svg";
import TrashIcon from "../../assets/Icons/Mask Group 14.svg";

const useStyles = makeStyles((theme) => ({
    button: {
        background: "#FAAF31",
        borderColor: "#FAAF31",
        padding: theme.spacing(2),
        color: "white",
        '&:hover': {
            background: "#FAAF31",
            borderColor: "#FFFFFF"
        },
    },
    cardGrid:{
        margin: theme.spacing(2,0,2,0)
    }
}));

export default function PartyDisplay() {
    const classes = useStyles();


    return(
        <div>
             <div>
                 <Grid container
                 justify="space-between"
                 style={{paddingLeft:"3%", paddingRight: "3%"}}
                 >
                     <Grid item>
                        <Typography variant = "h4">My Parties</Typography>
                     </Grid>
                     <Grid item>
                        <div style = {{width: "100%"}}>
                        <Button variant = "outlined" 
                        className = {classes.button} 
                        href="/create"
                        >
                            Create a party
                        </Button>
                        </div>
                      </Grid>
                    </Grid>
                            <Grid container direction = "row" justify = "space-evenly" alignItems = "center">
                                <Grid item lg = {5} xs = {12} md = {5} className = {classes.cardGrid} >
                                    <div style = {{}} >
                                        <PartyCard 
                                        image = {PartyImage1} 
                                        price = "$30.00" 
                                        icon = {FireIcon}
                                        review = "Great"
                                        month = "Dec"
                                        date ="25"
                                        location = "New York"
                                        title = "Sumerella"
                                        details = "Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                                        />
                                    </div>
                                </Grid>
                                <Grid item lg = {5} xs = {12} md = {5} className = {classes.cardGrid}>
                                <div style = {{}} >
                                        <PartyCard 
                                        image = {PartyImage2}
                                        price = "$10.00"    
                                        icon = {TrashIcon}
                                        review = "Trash Asf"
                                        month = "Dec"
                                        date ="26"
                                        location = "Queens"
                                        title = "KaBoom Night"
                                        details = "Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div style = {{}}>
                            <Button variant = "outlined" className = {classes.button}
                            style ={{
                                backgroundColor: "#FFEAC5", 
                                color: "#EB9700", 
                                borderColor: "#FFEAC5",
                                marginLeft: "10%"
                                }} >
                                Load more parties
                            </Button>
                        </div>
                </div>
    )
}