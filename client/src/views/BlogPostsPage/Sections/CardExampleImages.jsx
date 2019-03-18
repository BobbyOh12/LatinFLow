import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

const style = {
    ...imagesStyles
};

function CardExampleImages(props) {
    const { classes } = props;
    return (
        <Card style={{ width: "20rem" }}>
            <br />
            <img
                style={{ height: "180px", width: "100%", display: "block" }}
                className={classes.imgCardTop}
                src={props.image}
                alt="Card-img-cap"
            />
            <CardBody>
                <p>
                    {props.description}
                </p>
            </CardBody>
        </Card>
    );
}

export default withStyles(style)(CardExampleImages);