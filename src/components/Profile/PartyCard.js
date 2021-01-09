import React from 'react';
import {makeStyles, Button, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    imageDiv:{
        position: "relative",
        width: "100%",
        zIndex: 1
    },
    button:{
        backgroundColor: "white",
        color: "black",
    },
    icon:{

    },
}))

export default function PartyCard(props){
    const classes = useStyles();
    return(
        <div style = {{width: "100%", borderRadius: "10px"}}>
            <div className = {classes.imageDiv}>
                <div style ={{position:"absolute",   height: "100%", zIndex: 2}}>
                    <Typography variant = "body2" className = {classes.button}>
                        {props.price}
                        <span align = "right" className ={classes.button}> <img src = {props.icon} className = {classes.icon} /> {props.review} </span>
                    </Typography>
                    
                </div>
                 <img src ={props.image}/>
            </div>
        </div>
    )
}