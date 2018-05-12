import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage from './Components/mainPage/MainPage'
import Contact from './Components/contact/Contact'


class RouterApp extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        );
    }
}

export default RouterApp;