import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const UserForm = props => {

    return (
        <React.Fragment>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} >
                    <Card>
                        <Form>
                            <FormGroup row>
                                <Label for="firstName" sm={2} size="lg">First Name</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="First Name" bsSize="lg" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="middleInitial" sm={2} size="lg">Middle Initial</Label>
                                <Col sm={10}>
                                    <Input type="text" name="middleInitial" id="middleInitial" placeholder="Middle Initial" bsSize="lg" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastName" sm={2} size="lg">Last Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" bsSize="lg" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </Col>
                                <button type="button" onClick={this.onUpdateSuccess}>Update</button>
                            </FormGroup>
                        </Form>
                    </Card>
                </GridItem >
            </GridContainer>
        </React.Fragment>
    );
}

export default UserForm