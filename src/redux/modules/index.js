import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {connectRouter} from "connected-react-router";
// SAGA
import organizationSaga from "./organization/organizationSaga";


// REDUCERS
import {organizationReducer} from "./organization/organizationReducer";


export const reducers = history =>
    combineReducers({
        router: connectRouter(history),
        organization: organizationReducer,
    });

export const rootSaga = function* () {
    yield all([
        organizationSaga()
    ]);
};
