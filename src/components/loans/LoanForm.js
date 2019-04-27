import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Row, Col, Container } from "reactstrap";
import { labels } from "../../helpers/localization";
import LookupSelect from '../common/LookupSelect';
import API from "../../helpers/API"
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class LoanForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser: null,
      bikes: [],
      loanDate: moment()
    }
  }

  selectUser(user) {
    this.setState({ selectedUser: user });
  }

  reset() {
    this.setState({ selectedUser: null });
  }

  next() {
    if (!this.state.selectedUser)
      return;

    this.props.onSelect(this.state.selectedUser);
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


  render() {
    const { bikes } = this.state;

    return (
      <div>
        <FormGroup>
          <Label for="user">{labels.selecUser}</Label>
          {this.state.selectedUser === null ?
            <LookupSelect
              placeholder={labels.searchUserPlaceholder}
              entity="users"
              apiParams={{ "filters[Role]": "Borrower" }}
              renderItem={user => user.FirstName + " " + user.LastName}
              onSelect={user => this.selectUser(user)}
            />
            :
            <Input
              type="text"
              value={this.state.selectedUser.FirstName + " " + this.state.selectedUser.LastName}
              onClick={e => this.reset()}
            />
          }
        </FormGroup>

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
      </div >
    );
  }


  submit() {
    alert('successfully submitted form!!!')
    API
      .post('loan', this.state.user)
      .then(res => {})
  }

}
