import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import {
  Paper,
  Modal,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: "800px",
    minWidth: "290px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(3),
    borderRadius: "20px",
    borderColor: "white",
    outline: "none",
  },
  modal: {
    "&:focus": {
      borderColor: "white",
    },
  },
  button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    color: "white",
    width: "90%",
    margin: theme.spacing(2, 0, 2, 0),
    padding: theme.spacing(1),
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
  div: {
    padding: theme.spacing(2),
  },
}));

export default function DeleteParty() {
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
      <div align="right" style={{ marginLeft: "20px" }}>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <div className={classes.div}>
        <Typography variant="h4" style={{ fontWeight: "700" }}>
          Are you sure you want to delete this party?
        </Typography>
        <Grid
          container
          alignItems="center"
          justify="space-between"
          style={{ width: "100%" }}
        >
          <Grid item sm={6} lg={6} md={6} xs={6}>
            <Button variant="outlined" className={classes.button}>
              Yes
            </Button>
          </Grid>
          <Grid item sm={6} lg={6} md={6} xs={6}>
            <Button
              variant="outlined"
              className={classes.button}
              style={{ backgroundColor: "red" }}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );

  return (
    <div>
      <IconButton style={{ padding: "2px" }}>
        <DeleteOutlineOutlinedIcon
          style={{
            backgroundColor: "#FFE6E2",
            left: "20%",
            borderRadius: "15%",
            color: "red",
            width: "30px",
            height: "35px",
          }}
          onClick={handleOpen}
        />
      </IconButton>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}
