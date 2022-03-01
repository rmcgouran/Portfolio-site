import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
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
});

export class BlogItems extends Component {
  state = {
    imgUrl: "",
    author: "",
    isLoaded: false,
  };
  static propTypes = {
    blog: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { featured_media, author } = this.props.blog;

    const getImageUrl = axios.get(
      `https://mcgouran.co.uk/cms/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `https://mcgouran.co.uk/cms/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { title, content } = this.props.blog;
    const { author, imgUrl } = this.state;
    const { classes } = this.props;

    return (
      <Container maxWidth="md" id="blogs">
        <Grid item>
          <Card className={classes.card}>
            <div>
              <Grid container direction="column" spacing={3} item>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    {title.rendered}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                  />
                </CardContent>
              </Grid>
            </div>
          </Card>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles, { withTheme: true })(BlogItems);
