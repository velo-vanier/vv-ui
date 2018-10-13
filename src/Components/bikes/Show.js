import React from 'react';
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: {} }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log('id', id)
    API.get(`bikes/${id}`).then(data => {
      console.log(data)
      this.setState({ bike: data })
    })
  }

  render() {
    return (
      <DefaultLayout>
        <p>{`This is bike id ${this.props.match.params.id}`}</p>
      </DefaultLayout>
    );
  }
}