import React from 'react';
import axios from 'axios';

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: {} }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch bike record from api using id
  }

  render() {
    return (
      <p>{`This is bike id ${this.props.match.params.id}`}</p>
    );
  }
}