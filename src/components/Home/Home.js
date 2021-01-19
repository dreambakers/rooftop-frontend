import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  InputBase,
} from "@material-ui/core";
import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
import Main from "../../assets/Image/Main.png";
import HomePartyCard from "./HomePartyCard";
import FireIcon from "../../assets/Icons/Mask Group 17.svg";
import PartyImage1 from "../../assets/Image/PartyCardImage1.png";
import Filter from "./FilterForm";

const useStyles = makeStyles((theme) => ({
  back: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F7F8FC",
    minHeight: "100vh",
    backgroundSize: "100% 100%",
    overflow: "auto",
  },
  image: {
    width: "90vw",
    height: "80%",
    position: "absolute",
    top: "15%",
    left: "5%",
    zIndex: "0",
  },
  welcomeDiv: {
    position: "absolute",
    left: "20%",
    top: "30%",
    zIndex: "1",
    width: "40%",
  },
  button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    color: "white",
    // padding: theme.spacing(1, 3, 1, 3),
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
    width: "25%",
  },
  searchBarDiv: {
    backgroundColor: "white",
    zIndex: 2,
    position: "absolute",
    left: "15%",
    top: "90%",
    [theme.breakpoints.only("xs")]: {
      marginTop: "0%",
    },
    width: "70%",
    display: "flex",
    alignItems: "center",
    justify: "center",
    borderRadius: "10px",
  },
  search: {
    bottom: "-2%",
    width: "50%",
    borderRadius: "10px",
    left: "25%",
    // padding: theme.spacing(1, 3, 1, 3),
    display: "flex",
    alignItems: "center",
    justify: "center",
  },
  searchBar: {
    backgroundColor: "#FFF9EF",
    margin: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    borderRadius: "10px",
    padding: theme.spacing(1),
  },
  cardsDiv: {
    position: "absolute",
    top: "100vh",
    marginTop: "5%",
    marginLeft: "5%",
    zIndex: "2",
  },
  buttonLoad: {
    backgroundColor: "#FFEAC5",
    color: "#EB9700",
    borderColor: "#FFEAC5",
    padding: theme.spacing(1, 3, 1, 3),
  },
}));

export default function NewHome() {
  const classes = useStyles();

  document.body.style = "background: #F7F8FC;";

  return (
    <div>
      <div className={classes.back}>
        <Header />
        <div align="center">
          <div className={classes.welcomeDiv} align="left">
            <Grid container>
              <Grid item lg={10} xs={12}>
                <Typography
                  variant="h6"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  WELCOME
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "900",
                  }}
                >
                  Get Your Party Started With Us
                </Typography>
                <br />
              </Grid>
              <Grid item lg={12}>
                <Button variant="outlined" className={classes.button}>
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className={classes.searchBarDiv}>
            <div className={classes.searchBar} style={{ width: "70%" }}>
              <InputBase
                placeholder="Search your party here…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                style={{ width: "70%" }}
                
              />
            </div>
            <div align="right">
              <Button className={classes.button}>Search</Button>
              {/* <img src={Filter} style={{ width: "25px", marginLeft: "10px", marginBottom: "-10px"}} /> */}
            </div>
            <div align="right">
              <Filter style={{ marginLeft: "50px" }} />
            </div>
          </div>
          <img src={Main} className={classes.image} />
        </div>
        <div className={classes.cardsDiv}>
          <Typography
            variant="h6"
            style={{ fontSize: "35px", fontWeight: "900" }}
          >
            Happening Around you
          </Typography>
          <div style={{ width: "90vw" }}>
            <Grid
              container
              direction="row"
              justifty="space-evenly"
              alignItems="center"
            >
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifty="space-evenly"
              alignItems="center"
            >
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <HomePartyCard
                  price="$30.00"
                  icon={FireIcon}
                  review="Great"
                  location="New York"
                  image={PartyImage1}
                  month="Dec"
                  date="25"
                  title="Summerella"
                  details="Lorem ipsum dolor sit amet, consectetur aing elit. Donec id viverra dolor. acinia commodo"
                />
              </Grid>
            </Grid>
          </div>
          <div style={{ width: "100%" }} align="center">
            <Button variant="outlined" className={classes.buttonLoad}>
              Load more events
            </Button>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", paddingTop: "3%" }}>
        <Footer />
      </div>
    </div>
  );
}
