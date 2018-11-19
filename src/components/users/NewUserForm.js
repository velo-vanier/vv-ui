import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { labels } from "../../helpers/localization";
import API from "../../helpers/API"


export default class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user, errors: {} };
  }

  updateUser = field => event => {
    this.setState({
      user: {
        ...this.state.user,
        [field]: event.target.value
      }
    });
  };

  updateUserChecked = field => event => {
    this.setState({
      user: {
        ...this.state.user,
        [field]: event.target.checked
      }
    });
  };

  submit = () => {
    let { user } = this.state,
      formIsValid = true,
      errors = {};

    if (user.FirstName === '') {
      formIsValid = false;
      errors.FirstName = ['The first name field is required.'];
    }

    if (user.LastName === '') {
      formIsValid = false;
      errors.LastName = ['The last name field is required.'];
    }

    if (user.Email === '') {
      formIsValid = false;
      errors.Email = ['The email field is required.'];
    }

    if (user.Phone === '') {
      formIsValid = false;
      errors.Phone = ['The phone field is required.'];
    }

    if (user.PostalCode === '') {
      formIsValid = false;
      errors.PostalCode = ['The postal code field is required.'];
    }
    else if (!user.PostalCode.toLowerCase().startsWith('k1l')) {
      formIsValid = false;
      errors.PostalCode = ['The postal code should start with K1L.'];
    }

    if (!formIsValid) {
      this.setState({ errors: errors })
      return;
    }

    API
      .post('users', this.state.user)
      .then(res => {
        if (res.status === 200) {
          if (this.props.onUserCreated) {
            return this.props.onUserCreated(res.data)
          }
          this.props.history.push(`/users/${res.data.ID_User}`)
        }
      })
      .catch(res => {
        console.log(res.errors);
        this.setState({ errors: res.errors })
      })
  }

  render() {
    const { user, errors } = this.state;

    return (
      <Form onSubmit={this.submit}>
        <FormGroup>
          <Label for="firstName">{labels.firstName}</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            value={user.FirstName}
            onChange={this.updateUser("FirstName")}
            invalid={Boolean(errors.FirstName)}
          />
          {
            (errors.FirstName) &&
            <FormFeedback>{errors.FirstName.join(' ')}</FormFeedback>
          }
        </FormGroup>
        <FormGroup>
          <Label for="lastName">{labels.lastName}</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={user.LastName}
            onChange={this.updateUser("LastName")}
            invalid={Boolean(errors.LastName)}
          />
          {
            (errors.LastName) &&
            <FormFeedback>{errors.LastName.join(' ')}</FormFeedback>
          }
        </FormGroup>
        <FormGroup>
          <Label for="email">{labels.email}</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="user@example.com"
            value={user.Email}
            onChange={this.updateUser("Email")}
            invalid={Boolean(errors.Email)}
          />
          {
            (errors.Email) &&
            <FormFeedback>{errors.Email.join(' ')}</FormFeedback>
          }
        </FormGroup>
        <FormGroup>
          <Label for="phone">{labels.phone}</Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="123-456-7890"
            value={user.Phone}
            onChange={this.updateUser("Phone")}
            invalid={Boolean(errors.Phone)}
          />
          {
            (errors.Phone) &&
            <FormFeedback>{errors.Phone.join(' ')}</FormFeedback>
          }
        </FormGroup>
        <FormGroup>
          <Label for="postalCode">{labels.postalCode}</Label>
          <Input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="K1L L0L"
            value={user.PostalCode}
            onChange={this.updateUser("PostalCode")}
            invalid={Boolean(errors.PostalCode)}
          />
          {
            (errors.PostalCode) &&
            <FormFeedback>{errors.PostalCode.join(' ')}</FormFeedback>
          }
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="photoConsent"
              name="photoConsent"
              checked={user.PhotoConsent}
              onChange={this.updateUserChecked("PhotoConsent")}
              invalid={Boolean(errors.PhotoConsent)}
            />{" "}
            {labels.photoConsent}
          </Label>
          {
            (errors.PhotoConsent) &&
            <FormFeedback>{errors.PhotoConsent.join(' ')}</FormFeedback>
          }
        </FormGroup>

        <FormGroup style={{ display: 'none' }}>
          <Label for="role">{labels.userRole}</Label>
          <Input type="select" name="role" id="role" onChange={this.updateUser('Role')} value={user.Role} invalid={Boolean(errors.Role)}>
            <option value={'Borrower'}>Borrower</option>
            <option value={'Volunteer'}>Volunteer</option>
            <option value={'Staff'}>Staff</option>
          </Input>
          {
            (errors.Role) &&
            <FormFeedback>{errors.Role.join(' ')}</FormFeedback>
          }
        </FormGroup>

        <FormGroup className="text-right">
          <Button color="success" onClick={this.submit}>Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

NewUserForm.defaultProps = {
  user: {
    Role: "Borrower",
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: null,
    ParentID: null,
    CreateDateTime: null,
    PostalCode: "",
    PhotoConsent: null
  }
};

