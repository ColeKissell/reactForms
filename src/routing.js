import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import Form from "./FormStuff/Form";
import Login from "./FormStuff/LoginForm";
import Forgot from "./FormStuff/ForgotPassword";

const Routing = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/form">New User</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/forgot">Forgot Password</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/form" component={Form} />
      <Route path="/login" component={Login} />
      <Route path="/forgot" component={Forgot} />
    </div>
  </Router>
);

export default Routing;
