import React from 'react';
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
          ID_Bike: null,
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
      console.log(data)
      this.setState({ bike: data})
      // console.log(this.state.bike.data.SerialNumber)
    })
  }

  render() {
    return (
      <DefaultLayout>
        <p>{`This is bike id ${this.props.match.params.id}`}</p>
        <img src="`${this.state.bike.photos[0]}`" alt="..."></img>

        <div class="row">
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img src="..." alt="..."></img>
            </a>
          </div>
        </div>

        <table class="table">
          <tbody>
            <tr>
              <td>Serial Number</td>
              {/* <td>{`${this.state.bike.serialNumber}`}</td> */}
              <td>{`${this.state.bike.data.SerialNumber}`}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{`${this.state.bike.data.Brand}`}</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>{`${this.state.bike.data.Color}`}</td>
            </tr>
            <tr>
              <td>Frame Class</td>
              <td>{`${this.state.bike.data.Class}`}</td>
            </tr>
            <tr>
              <td>Tire Size</td>
              <td>{`${this.state.bike.data.TireSize}`}</td>
            </tr>
            <tr>
              <td>Tire Pressure</td>
              <td>{`${this.state.bike.data.TireMaxPSI}`}</td>
            </tr>
            <tr>
              <td>Number of Gears</td>
              <td>{`${this.state.bike.data.GearCount}`}</td>
            </tr>
            <tr>
              <td>Bell or Horn</td>
              <td>{`${this.state.bike.data.BellHorn}`}</td>
            </tr>
            <tr>
              <td>Reflectors</td>
              <td>{`${this.state.bike.data.Reflectors}`}</td>
            </tr>
            <tr>
              <td>Lights</td>
              <td>{`${this.state.bike.data.Lights}`}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{`${this.state.bike.data.Status}`}</td>
            </tr>

          </tbody>
        </table>

      </DefaultLayout>
    );
  }
}