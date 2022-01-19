import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Hidden,
  Zoom,
} from "@material-ui/core";
import Social from "./Social";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    position: "absolute",
    zIndex: 2,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);

  return (
    <Paper className={styles.section} id="about">
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hi, I'm Ryan a Software Engineer
              </Typography>
              <Typography variant="h5">
                I'm currently a student at Nottingham Trent University studying
                BSc (Hons) Software Engineering
              </Typography>
              <Box my={1}>
                <Button
                  href="mailto:ryan@mcgouran.co.uk"
                  variant="outlined"
                  color="white"
                >
                  Contact me
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
