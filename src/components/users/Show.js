import React from 'react';
import axios from 'axios';

export default class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch user record from api using id
  }

  render() {
    return (
      <p>{`This is user with id ${this.props.match.params.id}`}</p>
    );
  }
}