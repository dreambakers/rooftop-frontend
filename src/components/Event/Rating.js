import React, {useState} from "react";
import { Box, Button, Modal, Paper, TextField, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';
import Close from "../../assets/Icons/Cross.svg";
import Icon1 from "../../assets/Icons/Mask Group 14.svg";
import Icon2 from "../../assets/Icons/Mask Group 15.svg";
import Icon3 from "../../assets/Icons/Mask Group 16.svg";
import Icon4 from "../../assets/Icons/Mask Group 17.svg";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "35%",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(2, 3, 4, 3),
    borderRadius: "20px",
    borderColor: "white",
    outline: "none"
  },
  Button: {
    background: "#FAAF31",
    borderColor: "#FAAF31",
    margin: theme.spacing(1, 0, 0, 0),
    color: "white",
    width: '100%',
    },
  rate: {
        width: "30px",
  },
  slide: {
      margin: theme.spacing(6,0,6,0),
        
  },
  modal: {
    '&:focus':{
        borderColor: "white"
    }
  }

}));

export default function AddButton() {


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function valuetext(value) {
    return value;
  }

  const marks = [
    {
      value: 0,
      label: "",
    },
    {
       value: 15,
       label: <img src={Icon1} className={classes.rate} />,
    },
    {
      value: 38,
      label: <img src={Icon2} className={classes.rate}/>,
    },
    {
      value: 62,
      label: <img src={Icon3} className={classes.rate}/>,
    },
    {
        value: 83,
        label: <img src={Icon4} className={classes.rate} style={{marginTop: "-1vh"}}/>,
    },
    {
      value: 100,
      label: '',
    },
  ];
  

  const body = (
      <Paper
        className={classes.paper}
      >
        <div align="right" style={{marginLeft: "20px"}} >
            {/* <img src={Close} style={{ width:"15px"}} onClick ={handleClose} /> */}
            <IconButton onClick ={handleClose}>
                    <CloseOutlinedIcon />
            </IconButton>
        </div>
        <Slider
        defaultValue={15}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        className= {classes.slide}
        />
          <Button
            variant="contained"
            className={classes.Button}
          >
            Confirm
          </Button>
        
      </Paper>
  );

  return (
    <div>
      <Box flexWrap="wrap">
        <Button variant="outlined" 
        className={classes.Button}
        onClick={handleOpen}
        >
             Rate Hot or Not
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose} className ={classes.modal}>
        {body}
      </Modal>
    </div>
  );
}