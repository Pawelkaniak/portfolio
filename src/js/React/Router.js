import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import DefaultApp from './Components/Contact/Contact'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


import counterReducer from './Reducers/reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const initialState = {
    counter: 0
}
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        counterReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

class RouterApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
                { /* ConnectedRouter will use the store from Provider automatically */}
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/contact' component={DefaultApp} />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default RouterApp;