import { createStore , applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk';

const configureStore = () => {

    const logger = createLogger();
    const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore)
    const store = createStoreWithMiddleware(rootReducer)
    return store
}

export default configureStore