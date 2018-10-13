import React from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/Default'

export default class BikeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikes: [], page: 1 }
  }

  componentDidMount() {
    axios.get(`http://eb66bc8f.ngrok.io/api/bikes?page=${this.state.page}`)
    .then(res => {
      console.log(res)
      this.setState({
        bikes: res.data.data
      })
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