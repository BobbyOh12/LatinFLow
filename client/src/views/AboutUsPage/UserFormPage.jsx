import React from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import classNames from "classnames";
import Header from "components/Header/Header.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import UserForm from "./UserForm"
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "components/Card/Card.jsx";
import UserService from "../../services/UserService.jsx"

class UserFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName: '',
            middleInitial: '',
            lastName: '',
            email: ''
        }
    }

    componentDidMount () {
        if(this.props.match.params.id) {
            UserService.selectById(this.props.match.params.id, this.onSelectByIdSuccess, this.onError)
        }
        // console.log(this.props.match.params.id)
        // UserService.selectById()
    }
    
    handleChange = (evt) => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }

    onRegisterSuccess = response => {
        console.log(response, "Register Success");
        this.props.history.push("/user/others-pages/terms_conditions");
    };

    onUpdateSuccess = response => {
        this.props.history.push('/about-us')
    };

    onSelectAllSuccess = response => {
        console.log(response)
    }

    onSelectByIdSuccess = response => {
        console.log(response, "Select By Id Success");
        this.setState({
            id: response.data.item.id,
            firstName: response.data.item.firstName,
            middleInitial: response.data.item.middleInitial,
            lastName: response.data.item.lastName,
            email: response.data.item.email
        })
        // const data = response.data.item;
        // UserService.selectById(5, this.onUpdate)
        // const newForm = this.buildForm(data);

    };

    onUpdateClick = evt => {
        const id = this.props.match.params.id
        const data = {
            id: this.state.id,
            firstName: this.state.firstName,
            middleInitial: this.state.middleInitial,
            lastName: this.state.lastName,
            email: this.state.email
        }
        console.log(data)
        UserService.update(id, data, this.onUpdateSuccess, this.onError)
    }

    onUpdate = response => {
        console.log(response)
    }

    onError = error => {
        console.log(error, "There was an error");
    };

    buildForm = data => {
        if (this.props.match.params.id)
            return (
                <UserForm
                    id={data.id}
                    firstName={data.firstName}
                    description={data.middleInitial}
                    displayOrder={data.lastName}
                    submitBtnText="Update"
                    onHandleEdit={this.onHandleEdit}
                    onUpdateSuccess={this.onUpdateSuccess}
                    onError={this.onError}
                    onHandleCancelClick={this.onHandleCancelClick}
                />
            );
        else
            return (
                <UserForm
                    firstName=""
                    middleInitial=""
                    lastName=""
                    submitBtnText="Submit"
                    onHandleEdit={this.onHandleEdit}
                    onSuccess={this.onRegisterSuccess}
                    onError={this.onError}
                    onHandleCancelClick={this.onHandleCancelClick}
                />
            );
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
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
                            // className={classNames(
                            //     classes.mlAuto,
                            //     classes.mrAuto,
                            //     classes.textCenter
                            // )}
                            >
                                <h1 className={classes.title}>Adminstration Form Page</h1>
                                <h4>
                                    {/* Meet the amazing team behind this project and find out more
                    about how we work. */}
                                </h4>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div>
                    <React.Fragment>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} >
                                <Card>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="firstName" sm={2} size="lg">First Name</Label>
                                            <Col sm={10}>
                                                <Input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" id="exampleEmail" placeholder="First Name" bsSize="lg" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="middleInitial" sm={2} size="lg">Middle Initial</Label>
                                            <Col sm={10}>
                                                <Input onChange={this.handleChange} value={this.state.middleInitial} type="text" name="middleInitial" id="middleInitial" placeholder="Middle Initial" bsSize="lg" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="lastName" sm={2} size="lg">Last Name</Label>
                                            <Col sm={10}>
                                                <Input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" bsSize="lg" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm={2}>Email</Label>
                                            <Col sm={10}>
                                                <Input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />
                                            </Col>
                                            <button type="button" onClick={this.onUpdateClick}>Update</button>
                                        </FormGroup>
                                    </Form>
                                </Card>
                            </GridItem >
                        </GridContainer>
                    </React.Fragment>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(aboutUsStyle)(UserFormPage)