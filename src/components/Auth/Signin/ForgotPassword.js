import React from "react";
import {
  Modal,
  TextField,
  Typography,
  Paper,
  Link,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import Send from "../../../assets/Icons/send.svg";
import Close from "../../../assets/Icons/Cross.svg";
import SendTick from "../../../assets/Icons/resetTick.svg";
import SendBig from "../../../assets/Icons/sendBig.svg";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  link: {
    FontSize: "16px",
    color: "#8A929D",
    marginTop: "",
  },
  Paper: {
    position: "absolute",
    width: "65%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    borderRadius: "20px",
    padding: theme.spacing(0),
  },
  heading: {
    FontSize: "40px",
    fontFamily: "EuclidCircularB",
    fontWeight: 700,
    marginBottom: "20px",
  },
  text: {
    //marginTop: "2%",
    width: "100%",
    paddingBottom: "20px",
    marginTop: "-20px",
  },
  Button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    margin: theme.spacing(3, 0, 2, 0),
    color: "white",
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
  body: {
    marginTop: "2%",
    color: "#8A929D",
    width: "90%",
  },
  send: {
    height: "44%",
    width: "24%",
  },
  modal: {
    "&:focus": {
      borderColor: "white",
    },
  },
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
  };

  const onNextClick = () => {
    handleClose1();
    handleOpen2();
  };

  const onCloseClick = () => {
    handleClose();
    handleClose1();
    handleClose2();
  };

  const body = (
    <Paper className={classes.Paper}>
      <div align="right" style={{ margin: "5px" }}>
        {/* <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} /> */}
        <IconButton onClick={onCloseClick}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <div style={{ margin: "2%" }}>
        <Typography variant="h4" className={classes.heading}>
          Forgot password? Let's help you reset it
        </Typography>
        <Typography variant="body2" className={classes.body}>
          enter your email address and we will send you the link to reset the
          password
        </Typography>
        <br />
        <Typography variant="body2">Email Address</Typography>
        <TextField
          variant="outlined"
          placeholder="Type your email address here"
          className={classes.text}
          style={{ marginTop: "2%" }}
        />
        <Button
          variant="outlined"
          className={classes.Button}
          onClick={onSendClick}
        >
          Send
          <img src={Send} style={{ marginLeft: "5px", width: "16px" }} />
        </Button>
      </div>
    </Paper>
  );

  const body1 = (
    //height = 42%  width = 43%
    <Paper className={classes.Paper}>
      <div align="right" style={{ margin: "5px" }}>
        {/* <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} /> */}
        <IconButton onClick={onCloseClick}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <div style={{ margin: "5%" }}>
        <Typography variant="h4" className={classes.heading}>
          Reset link sent to your email
          <img src={SendTick} style={{ marginLeft: "20px", width: "20px" }} />
        </Typography>
        <Typography variant="body2" className={classes.body}>
          Please check your inbox and click on the link to rest your password
        </Typography>
        <Button
          variant="outlined"
          className={classes.Button}
          onClick={onNextClick}
        >
          Next
        </Button>
        <img src={SendBig} className={classes.send} align="right" />
      </div>
    </Paper>
  );

  const body2 = (
    <Paper className={classes.Paper}>
      <div align="right" style={{ margin: "5px" }}>
        {/* <img src={Close} style={{ width:"1vw"}} onClick ={onCloseClick} /> */}
        <IconButton onClick={onCloseClick}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <div style={{ margin: "5%" }}>
        <Typography variant="h4" className={classes.heading}>
          Create a new password
        </Typography>
        <Typography variant="body2">Create a password</Typography> <br />
        <TextField
          variant="outlined"
          placeholder="Type your password here"
          className={classes.text}
          style={{ marginTop: "2%" }}
        />
        <br />
        <Typography variant="body2">Confirm password</Typography> <br />
        <TextField
          variant="outlined"
          placeholder="Type your password here"
          className={classes.text}
          style={{ marginTop: "0%" }}
        />
        <br />
        <Button variant="outlined" className={classes.Button}>
          Reset Password
        </Button>
      </div>
    </Paper>
  );
  return (
    <div>
      <Typography variant="body2">
        <Link
          align="right"
          onClick={handleOpen}
          className={classes.link}
          href="#"
        >
          Forgot your password?
        </Link>
      </Typography>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>

      <Modal open={open1} onClose={handleClose1} className={classes.modal}>
        {body1}
      </Modal>

      <Modal open={open2} onClose={handleClose2} className={classes.modal}>
        {body2}
      </Modal>
    </div>
  );
}
