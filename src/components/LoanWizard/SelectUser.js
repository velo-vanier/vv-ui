import React from 'react';
import { Button, ListGroup, ListGroupItem, FormGroup, Label, Input } from 'reactstrap';
import { labels } from '../../helpers/localization';

class SelectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1001, firstName: 'User1' },
        { id: 1002, firstName: 'User2' },
        { id: 1003, firstName: 'User3' }
      ],
      selectedUser: null
    }
  }

  searchUser = (e) => {
    const txt = e.target.value;
    //search from api

    const newList = txt === 'no' ? [] : [
      { id: 1004, firstName: 'User4' },
      { id: 1005, firstName: 'User5' },
      { id: 1006, firstName: 'User6' }];

    const prevState = this.state;
    let { selectedUser } = prevState;
    if (newList.filter(u => selectedUser && u.id === selectedUser.id).length === 0)
      selectedUser = null;

    this.setState({
      ...prevState,
      users: newList,
      selectedUser
    });
  }

  selectUser = (user) => {
    console.log(user);
    const prevState = this.state;
    this.setState({
      ...prevState,
      selectedUser: user
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <FormGroup>
          <Label for="user">{labels.selecUser}</Label>
          <Input
            type="text"
            placeholder={labels.searchUserPlaceholder}
            onChange={(e) => this.searchUser(e)}>
          </Input>
        </FormGroup>
        <FormGroup>
          <ListGroup>
            {
              users.length === 0 ?
                "No data" :
                users.map((u, i) => <ListGroupItem
                  key={i}
                  active={this.state.selectedUser && this.state.selectedUser.id === u.id}
                  onClick={() => this.selectUser(u)}>
                  <strong>{u.firstName}</strong>
                </ListGroupItem>)
            }
          </ListGroup>
        </FormGroup>
        <FormGroup>
          <Button color="success" onClick={() => this.props.onSelect(this.state.selectedUser)}>{labels.next}</Button>{' '}
          <Button color="primary" onClick={this.props.onSkip}>{labels.createNewUser}</Button>
        </FormGroup>
      </div >
    );
  }
}

SelectUser.propTypes = {

}

export default SelectUser;
