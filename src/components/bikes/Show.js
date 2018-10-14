import React from 'react';
import JsBarcode from 'jsbarcode'
import { Table } from 'reactstrap';
import { labels } from "../../helpers/localization";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container } from "reactstrap";
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {
        data: {
          BellHorn: null,
          BikeLabel: null,
          Brand: null,
          Class: null,
          Colour: null,
          Description: null,
          GearCount: null,
          ID_Bike: 1234,
          ID_Status: null,
          Lights: null,
          Reflectors: null,
          SerialNumber: 123,
          TireMaxPSI: null,
          TireSize: null,
          history: null,
          photos: null

        }
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch bike record from api using id
    console.log('id', id)
    API.get(`bikes/${id}`).then(data => {
      this.setState({ bike: data })
      // console.log(this.state.bike.data.SerialNumber)
    })
    JsBarcode("#bike-barcode", `${id}OK`, { height: 50, width: 3, text: id })
  }
  translateStatus() {
    if (this.state.bike.data.ID_Status == "5") {
      return <td>In Test</td>
    }
    if (this.state.bike.data.ID_Status == "2") {
      return <td>Available</td>
    }
    if (this.state.bike.data.ID_Status == "3") {
      return <td>On Loan</td>
    }
    if (this.state.bike.data.ID_Status == "4") {
      return <td>On Hold</td>
    }
  }

  getStatus() {
    if (this.state.bike.data.ID_Status == "5" || this.state.bike.data.ID_Status == "6") {
      console.log("State is repair or test")
      return <Container>
        <h1>Repair Items</h1>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="gears"
              name="gears"
              checked={this.state.bike.data.Gears}
            />{" "}
            {labels.gears}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="tires"
              name="tires"
              checked={this.state.bike.data.Gears}
            />{" "}
            Tires
            {labels.tires}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="brakes"
              name="brakes"
              checked={this.state.bike.data.Brakes}
            />{" "}
            Brakes
            {labels.brakes}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="seat"
              name="seat"
              checked={this.state.bike.data.Seat}
            />{" "}
            Seat
            {labels.seat}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="handlebar"
              name="handlebar"
              checked={this.state.bike.data.Handlebar}
            />{" "}
            Handle Bar
            {labels.handlebar}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="frame"
              name="frame"
              checked={this.state.bike.data.Frame}
            />{" "}
            Frame
            {labels.frame}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="reflectors"
              name="reflectors"
              checked={this.state.bike.data.Reflectors}
            />{" "}
            {labels.reflectors}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="lights"
              name="lights"
              checked={this.state.bike.data.Lights}
            />{" "}
            {labels.lights}
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="kickstand"
              name="kickstand"
              checked={this.state.bike.data.kickstand}
            />{" "}
            Kickstand
            {labels.kickstand}
          </Label>
        </FormGroup>
      </Container>
    }
    else {
    }
  }

  render() {
    const photoSrc = (this.state.bike.data.photos && !!this.state.bike.data.photos.length) ? this.state.bike.data.photos[0].url : "https://img02.aws.kooomo-cloud.com/upload/denver-bike/images/17285_medium.jpg?v=1";
    return (
      <DefaultLayout>
        <div className="container">
        <div className="justify-content-left">
        <h1><span class="label label-default">{labels.profileBike}</span></h1>
        <img id="bike-barcode" alt="barcode"></img>
        </div>
          <div className="col-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={photoSrc} alt={this.state.bike.data.Brand}></img>
            </a>
                      <div>
                      <h5><span class="label label-default">{labels.status}</span></h5>
                      <p>{`${this.state.bike.data.status}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.serialNumber}</span></h5>
                      <p>{`${this.state.bike.data.SerialNumber}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.brand}</span></h5>
                      <p>{`${this.state.bike.data.Brand}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.colour}</span></h5>
                      <p>{`${this.state.bike.data.Colour}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.bikeClass}</span></h5>
                      <p>{`${this.state.bike.data.bikeClass}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.tireSize}</span></h5>
                      <p>{`${this.state.bike.data.tireSize}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.maxPSI}</span></h5>
                      <p>{`${this.state.bike.data.maxPSI}`}</p>
                      </div>

                      <div>
                      <h5><span class="label label-default">{labels.gears}</span></h5>
                      <p>{`${this.state.bike.data.gears}`}</p>
                      </div>
          </div>

        </div>

        {this.getStatus()}
      </DefaultLayout>
    );
  }
}
