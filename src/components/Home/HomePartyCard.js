import React from "react";
import { makeStyles, Typography, IconButton, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const useStyles = makeStyles((theme) => ({
  imageDiv: {
    position: "relative",
    zIndex: 0,
  },
  cardText: {
    backgroundColor: "white",
    color: "black",
    margin: theme.spacing(3, 0, 3, 3),
    padding: "3px",
    borderRadius: "5px",
  },
  review: {
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
    margin: theme.spacing(3),
    padding: theme.spacing(0.5, 1, 0.5, 0.5),
  },
  image: {
    width: "100%",
    zIndex: "-5",
    backgroundSize: "100% 100%",
    objectFit: "cover",
  },
  icon: {
    height: "28px",
    marginBottom: "-7px",
    marginRight: "10px",
  },
  reviewDiv: {
    position: "absolute",
    right: "0%",
    top: "0%",
  },
  actionIcons: {
    bottom: "5%",
    position: "absolute",
    left: "7%",
    borderRadius: "10px",
    padding: "5px",
  },
  locationDiv: {
    padding: "4px",
    position: "absolute",
    right: "5%",
    bottom: "-3%",
    backgroundColor: "#FAAF31",
    borderRadius: "3px",
  },
  detailsDiv: {
    padding: theme.spacing(3),
  },
  mainDiv:{
      margin: theme.spacing(5)
  }
}));

export default function PartyCard(props) {
  const classes = useStyles();
  return (
    <div style={{ borderRadius: "10px", backgroundColor: "white" }} className = {classes.mainDiv}>
      <div className={classes.imageDiv}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{ position: "absolute", left: "0%", top: "0%" }}>
            <Typography variant="body1" className={classes.cardText}>
              <b>{props.price}</b>
            </Typography>
          </div>
          <div className={classes.reviewDiv}>
            <Typography variant="body1" className={classes.review}>
              <img src={props.icon} className={classes.icon} />
              <b>{props.review}</b>
            </Typography>
          </div>
          <div className={classes.locationDiv}>
            <Typography variant="body1">
              <LocationOnIcon className={classes.icon} />
              {props.location}
            </Typography>
          </div>
        </div>
        <img src={props.image} className={classes.image} />
      </div>
      <div
        style={{ width: "100%" }}
        className={classes.detailsDiv}
        align="left"
      >
        <div style={{ width: "20%" }}>
          <Typography
            variant="overline"
            style={{ color: "#FAAF31", fontWeight: "900", fontSize: "16px" }}
          >
            {props.month}
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: "900", fontSize: "22px" }}
          >
            {props.date}
          </Typography>
        </div>
        <div style={{ width: "70%", paddingLeft: "22%", marginTop: "-80px" }}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography
            variant="body2"
            style={{ color: "#697482", fontSize: "16px" }}
          >
            {props.details}
          </Typography>
        </div>
      </div>
    </div>
  );
}
