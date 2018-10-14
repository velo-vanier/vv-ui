import React from 'react';
import { Button, FormGroup, Label, Row, Col, Input, Container } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { labels } from '../../helpers/localization';
import LookupSelect from '../common/LookupSelect';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class LoanInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bikes: [],
      loanDate: moment(),
      returnDate: moment().add(4, 'w'),//4 weeks
      helmet: 0,
      lights: 0,
      locks: []
    }
  }


  selectBike(bike) {
    this.setState({
      bikes: [...this.state.bikes, bike]
    });
  }

  removeBike(bike) {
    const newList = [...this.state.bikes];

    const index = newList.findIndex(b => b.ID_Bike === bike.ID_Bike);

    newList.splice(index, 1);

    this.setState({
      bikes: newList
    });
  }

  changeLoanDate(date) {
    const loanDate = new moment(date),
      returnDate = new moment(date.add(4, 'w'));

    this.setState({ loanDate, returnDate });
  }

  changeReturnDate = date => {
    this.setState({ returnDate: date });
  }

  helmetChecked(e) {
    this.setState({
      helmet: e.target.checked ? 1 : 0
    });
  }

  helmetNumberChange(e) {
    this.setState({
      helmet: parseInt(e.target.value)
    });
  }

  lightsChecked(e) {
    this.setState({
      lights: e.target.checked ? 1 : 0
    });
  }

  lightsNumberChange(e) {
    this.setState({
      lights: parseInt(e.target.value)
    });
  }

  locksChecked(e) {
    this.setState({
      locks: e.target.checked ? [''] : []
    });
  }

  changeLock(index, event) {
    const newLocksList = this.state.locks.map((l, i) => {

      return i === index ? event.target.value : l;
    });

    this.setState({
      locks: newLocksList
    })
  }

  addLock() {
    const newLocksList = this.state.locks.map(l => l);
    newLocksList.push('');
    this.setState({
      locks: newLocksList
    })
  }

  next() {
    if (this.state.bikes.length === 0)
      return;

    this.props.onSelect(this.state);
  }

  render() {
    const { bikes } = this.state;

    return (
      <div>
        <h4>{this.props.borrower}</h4>
        <FormGroup>
          <Label htmlFor="bike">{labels.selecBike}</Label>
          {bikes.map((bike, i) => (<div key={i}>
            {bike.BikeLabel} <code onClick={() => this.removeBike(bike)}>X</code>
          </div>))}
          <LookupSelect
            entity="bikes"
            apiParams={{"filters[ID_Status]": "2"}}
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
        <FormGroup>
          <label htmlFor="loadDate">{labels.loanDate}</label>
          <DatePicker
            className="form-control"
            selected={this.state.loanDate}
            onChange={date => this.changeLoanDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="returnDate">{labels.returnDate}</label>
          <DatePicker
            className="form-control"
            selected={this.state.returnDate}
            onChange={date => this.changeReturnDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <Container>
            <Row>
              <Col xs="6">
                <Label check>
                  <Input
                    type="checkbox"
                    checked={this.state.helmet > 0}
                    onChange={e => this.helmetChecked(e)}
                  />{" "}
                  {labels.helmet}
                </Label>
              </Col>
              <Col xs="6">
                {this.state.helmet > 0 &&
                  <Input
                    type="select"
                    value={this.state.helmet}
                    onChange={e => this.helmetNumberChange(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                }
              </Col>
            </Row>
          </Container>
        </FormGroup>
        <FormGroup>
          <Container>
            <Row>
              <Col xs="6">
                <Label check>
                  <Input
                    type="checkbox"
                    checked={this.state.lights > 0}
                    onChange={e => this.lightsChecked(e)}
                  />{" "}
                  {labels.lights}
                </Label>
              </Col>
              <Col xs="6">
                {this.state.lights > 0 &&
                  <Input
                    type="select"
                    value={this.state.lights}
                    onChange={e => this.lightsNumberChange(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                }
              </Col>
            </Row>
          </Container>
        </FormGroup>
        <FormGroup>
          <Container>
            <Label check>
              <Input
                type="checkbox"
                checked={this.state.locks.length > 0}
                onChange={e => this.locksChecked(e)}
              />{" "}
              {labels.locks}
            </Label>
            {this.state.locks.length > 0 &&
              <div>
                {
                  this.state.locks.map((lock, i) => <FormGroup key={i}>
                    <Input
                      type="text"
                      value={lock}
                      placeholder={labels.lockPlaceholder}
                      onChange={e => this.changeLock(i, e)}
                    />
                  </FormGroup>)
                }
                <Button color="link"
                  onClick={e => this.addLock(e)}
                >{labels.addLock}</Button>
              </div>
            }
          </Container>
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
