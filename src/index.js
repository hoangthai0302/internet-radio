import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route ,  Switch} from "react-router-dom";

import configureStore from './redux/store'
import App from './react/App'
import registerServiceWorker from './register-service-worker'


const store = configureStore()

registerServiceWorker()

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route path = '/' component = {App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)
