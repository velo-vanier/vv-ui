import React from 'react';
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';

export default class ShowUserList extends React.Component {
    constructor(props) {
        super(props);
      } 
        componentDidMount() {
        }

      render() {
        return (
          <DefaultLayout>
            <div>
               <h1>Users List!</h1>           
            </div>
          </DefaultLayout>
        );
      }

}

