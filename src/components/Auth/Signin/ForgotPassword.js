import React from 'react';
import {Modal, TextField, Typography, Paper, Link, makeStyles, Button} from '@material-ui/core';
import Send from "../../../assets/Icons/send.svg";
import Close from "../../../assets/Icons/Cross.svg";

const useStyles = makeStyles((theme) => ({
    link: {
        FontSize: "16px",
        color: "#8A929D",
    }, 
    Paper: {
        position: "absolute",
        width: "43%",
        height:"64%",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
    heading: {
        FontSize: "40px",
    },
    text: {
        marginTop: "2%",
        width: "100%",
    },
    Button: {
        background: "#FAAF31",
        borderColor: "#FAAF31",
        margin: theme.spacing(3, 0, 2, 0),
        color: "white"
    },
    body: {
        marginTop: "2%",
        color: "#8A929D",
        width: "90%"
    }
}))

export default function ForgotPassword() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <Paper className={classes.Paper}>
            <div align="right" style={{margin: "5px"}}>
            <img src={Close} style={{ width:"1vw"}}/>
            </div>
            <div style={{ margin: "5%"}}>
            <Typography variant="h4" className={classes.heading}>
                Forgot password? Let's help you reset it
            </Typography>
            <Typography variant="body2" className={classes.body}>
                enter your email address and we will send you the link to reset the password 
            </Typography>
            <br />
            <Typography variant = "body2">
                Email Address
            </Typography>
            <TextField variant = "outlined" 
            placeholder = "Type your email address here"
            className={classes.text}
            /> 
            <Button variant="outlined" className={classes.Button}>Send <img src={Send} style={{marginLeft:"5px", width:"1.5vw"}}/></Button>
            </div>
        </Paper>
    );

    return (
      <div>
        <Typography variant="body2">
            <Link onClick={handleOpen} className={classes.link} href="#">
                Forgot your password?
            </Link>
        </Typography>

        <Modal
        open={open}
        onClose={handleClose}
        >
            {body}
        </Modal>
      </div>
    )
}