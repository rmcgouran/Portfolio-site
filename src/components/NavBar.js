import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { style } from "@material-ui/core";
// import { Link } from "gatsby"
import IndexPage from "../pages";

function appBarLabel(label) {
  return (
    <Toolbar>
      <Button href={IndexPage}>Home</Button>
      <Button>Blog</Button>
    </Toolbar>
  );
}

export default function EnableColorOnDarkAppBar() {
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     boxShadow: "none",
  //     backgroundColor: "#fff"
  //   }
  // }));

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className={style}>
        {appBarLabel("default")}
      </AppBar>
    </Stack>
  );
}
