import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//LayoutParts
import Header from './Components/Layouts/Header/Header'

// Components
import MainPage from './Components/MainPage/MainPage';
import About from './Components/About/About';

const RouterApp = () => {
  return (
    <Router>
      <div>
        <Header/>
        {/* router paths components */}
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}

export default RouterApp;