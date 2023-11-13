import {call, takeLatest} from "redux-saga/effects";
import {config} from "../../../utils/config";
//
import {request} from "../../../utils/fetch";
//
import {OrderConstants} from "./orderConstants";
// APIS
import * as API from '../../../utils/apiConsts';
import {getOrderItemDashboard} from "../../../utils/apiConsts";

function* createOrder(action) {
    yield call(
        request({
            type: OrderConstants.CREATE_ORDER,
            method: "POST",
            url: API.createOrder,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* updateOrder(action) {
    yield call(
        request({
            type: OrderConstants.UPDATE_ORDER,
            method: "POST",
            url: API.updateOrderStatus,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* fetchOrder(action) {
    yield call(
        request({
            type: OrderConstants.FETCH_ORDER,
            method: "GET",
            url: API.getOrderById + `/${action.payload.data?.id}`,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* fetchOrderByRest(action) {
    yield call(
        request({
            type: OrderConstants.FETCH_ORDER_BY_REST,
            method: "GET",
            url: API.getOrderByRestId,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* fetchOrderByUser(action) {
    yield call(
        request({
            type: OrderConstants.FETCH_ORDER_BY_USER,
            method: "GET",
            url: API.getOrderByUserId,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* fetchOrderItemDashBoard(action) {
    yield call(
        request({
            type: OrderConstants.FETCH_ORDER_ITEM_DASHBOARD,
            method: "GET",
            url: API.getOrderItemDashboard+`?timeInterval=${action.payload.data?.timeInterval}`,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

function* rateMyOrder(action) {
    yield call(
        request({
            type: OrderConstants.FETCH_ORDER_ITEM_DASHBOARD,
            method: "POST",
            url: API.giveRating,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}
export default function* rootSaga() {
    yield takeLatest(OrderConstants.CREATE_ORDER, createOrder);
    yield takeLatest(OrderConstants.UPDATE_ORDER, updateOrder);
    yield takeLatest(OrderConstants.FETCH_ORDER, fetchOrder);
    yield takeLatest(OrderConstants.FETCH_ORDER_BY_REST, fetchOrderByRest);
    yield takeLatest(OrderConstants.FETCH_ORDER_BY_USER, fetchOrderByUser);
    yield takeLatest(OrderConstants.RATE_ORDER, rateMyOrder);
    yield takeLatest(OrderConstants.FETCH_ORDER_ITEM_DASHBOARD, fetchOrderItemDashBoard);
}
