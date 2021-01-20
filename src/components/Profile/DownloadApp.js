import {
  Modal,
  Paper,
  Typography,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import Phone from "../../assets/Image/Phone.png";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import AppStore from "../../assets/Image/AppStore.png";
import GooglePlay from "../../assets/Image/GooglePlay.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    "&:focus": {
      borderColor: "white",
    },
  },
  paper: {
    position: "absolute",
    minWidth: "240px",
    // maxWidth: "500px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(0, 3, 2, 3),
    borderRadius: "20px",
    borderColor: "white",
    outline: "none",
  },
  textGrid: {
    padding: theme.spacing(1),
  },
  image: {
    padding: theme.spacing(1),
    width: "80%",
  },
  download: {
    width: "100px ",
  },
  text: {
    background: "#F7F8FC",
    minWidth: "15vw",
    // maxwidth: "40vw",
    borderColor: "#F7F8FC",
    // marginRight: "20vw",
  },
  button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    padding: theme.spacing(2, 3, 2, 3),
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
    marginTop: "25px",
    // marginLeft: "15vw",
  },
}));

export default function DownloadApp() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Paper className={classes.paper}>
      <Grid container direction="column" justify="flex-start">
        <div align="right">
          <IconButton onClick={handleClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          direction="row"
        >
          <Grid item lg={5} xs={4} md={5} sm={5}>
            <img src={Phone} className={classes.image} />
          </Grid>
          <Grid item className={classes.textGrid} lg={7} xs={6} md={7} sm={7}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="flex-start"
              spacing="5px"
            >
              <Grid item>
                <Typography
                  variant="h3"
                  style={{ fontSize: "5vh", fontWeight: "bold" }}
                >
                  Please download our app and subscribe
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item xs={12} sm={12} md={5} lg={5}>
                    <IconButton>
                      <img src={AppStore} className={classes.download} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5}>
                    <IconButton>
                      <img src={GooglePlay} className={classes.download} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item xs={12} lg={6} sm={12} md={6}>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: "700", marginBottom: "3%" }}
                    >
                      Email
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Type your email address here."
                      className={classes.text}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6} sm={12} md={6}>
                    <Button className={classes.button}>Subscribe</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <div>
      <Typography onClick={handleOpen}>Download App</Typography>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}
