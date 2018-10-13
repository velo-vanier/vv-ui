import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewBike from './components/bikes/New'
import ShowBike from './components/bikes/Show'
import NewUser from './components/users/New'
import ShowUser from './components/users/Show'


const Entry = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bikes/new">Add a bike</Link>
        </li>
        <li>
          <Link to="/bikes/1">Show a bike</Link>
        </li>
        <li>
          <Link to="/users/new">Add a user</Link>
        </li>
        <li>
          <Link to="/users/1">Show a user</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/bikes/new" component={NewBike} />
      <Route path="/users/new" component={NewUser} />
      <Route path="/bikes/:id" component={ShowBike} />
      <Route path="/users/:id" component={ShowUser} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


export default Entry;