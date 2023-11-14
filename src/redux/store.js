import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";

import {reducers, rootSaga} from "./modules";

import { Store, Dispatch, AnyAction } from 'redux';

interface ReduxStore {
    getState: () => any;
    dispatch: Dispatch<AnyAction>;
    subscribe: (listener: () => void) => () => void;
}

interface SagaMiddleware {
    run: (saga: () => void) => void;
}

interface LoggerMiddleware {
    (store: ReduxStore): (next: Dispatch<AnyAction>) => (action: AnyAction) => any;
}

interface ConfigureStore {
    (initialState: any, history: any): ReduxStore;
}

interface EnhancedCompose {
    (middlewares: (SagaMiddleware | LoggerMiddleware)[]): (arg: any) => any;
}

interface DevToolsExtension {
    (config?: { trace: boolean; traceLimit: number }): (arg: any) => any;
}

interface ComposeEnhancers {
    (compose: EnhancedCompose, devToolsExtension: DevToolsExtension | undefined): (arg: any) => any;
}

interface InDevelopment {
    REACT_APP_ENV: string | undefined;
}

const inDevelopment: InDevelopment = process.env.REACT_APP_ENV === "development";

const composeEnhancers: ComposeEnhancers =
    inDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 50
        })
        : compose;

const configureStore: ConfigureStore = function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const loggerMiddleware: LoggerMiddleware = createLogger({
        collapsed: true
    });

    const middleware = inDevelopment ? applyMiddleware(sagaMiddleware, loggerMiddleware) : applyMiddleware(sagaMiddleware);

    const store: ReduxStore = createStore(
        reducers(history),
        initialState,
        composeEnhancers(middleware)
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
