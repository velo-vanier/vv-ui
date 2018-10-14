import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DefaultLayout from '../layouts/Default';
import SelectUser from './SelectUser';
import LoanInfo from './LoanInfo';

export default class LoanWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
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
        output = "Create User";
        break;
      case 3:
        output = <LoanInfo
          onSelect={(bike) => this.selectBike(bike)}
        />;
        break;
      case 4:
        output = "Step 4";
        break;
      default: break;
    }


    return <DefaultLayout>
      {output}
    </DefaultLayout>;
  }
}
