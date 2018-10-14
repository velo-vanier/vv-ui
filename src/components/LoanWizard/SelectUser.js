import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { labels } from '../../helpers/localization';
import LookupSelect from '../common/LookupSelect';

class SelectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: null
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
  render() {
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
        <FormGroup className="text-right">
          <Button color="success" onClick={() => this.next()}>{labels.next}</Button>{' '}
          <Button color="primary" onClick={this.props.onSkip}>{labels.createNewUser}</Button>
        </FormGroup>
      </div >
    );
  }
}

SelectUser.propTypes = {

}

export default SelectUser;
