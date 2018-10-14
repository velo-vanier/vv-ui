import React from "react";
import axios from "axios";
import { push } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import API from "../../helpers/API"


export default class NewBikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: this.props.bike, errors: {}, statuses: [] };
  }

  componentDidMount() {
    API.get("statuses").then(res => {
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
    API
      .post('bikes', this.state.bike)
      .then(res => {
        console.log(res);
        if (res.status = 200) {
          this.props.history.push(`/bikes/${res.data.ID_Bike}`)
        }
      })
      .catch(res => {
        console.log('res', res)
        this.setState({ errors: res.errors })
      })
  }

  render() {
    const { bike, errors } = this.state;
    const bikeClasses = labels.bikeClassLabels;
    console.log(errors)
    return (
      <DefaultLayout>
        <h1>{labels.newBikeTitle}</h1>
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label for="serialNumber">{labels.serialNumber}</Label>
            <Input
              type="text"
              name="serialNumber"
              id="serialNumber"
              placeholder="123456789"
              value={bike.SerialNumber}
              onChange={this.updateBike("SerialNumber")}
              invalid={Boolean(errors.SerialNumber)}
            />
            {
              (errors.SerialNumber) &&
              <FormFeedback>{errors.SerialNumber.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="description">{labels.description}</Label>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="Describe the bike"
              value={bike.Description}
              onChange={this.updateBike("Description")}
              invalid={Boolean(errors.Description)}
            />
            {
              (errors.Description) &&
              <FormFeedback>{errors.Description.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="brand">{labels.brand}</Label>
            <Input
              type="text"
              name="brand"
              id="brand"
              placeholder="Peugot"
              value={bike.Brand}
              onChange={this.updateBike("Brand")}
              invalid={Boolean(errors.Brand)}
            />
            {
              (errors.Brand) &&
              <FormFeedback>{errors.Brand.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="colour">{labels.colour}</Label>
            <Input
              type="text"
              name="colour"
              id="colour"
              placeholder="Pink"
              value={bike.Color}
              onChange={this.updateBike("Color")}
              invalid={Boolean(errors.Color)}
            />
            {
              (errors.Color) &&
              <FormFeedback>{errors.Color.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="frameSize">{labels.frameSize}</Label>
            <Input
              type="text"
              name="frameSize"
              id="frameSize"
              placeholder="15 inches"
              value={bike.FrameSize}
              onChange={this.updateBike("FrameSize")}
              invalid={Boolean(errors.FrameSize)}
            />
            {
              (errors.FrameSize) &&
              <FormFeedback>{errors.FrameSize.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="tireSize">{labels.tireSize}</Label>
            <Input
              type="text"
              name="tireSize"
              id="tireSize"
              placeholder="27 inches"
              value={bike.TireSize}
              onChange={this.updateBike("TireSize")}
              invalid={Boolean(errors.TireSize)}
            />
            {
              (errors.TireSize) &&
              <FormFeedback>{errors.TireSize.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="maxPSI">{labels.maxPSI}</Label>
            <Input
              type="number"
              name="maxPSI"
              id="maxPSI"
              placeholder="99"
              value={bike.TireMaxPSI}
              onChange={this.updateBike("TireMaxPSI")}
              invalid={Boolean(errors.TireMaxPSI)}
            />
            {
              (errors.TireMaxPSI) &&
              <FormFeedback>{errors.TireMaxPSI.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup>
            <Label for="gears">{labels.gears}</Label>
            <Input
              type="number"
              name="gears"
              id="gears"
              placeholder="3"
              value={bike.GearCount}
              onChange={this.updateBike("GearCount")}
              invalid={Boolean(errors.GearCount)}
            />
            {
              (errors.GearCount) &&
              <FormFeedback>{errors.GearCount.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="bell"
                name="bell"
                checked={bike.BellHorn}
                onChange={this.updateBikeChecked("BellHorn")}
                invalid={Boolean(errors.BellHorn)}
              />{" "}
              {labels.bellOrHorn}
            </Label>
            {
              (errors.BellHorn) &&
              <FormFeedback>{errors.BellHorn.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="reflectors"
                name="reflectors"
                checked={bike.Reflectors}
                onChange={this.updateBikeChecked("Reflectors")}
                invalid={Boolean(errors.Reflectors)}
              />{" "}
              {labels.reflectors}
            </Label>
            {
              (errors.Reflectors) &&
              <FormFeedback>{errors.Reflectors.join(' ')}</FormFeedback>
            }
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="lights"
                name="lights"
                checked={bike.Lights}
                onChange={this.updateBikeChecked("Lights")}
                invalid={Boolean(errors.Lights)}
              />{" "}
              {labels.lights}
            </Label>
            {
              (errors.Lights) &&
              <FormFeedback>{errors.Lights.join(' ')}</FormFeedback>
            }
          </FormGroup>

          <FormGroup>
            <Label for="bikeClass">{labels.bikeClass}</Label>
            <Input type="select" name="bikeClass" id="bikeClass" onChange={this.updateBike('Class')} value={bike.Class} invalid={Boolean(errors.Class)}>
              {Object.keys(bikeClasses).map((id) => {
                return <option key={`status-${id}`} value={id}>{bikeClasses[id]}</option>;
              })}
            </Input>
            {
              (errors.Class) &&
              <FormFeedback>{errors.Class.join(' ')}</FormFeedback>
            }
          </FormGroup>

          <FormGroup>
            <Label for="status">{labels.status}</Label>
            <Input type="select" name="status" id="status" onChange={this.updateBike('ID_Status')} value={bike.ID_Status} invalid={Boolean(errors.ID_Status)}>
              {this.state.statuses.map(status => {
                const label = labels.statusLabel(status.ID_Status)
                return <option key={`status-${status.ID_Status}`} value={status.ID_Status}>{label}</option>;
              })}
            </Input>
            {
              (errors.Class) &&
              <FormFeedback>{errors.Class.join(' ')}</FormFeedback>
            }
          </FormGroup>

          <FormGroup>
            <Label for="photo">{labels.photo}</Label>
            <Input type="file" name="photo" id="photo" />
            <FormText color="muted">{labels.takeAPhoto}</FormText>
          </FormGroup>

          <Button onClick={this.submit}>Submit</Button>
        </Form>
      </DefaultLayout>
    );
  }
}

NewBikeForm.defaultProps = {
  bike: {
    SerialNumber: "",
    Description: "",
    Brand: "",
    Color: "",
    FrameSize: "",
    TireSize: "",
    TireMaxPSI: "",
    GearCount: 0,
    BellHorn: false,
    Reflectors: false,
    Lights: false,
    ID_Status: 2
  }
};

