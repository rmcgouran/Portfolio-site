import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 180,
  },
  card: {
    display: "flex",
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
    marginLeft: "auto",
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags, links }) {
  const styles = useStyles();
  let newstrings = description.split("\n");
  return (
    <Grid item>
      <Card className={styles.card}>
        <div>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {newstrings}
            </Typography>
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton
                  href={linkItem.href}
                  key={linkItem.href}
                  target="_blank">
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography variant="h4">Projects & Repos</Typography>
      </Box>
      <Grid container direction="column" spacing={3}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}

const projectsData = [
  {
    title: "Second Year - Software Engineering Module",
    description:
      "This module was split into 3 tasks: 1. Writing functions to pass premade tests. 2. Refactoring code 3. Writing tests to pass prewritten code. The first two tasks were completed with another student as a pair programming task and the final was a solo task.I achieved a 1st for this module.",
    tags: ["C++", "Boost UTF"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/rmcgouran/Software-Engineering",
      },
    ],
  },
  {
    title: "NHS Covid API React app",
    description:
      "This project was built as part of a job application to Nottingham County Council. I found this project initially quite tough as it ws my first time building a React project without following any sort of guide or tutorial.",
    tags: ["React", "JavaScript", "NPM", "NHS Covid-19 API"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/rmcgouran/ncc",
      },
      {
        icon: OpenInNewIcon,
        href: "https://mcgouran.co.uk/ncc",
      },
    ],
  },
  {
    title: "Portfolio Site",
    description:
      "As I wanted to dive more deeply into the React framework I decided to build this site with it. I aim to continously add/remove features as my skillset with React increases.",
    tags: ["React", "Gatsby", "JavaScript", "NPM"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/rmcgouran/Portfolio-site",
      },
    ],
  },
];
