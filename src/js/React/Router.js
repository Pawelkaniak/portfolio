import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

// Components
import MainPage from './Components/MainPage';

const RouterApp = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
          </li>
        </ul>

        <Route exact path="/" component={MainPage} />
        <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
      </div>
    </Router>
  )
}

export default RouterApp;