import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Login from './Login.js'
import Navbar from './Navbar.js'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
