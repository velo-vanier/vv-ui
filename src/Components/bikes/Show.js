import React from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/Default'

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {
        serialNumber: 123,
        brand: null,
        colour: null,
        frameSize: null,
        tireSize: null,
        tirePressure: null,
        numberOfGears: null,
        bellOrHorn: null,
        frontReflector: null,
        backReflector: null,
        lights: null,
        status: null,
        photos: null
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch bike record from api using id
    axios.get('http://eb66bc8f.ngrok.io/api/bike/167')
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
              <td>{`${this.state.bike.serialNumber}`}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{`${this.state.bike.brand}`}</td>
            </tr>
            <tr>
              <td>Colour</td>
              <td>{`${this.state.bike.colour}`}</td>
            </tr>
            <tr>
              <td>Frame Size</td>
              <td>{`${this.state.bike.frameSize}`}</td>
            </tr>
            <tr>
              <td>Tire Size</td>
              <td>{`${this.state.bike.tireSize}`}</td>
            </tr>
            <tr>
              <td>Tire Pressure</td>
              <td>{`${this.state.bike.tirePressure}`}</td>
            </tr>
            <tr>
              <td>Number of Gears</td>
              <td>{`${this.state.bike.numberOfGears}`}</td>
            </tr>
            <tr>
              <td>Bell or Horn</td>
              <td>{`${this.state.bike.bellOrHorn}`}</td>
            </tr>
            <tr>
              <td>Front Reflector</td>
              <td>{`${this.state.bike.frontReflector}`}</td>
            </tr>
            <tr>
              <td>Back Reflector</td>
              <td>{`${this.state.bike.backReflector}`}</td>
            </tr>
            <tr>
              <td>Lights</td>
              <td>{`${this.state.bike.lights}`}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{`${this.state.bike.status}`}</td>
            </tr>

          </tbody>
        </table>

      </DefaultLayout>
    );
  }
}