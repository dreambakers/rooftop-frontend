import React from 'react';
import {Modal, TextField, Typography, Paper, Link, makeStyles, Button} from '@material-ui/core';
import Send from "../../../assets/Icons/send.svg";
import Close from "../../../assets/Icons/Cross.svg";
import SendTick from "../../../assets/Icons/resetTick.svg";
import SendBig from "../../../assets/Icons/sendBig.svg";

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
    },
    send: {
        height:"44%",
        width:"24%",
    }
}));

export default function ForgotPassword() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const onSendClick = () => {
        handleClose();
        handleOpen1();
    }

    const onNextClick = () => {
        handleClose1();
        handleOpen2();
    }

    const onCloseClick = () => {
        handleClose();
        handleClose1();
        handleClose2();
    }

    const body = (
        <Paper className={classes.Paper}>
            <div align="right" style={{margin: "5px"}}>
                <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} />
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
                <Button variant="outlined" className={classes.Button} onClick ={onSendClick}>
                    Send 
                    <img src={Send} style={{marginLeft:"5px", width:"1.5vw"}}/>
                </Button>
            </div>
        </Paper>
    );
    
    const body1 = (
        //height = 42%  width = 43%
        <Paper className={classes.Paper} style ={{height: "42%"}}>
            <div align="right" style={{margin: "5px"}}>
                <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} />
            </div>
            <div style={{ margin: "5%"}}>
                <Typography variant = "h4" className = {classes.heading}>
                    Reset link sent to your email
                    <img src = {SendTick} style ={{marginLeft: "20px", width: "3vw"}}/>
                </Typography>
                <Typography variant = "body2" className = {classes.body} >
                    Please check your inbox and click on the link to rest your password
                </Typography>
                <Button variant="outlined" className={classes.Button} onClick ={onNextClick}>
                    Next
                </Button>
                <img src = {SendBig} className ={classes.send} align = "right" />
            </div>
            
        </Paper>
    );

    const body2 = (
        <Paper className ={classes.Paper}>
            <div align="right" style={{margin: "5px"}} >
                <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} />
            </div>
            <div style={{ margin: "5%"}}>
                <Typography variant = "h4" className = {classes.heading}>
                    Create a new password    
                </Typography>
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
                    <Button variant="outlined" className={classes.Button} >
                        Reset Password
                    </Button>
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

        <Modal open={open} onClose={handleClose}>
            {body}
        </Modal>

        <Modal open={open1} onClose={handleClose1}>
            {body1}
        </Modal>

        <Modal open={open2} onClose={handleClose2}>
            {body2}
        </Modal>
      </div>
    )
}