import React from "react";
import axios from "axios";
import {
  Modal,
  TextField,
  Typography,
  Paper,
  Link,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
    profileText: {
        color: "#8A929D",
        textDecoration: "underline",
        marginTop: "3%",
    },

}))

export default function ChangePassword(){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
       setOpen(false);
    };

    const body = (
        <Paper>
            <div align="right" style={{ margin: "5px" }}>
               <IconButton onClick={onCloseClick}>
                    <CloseOutlinedIcon />
                </IconButton>
            </div>
            
        </Paper>
    )

    return (
        <div>
        <Typography variant="body2">
            <Link
            align="right"
            onClick={handleOpen}
            className={classes.profileText}
            href="#"
            >
            Change Password
            </Link>
        </Typography>

        <Modal open={open} onClose={handleClose} className={classes.modal}>
            {body}
        </Modal>

        </div>

    )
}