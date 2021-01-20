import {
  Typography,
  makeStyles,
  Button,
  TextField,
  Slider,
  Modal,
  IconButton,
  Paper,
} from "@material-ui/core";
import SwitchCustom from "../Profile/Switch";
import React, { useState } from "react";
import Filter from "../../assets/Icons/filter.svg";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  modal: {
    "&:focus": {
      borderColor: "white",
    },
    overflowY: "auto",
    // maxHeight: "100vh",
    margin: theme.spacing(2, 0, 2, 0),
  },
  paper: {
    position: "absolute",
    minWidth: "250px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(0, 4, 0, 4),
    // borderRadius: "10%",
    borderColor: "white",
    outline: "none",
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
  button: {
    borderColor: "gray",
    margin: theme.spacing(0, 2, 1, 0),
    padding: theme.spacing(1, 3, 1, 3),
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
}));

export default function DownloadApp() {
  const classes = useStyles();
  function valuetext(value) {
    return value;
  }

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const marks = [
    {
      value: 0,
      label: "100 sqft",
    },
    {
      value: 100,
      label: "10,000 sqft",
    },
  ];

  const mileMarks = [
    {
      value: 0,
      label: "1 mile",
    },
    {
      value: 100,
      label: "50 miles",
    },
  ];
  const priceMarks = [
    {
      value: 0,
      label: "$1",
    },
    {
      value: 100,
      label: "$100",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Paper className={classes.paper}>
      <div align="right">
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
      <Typography variant="subtitle1" style={{ fontSize: "40px" }}>
        Filters
      </Typography>
      <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
        Size of venue
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={500}
        valueLabelDisplay="auto"
        marks={marks}
        className={classes.slide}
        style={{
          width: "90%",
          align: "center",
          justifyItems: "align",
          marginLeft: "25px",
        }}
      />
      <Typography variant="body2" style={{ fontWeight: "600" }}>
        Borough
      </Typography>
      <div style={{ marginBottom: "5%" }}>
        <Button variant="outlined" className={classes.button}>
          Queens
        </Button>
        <Button variant="outlined" className={classes.button}>
          Bronx
        </Button>
        <Button variant="outlined" className={classes.button}>
          Brooklyn
        </Button>
        <Button variant="outlined" className={classes.button}>
          Manhattan
        </Button>
        <Button variant="outlined" className={classes.button}>
          Long Island
        </Button>
      </div>
      <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
        Distance From Me
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={500}
        valueLabelDisplay="auto"
        marks={mileMarks}
        className={classes.slide}
        style={{
          width: "90%",
          align: "center",
          justifyItems: "align",
          marginLeft: "25px",
        }}
      />
      <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
        Price
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={500}
        valueLabelDisplay="auto"
        marks={priceMarks}
        className={classes.slide}
        style={{
          width: "90%",
          align: "center",
          justifyItems: "align",
          marginLeft: "25px",
        }}
      />
      <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
        Crowd control
      </Typography>
      <div style={{ marginBottom: "5%" }}>
        <Button variant="outlined" className={classes.button}>
          Moshpit
        </Button>
        <Button variant="outlined" className={classes.button}>
          Packed
        </Button>
        <Button variant="outlined" className={classes.button}>
          Spaced
        </Button>
        <Button variant="outlined" className={classes.button}>
          Alot Spaced
        </Button>
      </div>
      <Typography variant="body2" style={{ fontWeight: "600" }}>
        Vibe
      </Typography>
      <div style={{ marginBottom: "5%" }}>
        <Button variant="outlined" className={classes.button}>
          Turnt Up
        </Button>
        <Button variant="outlined" className={classes.button}>
          Mixer
        </Button>
        <Button variant="outlined" className={classes.button}>
          Kickback
        </Button>
      </div>
      <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
        Crowd Caution
      </Typography>
      <SwitchCustom />
      <Button
        variant="outlined"
        className={classes.Button}
        style={{ width: "100%", boderRadius: "50px", padding: "1.2%" }}
      >
        Apply Filters
      </Button>
    </Paper>
  );

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <img
          src={Filter}
          style={{
            width: "25px",
            marginLeft: "10px",
            marginBottom: "-10px",
          }}
        />
      </IconButton>

      <Modal open={open} onClose={handleClose} className={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}
