import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Button from "components/CustomButtons/Button.jsx";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import { Grid } from "@material-ui/core";

function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={8}>
          <Card style={{ width: "30rem" }}>
            <img
              style={{ height: "300px", width: "100%", display: "block" }}
              className={classes.imgCardTop}
              src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
              alt="Card-img-cap"
            />
            <CardBody>
              <h4>{props.title}</h4>
              <p>
                {props.description}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
        <GridItem >
          <Card
            alignCenter
            raised
            background
            className="col-md-6"
          style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>WORLDS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  The Best Productivity Apps on Market
                </h3>
              </a>
              <p className={classes.category}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
        <Card
            raised
            background
            style={{ backgroundImage: "url(" + blog8 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>BUSINESS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Working on Wallstreet is Not So Easy
                </h3>
              </a>
              <p className={classes.category}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
        <Card
            raised
            background
            style={{ backgroundImage: "url(" + cardProject6 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>MARKETING</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  0 to 100.000 Customers in 6 months
                </h3>
              </a>
              <p className={classes.category}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons} /> Read case study
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card
          center
          raised
          background
          style={{ backgroundImage: "url(" + cardProject6 + ")" }}
        >
          <CardBody background>
            <h6 className={classes.category}>MARKETING</h6>
            <a href="#pablo">
              <h3 className={classes.cardTitle}>
                0 to 100.000 Customers in 6 months
                </h3>
            </a>
            <p className={classes.category}>
              Don't be scared of the truth because we need to restart the
              human foundation in truth And I love you like Kanye loves Kanye
              I love Rick Owens’ bed design but the back is...
              </p>
            <Button round href="#pablo" color="warning">
              <FormatAlignLeft className={classes.icons} /> Read case study
              </Button>
            <Tooltip
              id="tooltip-pocket"
              title="Save to Pocket"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="white" simple justIcon>
                <i className="fab fa-get-pocket" />
              </Button>
            </Tooltip>
          </CardBody>
        </Card>
      </GridItem> */}
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
