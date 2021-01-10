import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import facebook from "../../../assets/Icons/facebook-white.svg";
import instagram from "../../../assets/Icons/instagram-white.svg";
import twitter from "../../../assets/Icons/twitter-white.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(5,0,5,0)
  },
  social: {
      width: "20px",
      padding:(0,5,0,5)
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
        <div className={classes.footer} align="center">
        <div>
            <img className={classes.social} style={{width: "10px"}} src={facebook} />
            <img className={classes.social} src={instagram} />
            <img className={classes.social} src={twitter} />
        </div>
        <Typography variant="body2">
            All Rights Powered by Rooftop
        </Typography>
        </div>
    </div>
  );
}