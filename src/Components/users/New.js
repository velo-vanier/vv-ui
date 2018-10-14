import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import DefaultLayout from "../layouts/Default";
import Children from './Children';

export default class NewUserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      children: [{ name: '' , age: ''}],
    }
  }
  handleAddChild = () => {
    this.setState({
      name: '',
      children: this.state.children.concat([{ name: '', age: '' }])
    });
  }
  handleSubmit = () => {
    alert('here!');
  }
  render() {
    return (
      <DefaultLayout>
        <Form>
          <FormGroup row>
            <Label for="fname" sm={2}>Full Name</Label>
            <Col sm={10}>
              <Input type="text" name="fname" id="fname" placeholder="Full Name"/>
              <FormFeedback>Full Name required!</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phNumber" sm={2}>Phone Number</Label>
            <Col sm={10}>
              <Input type="number" name="phNumber" id="phNumber" placeholder="1234567890" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="joe@example.com" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={2}>Address</Label>
            <Col sm={10}>
              <Input type="textarea" name="address" id="address" placeholder="Address"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="postalCode" sm={2}>Postal Code</Label>
            <Col sm={10}>
              <Input type="text" name="postalCode" id="postalCode" placeholder="Must start with K1L" />
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Children Under 18</legend>
              {this.state.children.map((child, idx) => {
                return <Children
                  name={child.name}
                  age={child.age}
                />
              })}
            <br/ >
            <Col sm={10}>
              <Button color="primary" outline onClick={this.handleAddChild}>
                Add Child
              </Button>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="consent" sm={2}>Agree to have picture used online</Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="consent" />{' '}
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button
                onChange={this.handleSubmit}
              >Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </DefaultLayout>
    );
  }
}