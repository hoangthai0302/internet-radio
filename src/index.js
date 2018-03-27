import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import configureStore from './redux/store'
import App from './react/App'
import registerServiceWorker from './register-service-worker'

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Route } from 'react-router-dom'

import store, { history } from './redux/store';

registerServiceWorker()

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter >
    </Provider>,
    document.getElementById('root')
)
