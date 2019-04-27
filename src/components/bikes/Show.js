import React from 'react'
import JsBarcode from 'jsbarcode'
import { Table } from 'reactstrap'
import { labels } from '../../helpers/localization'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Container
} from 'reactstrap'
import DefaultLayout from '../layouts/Default'
import API from '../../helpers/API'

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bike: {
        data: {
          BellHorn: null,
          BikeLabel: null,
          Brand: null,
          Class: null,
          Colour: null,
          Comments: null,
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
    JsBarcode('#bike-barcode', `${id}OK`, { height: 50, width: 3, text: id })
  }
  translateStatus() {
    if (this.state.bike.data.ID_Status == '5') {
      return <td>In Test</td>
    }
    if (this.state.bike.data.ID_Status == '2') {
      return <td>Available</td>
    }
    if (this.state.bike.data.ID_Status == '3') {
      return <td>On Loan</td>
    }
    if (this.state.bike.data.ID_Status == '4') {
      return <td>On Hold</td>
    }
  }
  getAccessory(accessory) {
    const accessoryProp = this.state.bike.accessory
    if (accessorProp && accessory === 'BellHorn') {
      return (
        <td>
          <span class="badge badge-warning">Bell/Horns</span>
        </td>
      )
    }
    if (accessoryProp && accessory === 'Reflectors') {
      return (
        <td>
          <span class="badge badge-info">Reflectors</span>
        </td>
      )
    }

    if (accessoryProp && accessory === 'Lights') {
      return (
        <td>
          <span class="badge badge-light">Lights</span>
        </td>
      )
    }
  }
  getStatus() {
    if (
      this.state.bike.data.ID_Status == '5' ||
      this.state.bike.data.ID_Status == '6'
    ) {
      console.log('State is repair or test')
      return (
        <Container>
          <h1>Repair Items</h1>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="gears"
                name="gears"
                checked={this.state.bike.data.Gears}
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
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
              />{' '}
              Kickstand
              {labels.kickstand}
            </Label>
          </FormGroup>
        </Container>
      )
    } else {
    }
  }

  render() {
    const photoSrc =
      this.state.bike.data.photos && !!this.state.bike.data.photos.length
        ? this.state.bike.data.photos[0].url
        : 'https://travelwithkitties.com/wp-content/uploads/2018/09/Funny-Animals-On-Bike-nice-cat.jpg'

    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-6 col-md-3">
            <a href="#" className="thumbnail">
              <img
                src={photoSrc}
                alt={this.state.bike.data.Brand}
                width="400px"
              />
            </a>
          </div>
        </div>
        {/* { <div className="row justify-content-start"> {<img id="bike-barcode" alt="barcode" />}</div> } */}

        <div>
          <Table>
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
                <td>Bike Class</td>
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
                <td>Status</td>
                {this.translateStatus()}
                {/* <td>{`${this.state.bike.data.ID_Status}`}</td> */}
              </tr>
              <tr>
                <td>
                  <span class="badge badge-warning">Bell/Horns</span>
                </td>
                <td>
                  <span class="badge badge-info">Reflectors</span>
                </td>
                <td>
                  <span class="badge badge-light">Lights</span>
                </td>
              </tr>
              <tr>
                <td>Comments</td>
                <td>{`${this.state.bike.data.Comments}`}</td>
              </tr>
              <tr>{this.getAccessory('BellHorn')}</tr>
              <tr>{this.getAccessory('Reflectors')}</tr>
              <tr>{this.getAccessory('Lights')}</tr>
            </tbody>
          </Table>
        </div>

        {this.getStatus()}
      </DefaultLayout>
    )
  }
}
