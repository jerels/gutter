import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import session from './session/session';
import users from './entities/users';
import issues from './entities/issues';

let storeEnhancer;

const entities = combineReducers({
    users,
    issues
})

const rootReducer = combineReducers({
    session,
    entities
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