import React from "react";
import Logo from "../../assets/Icons/Icon.svg";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import ProfileCard from "./ProfileCard";
import Footer from "../Navigation/Footer/Footer";
import PartyDisplay from "./PartyDisplay";
import Back from "../../assets/Icons/back.svg";

const useStyles = makeStyles((theme) => ({
  back: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F7F8FC",
    backgroundSize: "100% 100%",
    height: "100vh",
    minheight: "100vh",
    backgroundSize: "100% 100%",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.back}>
      <div>
        {/* Logo */}
        <Grid container justify="space-between">
          <Grid item>
            <img src={Back} style={{ width: "20px", padding: "20px" }} />
          </Grid>
          <Grid item>
            <img src={Logo} style={{ height: "70px" }} />
          </Grid>
        </Grid>
        {/* Body  */}
        <Grid
          container
          justify="space-evenly"
          alignItems="flex-start"
          style={{
            paddingBottom: "25px",
            backgroundColor: "#F7F8FC",
            height: "auto",
          }}
        >
          <Grid item xs={10} sm={10} md={3} lg={3}>
            <ProfileCard />
          </Grid>
          <Grid item lg={8} sm={10} md={8} xs={10}>
            <PartyDisplay />
          </Grid>
        </Grid>
      </div>
      <div style={{ position: "absolute", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
