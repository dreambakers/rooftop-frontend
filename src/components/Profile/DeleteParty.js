import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    width: "60%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(0, 0, 4, 3),
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
    width: "42%",
    margin: theme.spacing(2),
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
        <div style={{ width: "100%" }}>
          <Button variant="outlined" className={classes.button}>
            Yes
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            style={{ backgroundColor: "red" }}
          >
            No
          </Button>
        </div>
      </div>
    </Paper>
  );

  return (
    <div>
      <DeleteOutlineOutlinedIcon
        style={{ color: "red" }}
        onClick={handleOpen}
      />

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}
