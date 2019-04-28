import React from 'react';
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { labels } from '../../helpers/localization';
import LookupSelect from '../common/LookupSelect';
var Link = require('react-router-dom').Link;

export default class ShowUserList extends React.Component {
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

      render() {
        return (
          <DefaultLayout>
            <div>
               <h1>Borrowers</h1>           
            </div>
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
        {this.state.selectedUser === null ? console.log('selected user is null')
        :
          <div> 
            <Button color="primary" href={`/users/${this.state.selectedUser.ID_User}`}>{labels.submit}</Button>{' '}
            <Button color="success" href={`/users/new`}>{labels.createNewBorrower}</Button>{' '}
          </div>
        }
        </FormGroup>
      </div >
          </DefaultLayout>
        );
      }

}

