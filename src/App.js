import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewBike from './Components/bikes/New'
import ShowBike from './Components/bikes/Show'


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
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/bikes/new" component={NewBike} />
      <Route path="/bikes/:id" component={ShowBike} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


export default Entry;