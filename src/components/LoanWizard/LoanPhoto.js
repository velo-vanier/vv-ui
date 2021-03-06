import React from 'react';
import { Button, FormGroup, Label, Row, Col, Input, Container } from 'reactstrap';
import ImageUploader from 'react-images-upload';
import { labels } from '../../helpers/localization';
import API from '../../helpers/API';


class LoanPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: null,
      bike: props.info.selectedBike,
      user: props.info.selectedUser

    }
  }

 


  onSelect(picture) {
    this.setState({ picture: picture[0] });
  }

  next() {

    console.log(this.state)

    /*API.get(`BikeHistory`).then(data => {
      console.log(data);

    })*/

    API.get(`bikeHistory`).then(data => {
      console.log(data)

    })
    

  }

  render() {

    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={p => this.onSelect(p)}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
        <FormGroup>
          {this.state.picture &&
            <img
              style={{
                maxWidth: 200,
                maxHeight: 200
              }}
              src={URL.createObjectURL(this.state.picture)}
            />
          }
        </FormGroup>
        <FormGroup className="text-right">
          <Button color="success" disabled={this.state.picture === null} onClick={() => this.next()}>{labels.next}</Button>{' '}
        </FormGroup>
      </div >
    );
  }
}

LoanPhoto.propTypes = {

}

export default LoanPhoto;
