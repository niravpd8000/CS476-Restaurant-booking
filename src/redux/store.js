import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";

import {reducers, rootSaga} from "./modules";

const inDevelopment = process.env.REACT_APP_ENV === "development";

const composeEnhancers =
    inDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 50
        })
        : compose;

const configureStore = function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const loggerMiddleware = createLogger({
        collapsed: true
    });

    const middleware = inDevelopment ? applyMiddleware(sagaMiddleware, loggerMiddleware) : applyMiddleware(sagaMiddleware)

    const store = createStore(
        reducers(history),
        initialState,
        composeEnhancers(middleware)
    );

    sagaMiddleware.run(rootSaga);
    return store;
};
export default configureStore;
