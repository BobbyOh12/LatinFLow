import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.jsx";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.jsx";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.jsx";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.jsx";
import SectionContact from "views/AboutUsPage/Sections/SectionContact";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Router, Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import UserRow from "./UserRow.jsx"

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import UserService from "../../services/UserService.jsx";
import { createBrowserHistory } from "history";

class AboutUsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      state: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    UserService.selectAll(this.onSelectAllSuccess, this.onError)
  }

  onSelectAllSuccess = response => {
    console.log(response)
    const data = response.data.items;
    const newData = data.map(this.createRow)
    this.setState({ data: newData })
  }

  onError = error => {
    console.log(error)
  }

  createRow = (data, index) => {
    return (
      <UserRow
        index={index}
        key={data.id}
        id={data.id}
        firstName={data.firstName}
        middleInitial={data.middleInitial}
        lastName={data.lastName}
        email={data.email}
        createdDate={data.createdDate}
        modifiedDate={data.modifiedDate}
        modifiedBy={data.modifiedBy}
        onDeleteClick={this.onDeleteClick}
        onEditClick={this.onEditClick}
      />
    )
  }

  onAddClick = evt => {
    this.props.history.push('/form-page')
  }

  onDeleteClick = evt => {
    const id = evt.target.id;
    console.log(id)
    UserService.delete(id, this.onDeleteSuccess, this.onError)
  }

  onEditClick = evt => {
    // wind
    const id = evt.target.id;
    // UserService.selectById(id,this.onEditSuccess, this.onError)
    this.props.history.push(`/${id}`)
    // window.location = "localhost:3000/form-page";
  }
  
  onEditSuccess = response => {
    console.log(response)
    const data = response.data.items;
    
  }

  onDeleteSuccess = response => {
    console.log("success")
    UserService.selectAll(this.onSelectAllSuccess, this.onError)
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
            height: 300,
            color: "info"
          }}
        />
        <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>Adminstration</h1>
                <h4>
                  {/* Meet the amazing team behind this project and find out more
                  about how we work. */}
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
        <div className={classes.container}>
          {/* <Tables /> */}
          <br />
          <Link to="/form-page/form">
            Add User
          </Link>
          <Table>
            <TableHead>
              <TableRow>
                <th>Id</th>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Created Date</th>
                <th>Modified Date</th>
                <th>Modified By</th>
                <th>Edit</th>
                <th>Delete</th>
              </TableRow>
            </TableHead>
            <tbody>
              {this.state.data}
            </tbody>
          </Table>
          {/* <SectionDescription /> */}
          {/* <SectionTeam />
            <SectionServices />
            <SectionOffice />
            <SectionContact /> */}
          {/* </div> */}
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
          }
        /> */}
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
