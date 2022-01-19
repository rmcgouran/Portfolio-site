import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, IconButton, Link } from "@material-ui/core";

const socialItems = [
  {
    icon: GitHubIcon,
    url: "https://github.com/rmcgouran",
  },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/ryan-mcgouran-15425419a/",
  },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1.5}>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={item.url} target="_blank">
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
