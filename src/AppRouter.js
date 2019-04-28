import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/Home'
import LoanPage from './components/loans/Loan'
import NewBike from './components/bikes/New'
import ShowBike from './components/bikes/Show'
import BikeIndex from './components/bikes/Index'
import NewUser from './components/users/New'
import ShowUser from './components/users/Show'
import LoanWizard from "./components/LoanWizard/LoanWizard";
import LoanListing from "./components/loans/LoanListing";
import LoanReturn from "./components/loans/LoanReturn";
import LoanConfirmation from "./components/loans/LoanConfirmation";

const Entry = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bikes/new" component={NewBike} />
      <Route path="/loans/listing" component={LoanListing} />
      <Route path="/loans/add" component={LoanPage} />
      <Route path="/loans/confirmation" component={LoanConfirmation} />
      <Route path="/loans/return" component={LoanReturn} />
      /*<Route path="/loan" component={LoanWizard} />*/
      <Route path="/users/new" component={NewUser} />
      <Route path="/bikes/:id" component={ShowBike} />
      <Route path="/users/:id" component={ShowUser} />
      <Route path="/bikes/" component={BikeIndex} />
    </Switch>
  </Router>
);

export default Entry;
