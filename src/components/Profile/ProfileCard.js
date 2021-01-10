import React from "react";
import DP from "../../assets/Image/dp.png";
import {
  Grid,
  Typography,
  makeStyles,
  Avatar,
  Divider,
} from "@material-ui/core";
import FireIcon from "../../assets/Icons/Mask Group 17.svg";
import Checked from "../../assets/Icons/checked.svg";
import Edit from "../../assets/Icons/edit.svg";
import EditPicture from "../../assets/Icons/EditPicture.svg";

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    borderBottomColor: "#F7F8FC",
    backgroundColor: "white",
    padding: theme.spacing(2, 0, 2, 0),
    borderRadius: "20px",
  },
  bio: {
    backgroundColor: "#FFF6EB",
    padding: theme.spacing(2),
    borderRadius: "10px",
    color: "#8A929D",
  },
  profileText: {
    color: "#8A929D",
    textDecoration: "underline",
    marginTop: "3%",
  },
  Button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    margin: theme.spacing(2, 0, 2, 0),
    color: "white",
    // width:  "250px",
    // height: "70px",
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
}));

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <div className={classes.profile} align="center">
      <Avatar src={DP} style={{ width: "100px", height: "100px" }} />
      <img
        src={EditPicture}
        style={{
          width: "35px",
          marginLeft: "15%",
          marginTop: "-25%",
          zIndex: "2",
          position: "relative",
        }}
      />
      <Typography variant="h6" style={{ fontSize: "22px", marginTop: "5%" }}>
        Kai Moorer
      </Typography>
      <Typography variant="h6" style={{ color: "#8A929D", fontSize: "16px" }}>
        kaimoonerNT@gmail.com
      </Typography>

      <Typography
        variant="h6"
        style={{ color: "#8A929D", fontSize: "14px", paddingBottom: "10px" }}
      >
        Hot or Not
        <img
          src={FireIcon}
          style={{ height: "22px", marginBottom: "-5px", paddingLeft: "15px" }}
        />
        <img src={FireIcon} style={{ height: "22px", marginBottom: "-5px" }} />
      </Typography>

      <Divider />

      <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <div align="left" style={{ paddingTop: "10px" }}>
          <Typography variant="body1">Bio</Typography>
        </div>
        <div className={classes.bio} align="left">
          <Typography variant="body2">
            Brooklyn Native with the best frees <br />
            since '17 <br />
            <br />
            Dalton '19
            <br />
            NYU '23
            <br />
            YKTV
            <div align="right">
              <img src={Edit} />
            </div>
          </Typography>
        </div>
        <div style={{ width: "100%" }} align="left">
          <Typography
            variant="body2"
            style={{ color: "#8A929D", marginTop: "5%" }}
          >
            <u>Subscription Status</u> :
            <span style={{ color: "black" }}>
              Subscribed
              <img
                src={Checked}
                style={{
                  marginLeft: "5%",
                  marginBottom: "-3px",
                  height: "16px",
                  width: "16px",
                }}
              />
            </span>
          </Typography>
          <Typography variant="body2" className={classes.profileText}>
            Change Password
          </Typography>
          <Typography variant="body2" className={classes.profileText}>
            Links
          </Typography>
          <Typography variant="body2" style={{ color: "red", marginTop: "5%" }}>
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
}
