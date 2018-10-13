import React from 'react';
import axios from 'axios';

export default class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        name: null,
        photo: null,
        email: null,
        phone: null,
        address: null,
        postal: null,
        consent: null,
        birthday: null,
        address: null
      } 
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch user record from api using id
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.user.name}</p>
        <img src= {this.state.photo}/>}
        <p>{`Email: ${this.state.user.email}`}</p>
        <p>{`Phone: ${this.state.user.phone}`} </p>
        <p>{`Address: ${this.state.user.address}`}</p>
        <p>{`Postal Code: ${this.state.user.postal}`}</p>
        <p>{`Consent: ${this.state.user.consent}`}</p>
        <p>{`Birthday: ${this.state.user.birthday}`}</p>
        <p>{`Address: ${this.state.user.address}`}</p>
      </div>
    );
  }
}        
