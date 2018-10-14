import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { labels } from "../../helpers/localization";
import API from '../../helpers/API'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statuses: [] };
  }

  componentDidMount() {
    API.get("statuses").then(res => {
      this.setState({ statuses: res.data.data });
    });
  }

  render() {
    const bikeClasses = labels.bikeClassLabels;

    return (
      <Form>
        <FormGroup>
          <Label for="search"><strong>Search</strong></Label>
          <Input type="text" name="search" id="search" />
        </FormGroup>

        <FormGroup>
          <Label for="status"><strong>{labels.status}</strong></Label>
          <Input type="select" name="status" id="status" multiple>
            {this.state.statuses.map(status => {
              const label = labels.statusLabel(status.ID_Status)
              return <option key={`status-${status.ID_Status}`} value={status.ID_Status}>{label}</option>;
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="bikeClass"><strong>{labels.bikeClass}</strong></Label>
          <Input type="select" name="bikeClass" id="bikeClass" multiple>
            {Object.keys(bikeClasses).map((id) => {
              return <option key={`bikeClass-${id}`} value={id}>{bikeClasses[id]}</option>;
            })}
          </Input>
        </FormGroup>
        <div className="row">
          <div className="col-12">
            <Button color="link">Sort by newest</Button>
          </div>
          <div className="col-12">
            <Button color="link">Sort by oldest</Button>
          </div>
          <div className="col-12 py-1">
            <Button color="primary" href='/loan'>Loan a bike</Button>
          </div>
          <div className="col-12 py-1">
            <Button color="primary" href="/bikes/new">Add a bike</Button>
          </div>
        </div>
      </Form>
    );
  }
}