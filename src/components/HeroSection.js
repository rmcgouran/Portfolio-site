import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Paper,
  Zoom,
  withStyles,
} from "@material-ui/core";

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

  const CustomColor = withStyles({
    root: {
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  })(Typography);

  return (
    <Paper className={styles.section} id="about">
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-around"
          alignItems="center">
          <Zoom in={shouldShow}>
            <Grid item sm={15}>
              <CustomColor
                component="h1"
                variant="h3"
                style={{
                  // fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                Ryan McGouran
              </CustomColor>
              <Typography
                variant="h5"
                style={{
                  // fontSize: 20,
                  textAlign: "center",
                  paddingTop: "50px",
                }}>
                I'm a BSc (Hons) Software Engineering student at Nottingham
                Trent University. Currently I'm on placement within the
                University's Digital Technologies department.
              </Typography>
              <Typography
                variant="h5"
                style={{
                  // fontSize: 20,
                  textAlign: "center",
                  paddingTop: "50px",
                }}>
                Languages and frameworks I've used: C++, Java, Python,
                JavaScript, SQL, HTML, CSS, PHP, React and React Native.
              </Typography>
              <Typography
                variant="h5"
                style={{
                  // fontSize: 20,
                  textAlign: "center",
                  paddingTop: "50px",
                }}>
                I also have experience with React and React Native for mobile
                development.
              </Typography>
              {/* <Box my={1}>
                <Button
                  href="mailto:ryan@mcgouran.co.uk"
                  variant="outlined"
                  color="white">
                  Contact me
                </Button>
              </Box> */}
            </Grid>
          </Zoom>
          {/* <Hidden xsDown>
            <Grid item>
              <Social direction="row" />
            </Grid>
          </Hidden> */}
        </Grid>
      </Container>
    </Paper>
  );
}
