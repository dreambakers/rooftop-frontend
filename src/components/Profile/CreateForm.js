import React from "react";
import axios from 'axios';
import {
  Typography,
  makeStyles,
  Button,
  TextField,
  Slider,
} from "@material-ui/core";
import SwitchCustom from "./Switch";
import DownloadApp from './DownloadApp';

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

export default function CreateForm() {
  const classes = useStyles();

  const startDateTime = "2021-01-30 16:47:30";
  const endDateTime = "2021-01-01 13:47:30";
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [borough, setBorough] = React.useState("");
  const [vibe, setVibe] = React.useState("");
  const [size, setSize] = React.useState(20);
  const [crowd, setCrowd] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [about, setAbout] = React.useState("");
  const[control, setControl] = React.useState(true);
  const [type, setType] = React.useState("");

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

  const onBoroughClick = (val) => {
    setBorough(val.target.value);
  }
  const onVibeClick = (val) => {
    setVibe(val.target.value);
  }
  const onCrowdClick = (val) => {
    setCrowd(val.target.value);
  }
  const onTypeClick = (val) => {
    setType(val.target.value);
  }

  const onCreateClick = () => {
    const URL = "https://rooftop-api.herokuapp.com/party/"

    const party = {
      "title": title,
      "location": location,
      "borough":borough,
      "price":price,
      "about": about,
      "vibe": vibe,
      "crowdControl": crowd,
      "crowdCaution": control,
      "venueSize" : size,
      "endDateTime":endDateTime,
      "startDateTime": startDateTime
    }

    axios.post(URL, party)
    .then (res => {
      console.log(res)
    })
    .catch(e => console.log(e))
  }
  return (
    <div className={classes.form}>
      <Typography variant="subtitle1" style={{ fontSize: "40px" }}>
        Create a New Party
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
            value = {title}
            onChange={(val) =>{
              setTitle(val.target.value);
            }}
          />
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            Borough
          </Typography>

          <div style={{ marginBottom: "5%" }}>
            <Button variant="outlined" className={classes.button} value = "Queens" onClick = {onBoroughClick}>
              Queens
            </Button>
            <Button variant="outlined" className={classes.button} value = "Bronx" onClick= {onBoroughClick}>
              Bronx
            </Button>
            <Button variant="outlined" className={classes.button} value = "Brooklyn" onClick = {onBoroughClick}>
              Brooklyn
            </Button>
            <Button variant="outlined" className={classes.button} value = "Manhattan" onClick = {onBoroughClick}>
              Manhattan
            </Button>
            <Button variant="outlined" className={classes.button} value = "Long Island" onClick = {onBoroughClick}>
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
            value = {location}
            onChange= {(val) => {
              setLocation(val.target.value);
            }}
          />
          <Typography variant="body2" style={{ fontWeight: "600" }}>
            Vibe
          </Typography>

          <div style={{ marginBottom: "5%" }}>
            <Button variant="outlined" className={classes.button} value = "Turnt Up" onClick={onVibeClick}>
              Turnt Up
            </Button>
            <Button variant="outlined" className={classes.button} value = "Mixer" onClick = {onVibeClick}>
              Mixer
            </Button>
            <Button variant="outlined" className={classes.button} value = "Kickback" onClick = {onVibeClick}>
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
            min = {100}
            max = {10000}
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
            <Button variant="outlined" className={classes.button} value = "Moshpit" onClick = {onCrowdClick}>
              Moshpit
            </Button>
            <Button variant="outlined" className={classes.button} value = "Packed" onClick = {onCrowdClick}>
              Packed
            </Button>
            <Button variant="outlined" className={classes.button} value = "Spaced" onClick = {onCrowdClick}>
              Spaced
            </Button>
            <Button variant="outlined" className={classes.button} value = "Alot Spaced" onClick = {onCrowdClick}>
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
            value = {price}
            onChange = {(val) => {
              setPrice(val.target.value)
            }}
          />

          <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
            About
          </Typography>

          <TextField
            variant="outlined"
            className={classes.text}
            placeholder="Enter details about the party"
            style={{ marginBottom: "5%", marginTop: "2%" }}
            value = {about}
            onChange = {(val) => {
              setAbout(val.target.value);
            }}
          />

          <Typography variant="subtitle2" style={{ fontWeight: "600" }}>
            Party Type
          </Typography>

          <div>
            <Button variant="outlined" className={classes.button} value = "Public" onClick = {onTypeClick}>
              Public
            </Button>
            <Button variant="outlined" className={classes.button} value = "Private" onClick = {onTypeClick}>
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
        <DownloadApp />
      </Typography>
    </div>
  );
}
