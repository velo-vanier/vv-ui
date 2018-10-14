import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        photo: null,
        name: null,
        email: null,
        phone: null,
        address: null,
        postalCode: null,
        consent: null, //boolean -- did they give consent for photos to be published
        birthday: null,
      }, 
        bikesLoaned: [{id:1, overDue:'y',dueDate:'now'},{id:2, overDue:'n',dueDate:'notnow'}],
      }
    };
  

  // class bike {
  //   constructor(id, overDue, dueDate) {
  //     this.id = id;
  //     this.overDue = overDue;
  //     this.dueDate = dueDate;
  //   }
  // }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch user record from api using id
  }
  getNumBikesOut(){
    // return this.state.bikesLoaned.length;
    return 2;
  }

  getTableRows(){
    if(this.getNumBikesOut() > 0) {
      //Write table row for each bike loaned to user/user's children

      return this.state.bikesLoaned.map(function(element) {
        console.log(element);
        return <tr>
          <td>{element.id}</td>
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
      <div>
        <img src= {this.state.photo}/>
        <p>Name: {this.state.user.name}</p>
        <Table>
          <tbody>
            <tr>
              <th>Bike ID</th>
              <th>OverDue?</th>
              <th>Due Date</th>
            </tr>
            {this.getTableRows()}
          </tbody>
        </Table>
        <p>{`Email: ${this.state.user.email}`}</p>
        <p>{`Phone: ${this.state.user.phone}`} </p>
        <p>{`Address: ${this.state.user.address}`}</p>
        <p>{`Postal Code: ${this.state.user.postalCode}`}</p>
        <p>{`Consent: ${this.state.user.consent}`}</p>
        <p>{`Birthday: ${this.state.user.birthday}`}</p>
        <p>{`Address: ${this.state.user.address}`}</p>
      </div>
    );
  }
}