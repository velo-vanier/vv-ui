import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import { BIKE_CLASSES_EN } from "../../helpers/constants";


export default class NewBikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: this.props.bike, errors: {}, statuses: [] };
  }

  componentDidMount() {
    axios.get("http://eb66bc8f.ngrok.io/api/statuses").then(res => {
      console.log(res.data.data)
      this.setState({ statuses: res.data.data });
    });
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

  submit = () => {
    // submit form
    console.log(this.state.bike)
  }

  render() {
    const { bike } = this.state;
    const bikeClasses = labels.bikeClassLabels();
    return (
      <DefaultLayout>
        <h1>{labels.newBikeTitle()}</h1>
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label for="serialNumber">{labels.serialNumber()}</Label>
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
            <Label for="brand">{labels.brand()}</Label>
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
            <Label for="colour">{labels.colour()}</Label>
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
            <Label for="frameSize">{labels.frameSize()}</Label>
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
            <Label for="tireSize">{labels.tireSize()}</Label>
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
            <Label for="tirePressure">{labels.tirePressure()}</Label>
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
            <Label for="gears">{labels.gears()}</Label>
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
              {labels.bellOrHorn()}
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
              {labels.frontReflector()}
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
              {labels.rearReflector()}
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
              {labels.frontLight()}
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
              {labels.rearLight()}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="bikeClass">{labels.bikeClass()}</Label>
            <Input type="select" name="bikeClass" id="bikeClass" onChange={this.updateBike('bikeClass')} value={bike.bikeClass}>
              {Object.keys(bikeClasses).map((id) => {
                return <option key={`status-${id}`} value={id}>{bikeClasses[id]}</option>;
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="status">{labels.status()}</Label>
            <Input type="select" name="status" id="status" onChange={this.updateBike('status')} value={bike.status}>
              {this.state.statuses.map(status => {
                const label = labels.statusLabel(status.ID_Status)
                return <option key={`status-${status.ID_Status}`} value={status.ID_Status}>{label}</option>;
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="photo">{labels.photo()}</Label>
            <Input type="file" name="photo" id="photo" />
            <FormText color="muted">{labels.takeAPhoto()}</FormText>
          </FormGroup>

          <Button onClick={this.submit}>Submit</Button>
        </Form>
      </DefaultLayout>
    );
  }
}