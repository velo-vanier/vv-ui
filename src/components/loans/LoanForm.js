import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Row, Col, Container } from "reactstrap";
import { labels } from "../../helpers/localization";
import LookupSelect from '../common/LookupSelect';
import API from "../../helpers/API"
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ImageUploader from 'react-images-upload';
import 'react-datepicker/dist/react-datepicker.css';
import DefaultLayout from "../layouts/Default";

export default class LoanForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedUser: null,
      bikes: [],
      loanDate: moment(),
      returnDate: moment().add(4, 'w'),//4 weeks
      helmet: 0,
      lights: 0,
      locks: [],
      picture: null
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

  onSelect(picture) {
    this.setState({ picture: picture[0] });
  }

  render() {
    const { bikes } = this.state;

    return (
      <DefaultLayout>
        <Container>
          <Row>
            <Col xs="10">
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
                    <Col xs="3">
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
                    <Col xs="3">
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
              <a href="confirmation" class="btn btn-lg btn-success">Submit</a>
            </Col>
          </Row>
        </Container>
      </DefaultLayout>
    );
  }


  submit() {
    alert('successfully submitted form!!!')
    API
      .post('loans', this.state.user)
      .then(res => {})
  }

}
