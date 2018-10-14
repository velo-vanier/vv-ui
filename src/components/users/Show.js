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
          history:null,
          photos:null,
          PhotoConsent: null //boolean -- did they give consent for photos to be published
        }
      }, 
      bikes: {
        data: {
          data: [{
              BikeLabel: null,
              Class: null,
              overDue: null,
              dueDate: null}]
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
      API.get(`bikes`, {'filters[ID_User]': id, /*'filters[ID_Status]':3 */ }).then(data => {
        console.log(data)
        this.setState({bikes: data})
        console.log(this.state.bikes.data.data);

      })
      API.get(`users/${id}`).then(userData => {
        console.log(userData)
        this.setState({user: userData});
      })
    }

    getPhoto(){
      if(this.state.user.data.photos){
        return this.state.user.data.photos[0];
      }
    }
    getNumBikesOut(){
      return this.state.bikes.data.data.length;
    }


  getTableRows(){
    if(this.getNumBikesOut() > 0) {
      //Write table row for each bike loaned to user/user's children

      return this.state.bikes.data.data.map(function(element) {
        return <tr>
          <td>{element.BikeLabel}</td>
          <td>{element.overDue}</td>
          <td>{element.dueDate}</td>
        </tr>;
      })
    }
    else{
      return <tr>
                <td>No Bikes Out</td>
                <td>No Bikes Out</td>
                <td>No Bikes Out</td>
              </tr>;
    }
  }

  render() {
    return (
      <DefaultLayout>
        <h2>{`${this.state.user.data.FirstName} ${this.state.user.data.LastName}`}</h2>
        <img src= {this.getPhoto()}/>
        <p>{this.state.user.FirstName} {this.state.user.LastName} </p>
        <h2>Bikes Loaned</h2>
        <Table>
          <tbody>
            <tr>
              <th>Bike Label</th>
              <th>OverDue?</th>
              <th>Due Date</th>
            </tr>
            {this.getTableRows()}
          </tbody>
        </Table>
        <table>
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
              <td>Photo Consent</td>
              <td>{`${this.state.user.data.PhotoConsent}`}</td>
            </tr>
          </tbody>
        </table>         
      </DefaultLayout>
    );
  }
} 