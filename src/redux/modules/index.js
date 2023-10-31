import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {connectRouter} from "connected-react-router";
// SAGA
import organizationSaga from "./organization/organizationSaga";
import authorisationSaga from "./authorisation/authorisationSaga";


// REDUCERS
import {organizationReducer} from "./organization/organizationReducer";
import {authorisationReducer} from "./authorisation/authorisationReducer";


export const reducers = history =>
    combineReducers({
        router: connectRouter(history),
        organization: organizationReducer,
        authorisation: authorisationReducer
    });

export const rootSaga = function* () {
    yield all([
        organizationSaga(),
        authorisationSaga(),
    ]);
};
