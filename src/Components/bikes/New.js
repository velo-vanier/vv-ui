import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DefaultLayout from "../layouts/Default";

export default class NewBikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: this.props.bike, errors: {} };
  }

  updateBike = field => event => {
    this.setState({
      bike: {
        ...this.state.bike,
        [field]: event.target.value
      }
    });
  };

  updateBikeChecked = field => event => {
    this.setState({
      bike: {
        ...this.state.bike,
        [field]: event.target.checked
      }
    });
  };

  render() {
    const { bike } = this.state;
    return (
      <DefaultLayout>
        <h1>Add a bike</h1>
        <Form>
          <FormGroup>
            <Label for="serialNumber">Serial number</Label>
            <Input
              type="text"
              name="serialNumber"
              id="serialNumber"
              placeholder="123456789"
              value={bike.serialNumber}
              onChange={this.updateBike("serialNumber")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="brand">Brand</Label>
            <Input
              type="text"
              name="brand"
              id="brand"
              placeholder="Peugot"
              value={bike.brand}
              onChange={this.updateBike("brand")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="colour">Colour</Label>
            <Input
              type="text"
              name="colour"
              id="colour"
              placeholder="Pink"
              value={bike.color}
              onChange={this.updateBike("color")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="frameSize">Frame size</Label>
            <Input
              type="text"
              name="frameSize"
              id="frameSize"
              placeholder="15 inches"
              value={bike.frameSize}
              onChange={this.updateBike("frameSize")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tireSize">Tire size</Label>
            <Input
              type="text"
              name="tireSize"
              id="tireSize"
              placeholder="27 inches"
              value={bike.tireSize}
              onChange={this.updateBike("tireSize")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tirePressure">Tire pressure</Label>
            <Input
              type="text"
              name="tirePressure"
              id="tirePressure"
              placeholder="99"
              value={bike.tirePressure}
              onChange={this.updateBike("tirePressure")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gears">Number of gears</Label>
            <Input
              type="number"
              name="gears"
              id="gears"
              placeholder="3"
              value={bike.gears}
              onChange={this.updateBike("gears")}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="bell"
                name="bell"
                checked={bike.bell}
                onChange={this.updateBikeChecked("bell")}
              />{" "}
              Bell or horn
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="frontReflector"
                name="frontReflector"
                checked={bike.frontReflector}
                onChange={this.updateBikeChecked("frontReflector")}
              />{" "}
              Front reflector
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="rearReflector"
                name="rearReflector"
                checked={bike.rearReflector}
                onChange={this.updateBikeChecked("rearReflector")}
              />{" "}
              Rear reflector
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="frontLight"
                name="frontLight"
                checked={bike.frontLight}
                onChange={this.updateBikeChecked("frontLight")}
              />{" "}
              Front light
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="rearLight"
                name="rearLight"
                checked={bike.rearLight}
                onChange={this.updateBikeChecked("rearLight")}
              />{" "}
              Rear light
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input type="select" name="status" id="status">
              <option>Available</option>
              <option>Testing</option>
              <option>Needs repair</option>
              <option>On loan</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="photo">Photo</Label>
            <Input type="file" name="photo" id="photo" />
            <FormText color="muted">Take a photo of the bike.</FormText>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </DefaultLayout>
    );
  }
}

NewBikeForm.defaultProps = {
  bike: {
    serialNumber: "",
    brand: "",
    color: "",
    frameSize: "",
    tireSize: "",
    tirePressure: "",
    gears: 0,
    bell: false,
    frontReflector: false,
    rearReflector: false,
    frontLight: false,
    rearLight: false,
    status: "available"
  }
};
