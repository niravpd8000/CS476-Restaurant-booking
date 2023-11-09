import {combineReducers} from "redux";
import {all} from "redux-saga/effects";
import {connectRouter} from "connected-react-router";
// SAGA
import organizationSaga from "./organization/organizationSaga";
import authorisationSaga from "./authorisation/authorisationSaga";
import orderSaga from "./order/orderSaga";

// REDUCERS
import {organizationReducer} from "./organization/organizationReducer";
import {authorisationReducer} from "./authorisation/authorisationReducer";
import {orderReducer} from "./order/orderReducer";

export const reducers = history =>
    combineReducers({
        router: connectRouter(history),
        organization: organizationReducer,
        authorisation: authorisationReducer,
        order: orderReducer,
    });

export const rootSaga = function* () {
    yield all([
        organizationSaga(),
        authorisationSaga(),
        orderSaga()
    ]);
};
