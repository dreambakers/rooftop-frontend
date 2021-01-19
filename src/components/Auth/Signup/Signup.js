import React from "react";
import axios from 'axios';
import LoginImage from "../../../assets/Image/Login.png";
import Logo from "../../../assets/Icons/Icon.svg";
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(0),
    width: "70%",
  },
  image: {
    width: "100%",
    height: "100vh",
    zIndex: "-5",
    backgroundSize: "100% 100%",
    objectFit: "cover",
  },
  Button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    margin: theme.spacing(2, 0, 2, 0),
    color: "white",
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
  text: {
    width: "100%",
    paddingBottom: "20px",
    marginTop: "-20px",
  },
  rectangle: {
    background: "black",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "0.55",
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
    position: "relative",
  },
}));


export default function Login(props) {
  const classes = useStyles();
  
  const [error, setError] = React.useState(false)
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  //const [token, setToken] = React.useState("");

  const {history} = props;

  function onSubmit(e) {
    e.preventDefault();

    const URL = "https://rooftop-api.herokuapp.com/auth/"
    const verifySignupURL = "https://rooftop-api.herokuapp.com/auth/verifySignup"
    const sendEmailURL = "https://rooftop-api.herokuapp.com/auth/sendSignupVerificationEmail";

    const user = {
      "username": username,
      "password": password,
      "email": email,
    };

    const verifyEmail = {
      "email": email,
    }



    if(password == confirmPass){
      //console.log(adecodedToken);
      //console.log(isExpired);
      
      axios.post(sendEmailURL, verifyEmail)
      .then((res, req) => {
        console.log(res);
        console.log(props);
        console.log(req);
        
      }).catch (e => console.log(e));
      
     

    }
    else{
      setError(true)
    }
  }

  return (
    <Grid container justify="center" alignItems="center">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={7}
        md={7}
      >
        <Grid item className={classes.form}>
          <Typography
            variant="h4"
            align="center"
            style={{
              fontFamily: "EuclidCircularB",
              fontWeight: 900,
              marginTop: "5%",
            }}
          >
            Fun made easy, join to discover parties in NYC
          </Typography>
          <Typography
            variant="body2"
            style={{ paddingTop: "15px", fontWeight: "600" }}
          >
            Username
          </Typography>{" "}
          <br />
          <TextField
            variant="outlined"
            placeholder="Type your username here"
            className={classes.text}
            style={{ marginTop: "0%" }}
            value = {username}
            onChange={(val) => setUsername(val.target.value)}
          />
          <br />
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            Email address
          </Typography>{" "}
          <br />
          <TextField
            variant="outlined"
            placeholder="Type your email address here"
            className={classes.text}
            style={{ marginTop: "0%" }}
            value = {email}
            onChange={(val) => {
              setEmail(val.target.value);
            }}
          />
          <br />
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            Create a password
          </Typography>{" "}
          <br />
          <TextField
            error = {error}
            variant="outlined"
            placeholder="Type your password here"
            className={classes.text}
            style={{ marginTop: "0%" }}
            onChange={(val) => {
              setPassword(val.target.value)
              setError(false);
            }}
            helperText = {error? "Passwords don't match": ""}
          />
          <br />
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            Confirm password
          </Typography>{" "}
          <br />
          <TextField
            variant="outlined"
            placeholder="Type your password here"
            className={classes.text}
            style={{ marginTop: "0%" }}
            onChange={(val) => {
              setError(false);
              setConfirmPass(val.target.value);
            }}
          />
          <br />
          <Grid item>
            <div align="center">
              <Button variant="outlined" className={classes.Button} onClick = {onSubmit}>
                Sign up
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={5} md={5}>
        <div
          style={{ width: "100%", maxHeight: "100vh", position: "relative" }}
        >
          <div className={classes.rectangle}></div>
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <div align="right">
              <img src={Logo} className={classes.logo}></img>
            </div>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ paddingTop: "30%" }}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  style={{ FontSize: "40px", color: "white", fontWeight: 700 }}
                >
                  Welcome to Rooftop!
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginTop: "5px", FontSize: "20px", color: "white" }}
                >
                  Already a Rooftop member?
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.signup} href="/">
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </div>
          <img src={LoginImage} className={classes.image}></img>
        </div>
      </Grid>
    </Grid>
  );
}
