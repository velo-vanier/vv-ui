import React from 'react';
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        data: {
          CreateDateTime: null,
          Email: null,
          FirstName: null,
          ID_User: null,
          LastName: null,
          ParentID: null,
          Password: null,
          Phone: null,
          PostalCode: null,
          Role: null,
          photos: [{ url: "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/03/cat-tongue_AdobeStock_70141743-1024x719.jpeg" }],
          PhotoConsent: null, //boolean -- did they give consent for photos to be published
          dependents: null, //array of user records that have ParentId = this.user.data.ID_User
        }
      },
      bikes: {
        data: {
          data: [{
            BikeLabel: null,
            Class: null,
            overDue: null,
            history: [{ DueDateTime: null }]
          }]
        }
      }
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    // fetch bike record from api using id
    console.log('id', id)

    //get bikes that are On Loan to the User with id
    //ID_Status = 3 = On Loan
    API.get(`bikes`, { 'filters[ID_User]': id, 'filters[ID_Status]': 3 }).then(data => {
      console.log(data)
      this.setState({ bikes: data })
      console.log(this.state.bikes.data.data);

    })
    API.get(`users/${id}`).then(data => {
      console.log(data)
      this.setState({ user: data });
    })
  }

  getNumBikesOut() {
    if (this.state.bikes.data.data && !!this.state.bikes.data.data.length) {
      return this.state.bikes.data.data.length;
    }
    else {
      return 0;
    }
  }


  getTableRowsBikesOut() {
    if (this.getNumBikesOut() > 0) {
      //Write table row for each bike loaned to user/user's children

      return this.state.bikes.data.data.map(function (element) {
        return <tr>
          <td>{element.BikeLabel}</td>
          <td>{element.overDue}</td>
          <td>{element.history[0].DueDateTime}</td>
        </tr>;
      })
    }
    else {
      return <tr>
        <td>No Bikes Out</td>
        <td>No Bikes Out</td>
        <td>No Bikes Out</td>
      </tr>;
    }
  }

  getTableRowsChildren() {
    if (this.state.user.data.dependents && !!this.state.user.data.dependents.length) {
      return this.state.user.data.dependents.map(function (element) {
        return <tr>
          <td>{element.FirstName}</td>
          <td>{element.LastName}</td>
        </tr>;
      })
    }
    else {
      return <tr>
        <td>No Children</td>
        <td></td>
      </tr>
    }
  }

  render() {
    const photoSrc = (this.state.user.data.photos && !!this.state.user.data.photos.length) ? this.state.user.data.photos[0].url : "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/03/cat-tongue_AdobeStock_70141743-1024x719.jpeg";
    return (
      <DefaultLayout>
        <h2>{`${this.state.user.data.FirstName} ${this.state.user.data.LastName}`}</h2>
        <img src={photoSrc} alt={this.state.user.data.FirstName} width='400px' />
        <p>{this.state.user.FirstName} {this.state.user.LastName} </p>
        <div>
          <h2>Bikes Loaned</h2>
          <table class="table">
            <tbody>
              <tr>
                <th>Bike Label</th>
                <th>OverDue?</th>
                <th>Due Date</th>
              </tr>
              {this.getTableRowsBikesOut()}
            </tbody>
          </table>
        </div>
        <div style={{ height: "40px" }}></div>
        <div>
          <table class="table">
            <tbody>
              <tr>
                <td>Phone</td>
                <td>{`${this.state.user.data.Phone}`}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{`${this.state.user.data.Email}`}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{`${this.state.user.data.Address}`}</td>
              </tr>
              <tr>
                <td>Postal Code</td>
                <td>{`${this.state.user.data.PostalCode}`}</td>
              </tr>
              <tr>
                <td>Children Under 18</td>
                {this.getTableRowsChildren()}
              </tr>
              <tr>
                <td>Photo Consent</td>
                <td>{`${this.state.user.data.PhotoConsent}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DefaultLayout>
    );
  }
} 
