import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DefaultLayout from '../layouts/Default';
import SelectUser from './SelectUser';
import LoanInfo from './LoanInfo';
import LoanPhoto from './LoanPhoto';
import NewUserForm from '../users/NewUserForm';

export default class LoanWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      selectedUser: null,
      sekectedBike: null
    }
  }

  selectUser(user) {
    const prevState = Object.assign({}, this.state);

    this.setState({
      ...prevState,
      selectedUser: user,
      step: 3
    });
  }

  selectBike(bike) {
    const prevState = Object.assign({}, this.state);

    this.setState({
      ...prevState,
      selectedBike: bike,
      step: 4
    });
  }

  userCreated(newUser) {
    this.setState({
      selectedUser: newUser,
      step: 3
    });
  }

  skipToCreateUser() {
    const prevState = Object.assign({}, this.state);

    this.setState({
      ...prevState,
      step: 2
    });
  }

  render() {
    let output = null;


    switch (this.state.step) {
      case 1:
        output = <SelectUser
          onSelect={(user) => this.selectUser(user)}
          onSkip={() => this.skipToCreateUser()}
        />
        break;
      case 2:
        output = <NewUserForm
          OnUserCreated={u => this.userCreated(u)} />;
        break;
      case 3:
        output = <LoanInfo
          borrower={`${this.state.selectedUser.FirstName} ${this.state.selectedUser.LastName}`}
          onSelect={(bike) => this.selectBike(bike)}
        />;
        break;
      case 4:
        output = <LoanPhoto />;
        break;
      default: break;
    }


    return <DefaultLayout>
      {output}
    </DefaultLayout>;
  }
}
