import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper, useMediaQuery} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Profile from "../components/Avatar";
import Inter from "../fonts/Inter.ttf";
import { Helmet } from "react-helmet";
import EnableColorOnDarkAppBar from "../components/NavBar";
import Blogs from "../components/Blog";

export default function IndexPage() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${Inter}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <CssBaseline />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ryan McGouran | Portfolio</title>
        </Helmet>
        <EnableColorOnDarkAppBar />
        <Scroll showBelow={100} />
        <Profile />
        <HeroSection />
        <Projects />
        <Blogs />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}
