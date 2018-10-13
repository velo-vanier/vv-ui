import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import { BIKE_CLASSES_EN } from "../../helpers/constants";
import API from "../../helpers/API"


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
    console.log(this.state.bike)
    API.post('bikes', this.state.bike).then(res => {
      console.log(res)
    })
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
              value={bike.SerialNumber}
              onChange={this.updateBike("SerialNumber")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">{labels.description()}</Label>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="123456789"
              value={bike.Description}
              onChange={this.updateBike("Description")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="brand">{labels.brand()}</Label>
            <Input
              type="text"
              name="brand"
              id="brand"
              placeholder="Peugot"
              value={bike.Brand}
              onChange={this.updateBike("Brand")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="colour">{labels.colour()}</Label>
            <Input
              type="text"
              name="colour"
              id="colour"
              placeholder="Pink"
              value={bike.Color}
              onChange={this.updateBike("Color")}
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
              value={bike.TireSize}
              onChange={this.updateBike("TireSize")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="maxPSI">{labels.maxPSI()}</Label>
            <Input
              type="number"
              name="maxPSI"
              id="maxPSI"
              placeholder="99"
              value={bike.TireMaxPSI}
              onChange={this.updateBike("TireMaxPSI")}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gears">{labels.gears()}</Label>
            <Input
              type="number"
              name="gears"
              id="gears"
              placeholder="3"
              value={bike.GearCount}
              onChange={this.updateBike("GearCount")}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="bell"
                name="bell"
                checked={bike.BellHorn}
                onChange={this.updateBikeChecked("BellHorn")}
              />{" "}
              {labels.bellOrHorn()}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="reflectors"
                name="reflectors"
                checked={bike.Reflectors}
                onChange={this.updateBikeChecked("Reflectors")}
              />{" "}
              {labels.reflectors()}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="lights"
                name="lights"
                checked={bike.Lights}
                onChange={this.updateBikeChecked("Lights")}
              />{" "}
              {labels.lights()}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="bikeClass">{labels.bikeClass()}</Label>
            <Input type="select" name="bikeClass" id="bikeClass" onChange={this.updateBike('Class')} value={bike.Class}>
              {Object.keys(bikeClasses).map((id) => {
                return <option key={`status-${id}`} value={id}>{bikeClasses[id]}</option>;
              })}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="status">{labels.status()}</Label>
            <Input type="select" name="status" id="status" onChange={this.updateBike('ID_Status')} value={bike.ID_Status}>
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

