import React from 'react';
import { Button, ListGroup, ListGroupItem, FormGroup, Label, Row, Col } from 'reactstrap';
import { labels } from '../../helpers/localization';
import API from '../../helpers/API';
import LookupSelect from '../common/LookupSelect';

class LoanInfo extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      bikes: [],
      loanDate: now,
      returnDate: now.setMonth(now.getMonth() + 1),
      helmet: 0,
      lights: 0,
      locks: []
    }
  }


  selectBike = (bike) => {
    this.setState({
      bikes: [...this.state.bikes, bike]
    });
  }

  removeBike = (bike) => {
    const newList = [...this.state.bikes];

    const index = newList.findIndex(b => b.ID_Bike == bike.ID_Bike);

    newList.splice(index, 1);

    this.setState({
      bikes: newList
    });
  }

  next() {
    if (!this.state.selectedBike)
      return;

    this.props.onSelect(this.state.selectedBike);
  }

  render() {
    const { bikes } = this.state;

    return (
      <div>
        <FormGroup>
          <Label for="bike">{labels.selecBike}</Label>
          {bikes.map((bike, i) => (<div key={i}>
            {bike.BikeLabel} <code onClick={() => this.removeBike(bike)}>X</code>
          </div>))}
          <LookupSelect
            entity="bikes"
            placeholder={labels.searchBikePlaceholder}
            onSelect={(bike) => this.selectBike(bike)}
            renderItem={bike =>
              <Row>
                <Col md="6">
                  <strong>{bike.BikeLabel} {bike.TireSize}</strong>
                </Col>
                <Col md="6">
                  <i>{bike.Description}</i>
                </Col>
              </Row>
            }
          />
        </FormGroup>
        <FormGroup className="text-right">
          <Button color="success" disabled={bikes === null} onClick={() => this.next()}>{labels.next}</Button>{' '}
        </FormGroup>
      </div >
    );
  }
}

LoanInfo.propTypes = {

}

export default LoanInfo;
