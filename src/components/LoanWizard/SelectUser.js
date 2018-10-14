import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { labels } from '../../helpers/localization';
import LookupSelect from '../common/LookupSelect';

const SelectUser = props => {

  let selectedUser = null;

  const selectUser = user => {
    selectedUser = user;
  }

  const next = () => {
    if (!selectedUser)
      return;

    props.onSelect(selectedUser);
  }

  return (
    <div>
      <FormGroup>
        <Label for="user">{labels.selecUser}</Label>
        <LookupSelect
          placeholder={labels.searchUserPlaceholder}
          entity="users"
          apiParams={{ "filters[Role]": "Borrower" }}
          titleFields={["FirstName", "LastName"]}
          renderItem={user => user.FirstName + " " + user.LastName}
          onSelect={user => selectUser(user)}
        />
      </FormGroup>
      <FormGroup className="text-right">
        <Button color="success" onClick={() => next()}>{labels.next}</Button>{' '}
        <Button color="primary" onClick={props.onSkip}>{labels.createNewUser}</Button>
      </FormGroup>
    </div >
  );
}

SelectUser.propTypes = {

}

export default SelectUser;
