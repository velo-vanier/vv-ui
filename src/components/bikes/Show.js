import React from 'react';
import JsBarcode from 'jsbarcode'
import { Table } from 'reactstrap';
import { labels } from "../../helpers/localization";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
      this.setState({ bike: data})
      // console.log(this.state.bike.data.SerialNumber)
    })
    JsBarcode("#bike-barcode", `${id}OK`, { height: 50, width: 3, text: id })
  }

  getStatus() {
    if(this.state.bike.data.Status = "undefined") {
      console.log("State is undefined")
      // return <FormGroup check>
      //       <Label check>
      //         <Input
      //           type="checkbox"
      //           id="Reflectors"
      //           name="Reflectors"
      //           checked={this.state.bike.data.Reflectors}
      //         />{" "}
      //         {/* {labels.reflectors()} */}
      //       </Label>
      //     </FormGroup>
    }
    else {
    }
  }

  render() {
    return (
      <DefaultLayout>
        <div className="container">
        <div className="justify-content-left">
        <h1><span class="label label-default">Bike Profile</span></h1>
        <img id="bike-barcode" alt="barcode"></img>
        </div>
          <div className="col-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="..." alt="..."></img>
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

      </DefaultLayout>
    );
  }
}
