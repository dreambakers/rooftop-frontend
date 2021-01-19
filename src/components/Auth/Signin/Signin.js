import React from "react";
import SignupImage from "../../../assets/Image/Signup.png";
import Logo from "../../../assets/Icons/Icon.svg";
import Facebook from "../../../assets/Icons/Facebook.svg";
import Google from "../../../assets/Icons/Google.svg";
import {
  Grid,
  TextField,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import ForgotPassword from "./ForgotPassword.js";
import {login, googleAuth, facebookAuth} from "../../connectApi/axiosFunctions"

// login("Test","test123")
// sendSignupVE('valid@email.com')
// changePass('test123','test1234')
// getProfile()
// updateProfile('test123', "profilePicture=@/home/mhd3v/Downloads/ProGrid (2).png", "Musician", 'validurl.com', 'validurl.com', 'validurl.com', 'validurl.com', 'validurl.com')
const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(0),
    width: "70%",
  },
  label: {
    marginBottom: "-20px",
    fontWeight: "600",
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
    //marginTop: "-20px",
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
    zIndex: "5",
    position: "relative",
  },
  icons: {
    width: "10%",
    margin: theme.spacing(1, 2, 0, 0),
  },
}));

export default function Signup(props) {
  const classes = useStyles();

  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {history} = props;

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
              fontWeight: "600",
              marginTop: "5%",
            }}
          >
            Welcome, Sign in and turn up!
          </Typography>
          <div align="center" style={{ marginTop: "40px" }}>
            <img src={Facebook} className={classes.icons}
            onClick = {facebookAuth}
            ></img>
            <img src={Google} className={classes.icons}
            onClick = {googleAuth}
            ></img>
            <Typography
              variant="subtitle2"
              style={{
                color: "#8A929D",
                paddingTop: "20px",
                fontWeight: "600",
              }}
            >
              {" "}
              or sign in with your email
            </Typography>
          </div>
          <br />
          <Typography variant="body2" className={classes.label}>
            Username
          </Typography>{" "}
          <br />
          <TextField
            variant="outlined"
            placeholder="Type your username here"
            className={classes.text}
            style={{ marginTop: "2%" }}
            value = {username}
            onChange = {(val) => setUserName(val.target.value)}
          />
          <br />
          <Typography variant="body2" className={classes.label}>
            Password
          </Typography>{" "}
          <br />
          <div align="right" style={{ marginTop: "-20px" }}>
            <ForgotPassword style={{ marginTop: "-20px" }} />
          </div>
          <TextField
            variant="outlined"
            placeholder="Type your password here"
            className={classes.text}
            style={{ marginTop: "2%" }}
            value = {password}
            onChange = {(val) => setPassword(val.target.value)}
          />
          <br />
          <Grid item>
            <div align="center">
              <Button variant="outlined" className={classes.Button} 
              onClick={(e,userName={username},Password={password}) => {
                  login(userName,Password)
                  history.push("/home")
                }
              }>
                Sign In
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
              <img src={Logo} className={classes.logo} style={{}}></img>
            </div>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ paddingTop: "150px", zIndex: "2", position: "relative" }}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  style={{ FontSize: "40px", color: "white", fontWeight: 700 }}
                >
                  Hello, Friend!
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginTop: "5px", FontSize: "20px", color: "white" }}
                >
                  Not a Rooftop member yet?
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.signup}
                  href="/signup"                  
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
          <img src={SignupImage} className={classes.image}></img>
        </div>
      </Grid>
    </Grid>
  );
}
