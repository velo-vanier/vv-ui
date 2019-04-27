import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home'
import NewBike from './components/bikes/New'
import ShowBike from './components/bikes/Show'
import BikeIndex from './components/bikes/Index'
import NewUser from './components/users/New'
import ShowUser from './components/users/Show'
import ShowUserList from './components/users/UserList'
import LoanWizard from "./components/LoanWizard/LoanWizard";


const Entry = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bikes/new" component={NewBike} />
      <Route path="/loan" component={LoanWizard} />
      <Route path="/users/new" component={NewUser} />
      <Route path="/bikes/:id" component={ShowBike} />
      <Route path="/users/:id" component={ShowUser} />
      <Route path="/users" component={ShowUserList} />
      <Route path="/bikes/" component={BikeIndex} />
    </Switch>
  </Router>
);


export default Entry;