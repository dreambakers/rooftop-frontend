import React from "react";
import {
  Typography,
  makeStyles,
  Button,
  TextField,
  Slider,
} from "@material-ui/core";
import SwitchCustom from "./Switch";

const useStyles = makeStyles((theme) => ({
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
  body: {
    padding: theme.spacing(5, 5, 5, 5),
    backgroundColor: "white",
    borderRadius: "20px",
    fontWeight: "600",
  },
  image: {
    background: "#FFFDFA",
    padding: theme.spacing(15, 0, 15, 0),
    borderStyle: "dotted",
    borderColor: "#FAAF31",
    borderRadius: "15px",
  },
  text: {
    background: "#F7F8FC",
    width: "100%",
    borderRadius: "15px",
  },
  button: {
    borderColor: "gray",
    margin: theme.spacing(-5, 5, -5, 0),
    padding: theme.spacing(1, 3, 1, 3),
    "&:hover": {
      background: "#FAAF31",
      borderColor: "#FFFFFF",
    },
  },
  form: {
    width: "100%",
  },
}));

export default function EditForm() {
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

  return (
    <div className={classes.form}>
      <Typography variant="subtitle1" style={{ fontSize: "40px" }}>
        Edit the Party
        <div className={classes.body}>
          <div className={classes.image} align="center">
            <Button className={classes.Button}>Upload an image</Button>
          </div>
          <Typography
            variant="subtitle2"
            style={{ paddingTop: "2%", fontWeight: "600" }}
          >
            Title
          </Typography>
          <TextField
            variant="outlined"
            className={classes.text}
            placeholder="Enter party title"
            style={{ marginBottom: "5%", marginTop: "2%" }}
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
            Location
          </Typography>
          <TextField
            variant="outlined"
            className={classes.text}
            placeholder="Enter party location"
            style={{ marginBottom: "5%", marginTop: "2%" }}
          />
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

          <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
            Crowd Caution
          </Typography>

          <SwitchCustom />

          <Typography variant="subtitle2">Price</Typography>

          <TextField
            variant="outlined"
            className={classes.text}
            placeholder="Enter price for party"
            style={{ marginBottom: "5%", marginTop: "2%" }}
          />

          <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
            About
          </Typography>

          <TextField
            variant="outlined"
            className={classes.text}
            placeholder="Enter details about the party"
            style={{ marginBottom: "5%", marginTop: "2%" }}
          />

          <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
            Party Type
          </Typography>

          <div>
            <Button variant="outlined" className={classes.button}>
              Public
            </Button>
            <Button variant="outlined" className={classes.button}>
              Private
            </Button>
          </div>

          <Button
            variant="outlined"
            className={classes.Button}
            style={{ width: "100%", boderRadius: "50px", padding: "1.2%" }}
          >
            Create Party
          </Button>
        </div>
      </Typography>
    </div>
  );
}
