import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// Components
import MainPage from './Components/MainPage/MainPage';
import About from './Components/About/About';

const RouterApp = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: 'bolder' }}>Strona domowa</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bolder' }}>O stronie</NavLink>
          </li>
        </ul>


        {/* router paths components */}
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default RouterApp;