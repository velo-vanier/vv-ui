import React from 'react';
import DefaultLayout from '../layouts/Default'
import API from '../../helpers/API'

export default class BikeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikes: [], page: 1 }
  }

  componentDidMount() {
    API.get('bikes', { page: 1 }).then(res => {
      console.log('data', res)
      this.setState({ bikes: res.data.data })
    })
  }

  render() {
    return (
      <DefaultLayout>
        {
          this.state.bikes.map(bike => {
            return JSON.stringify(bike)
          })
        }
      </DefaultLayout>
    );
  }
}