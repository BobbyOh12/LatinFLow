import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import TextField from '@material-ui/core/TextField';
// sections for this page
import SectionPills from "./Sections/SectionPills.jsx";
import SectionInterested from "./Sections/SectionInterested.jsx";
import SectionImage from "./Sections/SectionImage.jsx";
import SubscribeLine from "./Sections/SubscribeLine.jsx";
import UrlService from "../../services/UrlService.jsx";
import Button from '@material-ui/core/Button';
import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import CardExampleImages from "./Sections/CardExampleImages.jsx";

class BlogPostsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      image: '',
      url: '',
      data: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    UrlService.selectAll(this.onSelectAllSuccess, this.onError);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmit = event => {
    const data = { Url: this.state.url }
    console.log(data);
    UrlService.create(data, this.onSubmitSuccess, this.onError);
  }

  onSubmitSuccess = response => {
    console.log("Success");
    UrlService.selectAll(this.onSelectAllSuccess, this.onError);
    this.setState({
      url: ''
    })
  }

  onSelectAllSuccess = response => {
    const data = response.data.items;
    console.log(data)
    const newData = data.map(this.createCard)
    console.log(newData)
    this.setState({
      data: newData
    })
  }

  createCard = (data, index) => {
    return (
      <CardExampleImages
        index={index}
        key={data.id}
        image={data.image}
        id={data.id}
        title={data.title}
        description={data.description}
      />
    )
  }

  onError = error => {
    console.log("Error");
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Latin Flow"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax image={require("assets/img/ballroom.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>
                  A Place to Discover Dance
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <div>
              {this.state.data}
              {/* <SectionPills
                title={this.state.title}
                description={this.state.description}
              /> */}
            </div>

            <TextField
              name="url"
              label="Url"
              style={{ margin: 8 }}
              placeholder="Enter URL Here"
              value={this.state.url}
              onChange={this.handleChange('url')}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button color="primary" style={{ color: "#258df2" }} onClick={this.onSubmit}>
              Submit
            </Button>
            {/* <SectionInterested /> */}
          </div>
          {/* <SectionImage /> */}
          {/* <SubscribeLine /> */}
        </div>
        {/* <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
              </div>
            </div>
          } */}
        />
      </div>
    );
  }
}

export default withStyles(blogPostsPageStyle)(BlogPostsPage);
