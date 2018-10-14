import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { labels } from "../../helpers/localization";
import API from "../../helpers/API";

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
      <div>
        <FormGroup>
          <Label for="search">
            <strong>{labels.searchNav}</strong>
          </Label>
          <Input
            type="text"
            name="search"
            id="search"
            onChange={e =>
              this.props.updateSearchParams({ search: e.target.value })
            }
          />
          <span id="helpBlock2" class="help-block">{labels.searchBikePlaceholder}</span>
        </FormGroup>

        <FormGroup>
          <Label for="status">
            <strong>{labels.status}</strong>
          </Label>
          <Input
            type="select"
            name="status"
            id="status"
            onChange={e =>
              this.props.updateSearchParams({
                "filters[ID_Status]": e.target.value
              })
            }
          >
            {this.state.statuses.map(status => {
              const label = labels.statusLabel(status.ID_Status);
              return (
                <option
                  key={`status-${status.ID_Status}`}
                  value={status.ID_Status}
                >
                  {label}
                </option>
              );
            })}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="bikeClass">
            <strong>{labels.bikeClass}</strong>
          </Label>
          <Input
            type="select"
            name="bikeClass"
            id="bikeClass"
            onChange={e =>
              this.props.updateSearchParams({
                "filters[Class]": e.target.value
              })
            }
          >
            {Object.keys(bikeClasses).map(id => {
              return (
                <option key={`bikeClass-${id}`} value={id}>
                  {bikeClasses[id]}
                </option>
              );
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
            <Button color="primary" href="/loan">
              {labels.loan}
            </Button>
          </div>
          <div className="col-12 py-1">
            <Button color="primary" href="/bikes/new">
              {labels.newBikeTitle}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
