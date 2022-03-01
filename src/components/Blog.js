import React, { Component } from "react";
import axios from "axios";
import BlogItems from "./BlogItems";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export class Blogs extends Component {
  state = {
    blogs: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get("https://mcgouran.co.uk/cms/wp-json/wp/v2/blogs")
      .then((res) =>
        this.setState({
          blogs: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const { blogs } = this.state;

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

    return (
      <Container maxWidth="md" id="projects">
        <Box pt={8} mb={2}>
          <Typography variant="h4">Blog posts</Typography>
        </Box>
        <Grid container direction="column" spacing={3}>
          {blogs.map((blog) => (
            <BlogItems key={blog.id} blog={blog} />
          ))}
        </Grid>
      </Container>
    );
  }
}
export default Blogs;
