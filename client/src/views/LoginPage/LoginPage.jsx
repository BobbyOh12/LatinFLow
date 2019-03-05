import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/ballroom.jpg";
import UserService from "../../services/UserService";

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({
      [key]: val
    })
  }

  handleClick = evt => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(data)
    UserService.login(data, this.onLoginSuccess, this.onError)
  }

  onLoginSuccess = response => {
    console.log(response, "login success")
  }

  onError = error => {
    console.log(error, "invalid credentials")
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Latin Flow"
          links={<HeaderLinks dropdownHoverColor="info" />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="secondary"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus-g" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody signup>
                      <CustomInput
                        id="email"
                        name="email"
                        value={this.state.email}
                        formControlProps={{
                          fullWidth: true
                        }}
                        onChange={this.handleChange}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          name: "email",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Password",
                          type: "password",
                          name: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button onClick={this.handleClick} simple color="github" size="lg">
                        Login
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/"
                        className={classes.block}
                      >
                        Creative Bobby
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
                  better web
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
