import React from "react";
import { Button, makeStyles, Box, AppBar, Toolbar } from "@material-ui/core";
import Logo from "../../../assets/Icons/Icon.svg";

const useStyles = makeStyles((theme) => ({
  signup: {
    background: "#FFF0D5",
    borderColor: "#FFF0D5",
    color: "#FCA200",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "white",
    height: "15vh",
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  dummySidebar: {
    [theme.breakpoints.up("sm")]: { marginTop: "0px" },
    [theme.breakpoints.down("sm")]: { marginTop: "37px" },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={Logo} className={classes.logo} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box
              style={{ width: "100%" }}
              display="flex"
              flexDirection="row"
              p={1}
            >
              <Box>
                <Button style={{ color: "#707070" }} href="/">
                  Login
                </Button>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  className={classes.signup}
                  href="/signup"
                >
                  Signup
                </Button>
              </Box>
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <Box
              style={{ width: "100%" }}
              display="flex"
              flexDirection="row"
              p={1}
            >
              <Box>
                <Button style={{ color: "#707070" }}>Login</Button>
              </Box>
              <Box>
                <Button variant="outlined" className={classes.signup}>
                  Signup
                </Button>
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.dummySidebar}>{props.children}</div>
    </div>
  );
}
