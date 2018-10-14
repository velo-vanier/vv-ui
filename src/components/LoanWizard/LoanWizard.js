import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DefaultLayout from '../layouts/Default';
import SelectUser from './SelectUser';

export default class LoanWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            selectedUser: null
        }
    }

    selectUser(user) {
        console.log('Selected User', user)
        const prevState = Object.assign({}, this.state);

        this.setState({
            ...prevState,
            selectedUser: user,
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
                output = "Create User";
                break;
            case 3:
                output = "Select Bike";
                break;
        }


        return <DefaultLayout>
            {output}
        </DefaultLayout>;
    }
}
