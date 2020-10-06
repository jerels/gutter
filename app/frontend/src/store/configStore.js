import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import session from './session/session';

let storeEnhancer;

const rootReducer = combineReducers({
    session
});

if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
};

export default function configStore(initState) {
    return createStore(
        rootReducer,
        initState,
        storeEnhancer
    )
};