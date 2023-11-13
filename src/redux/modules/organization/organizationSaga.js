import {call, takeLatest} from "redux-saga/effects";
import {request} from "../../../utils/fetch";
import {OrganizationConstants} from "./organizationConstants";
import {config} from "../../../utils/config";
// APIS
import * as API from '../../../utils/apiConsts';
import {getRestIdFromToken} from "../../../utils/common";
import {OrganisationUpdate} from "../../../utils/apiConsts";

function* createOrganization(action) {
    yield call(
        request({
            type: OrganizationConstants.CREATE_ORGANIZATION,
            method: "POST",
            baseURL: config.BASE_URL,
            url: getRestIdFromToken() ? API.OrganisationUpdate : API.OrganisationInsert,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* getOrganizationList(action) {
    yield call(
        request({
            type: OrganizationConstants.FETCH_ORGANIZATIONS,
            method: "get",
            baseURL: config.BASE_URL,
            url: API.getAllRest,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* getOrganizationById(action) {
    yield call(
        request({
            type: OrganizationConstants.FETCH_ORGANIZATION_BY_ID,
            method: "get",
            baseURL: config.BASE_URL,
            url: API.getRestById + `/${action.payload.data?.id}`,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* getOrganizationManuById(action) {
    yield call(
        request({
            type: OrganizationConstants.FETCH_ORGANIZATION_BY_ID,
            method: "get",
            baseURL: config.BASE_URL,
            url: API.getRestManuById + `/${action.payload.data?.id}`,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* createManu(action) {
    yield call(
        request({
            type: OrganizationConstants.CREATE_MANU,
            method: "POST",
            baseURL: config.BASE_URL,
            url: action.payload.data?.itemId ? API.manuUpdate : API.manuCreate,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* getManuById(action) {
    yield call(
        request({
            type: OrganizationConstants.FETCH_MANU_BY_ID,
            method: "get",
            baseURL: config.BASE_URL,
            url: API.manuById + `/${action.payload.data?.id}`,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* cartCreateUpdate(action) {
    yield call(
        request({
            type: OrganizationConstants.CART,
            method: "post",
            baseURL: config.BASE_URL,
            url: API.cartUpdate,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchCart(action) {
    yield call(
        request({
            type: OrganizationConstants.FETCH_CART,
            method: "get",
            baseURL: config.BASE_URL,
            url: API.getCart,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(OrganizationConstants.CREATE_ORGANIZATION, createOrganization);
    yield takeLatest(OrganizationConstants.FETCH_ORGANIZATIONS, getOrganizationList);
    yield takeLatest(OrganizationConstants.FETCH_ORGANIZATION_BY_ID, getOrganizationById);
    yield takeLatest(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID, getOrganizationManuById);
    yield takeLatest(OrganizationConstants.CREATE_MANU, createManu);
    yield takeLatest(OrganizationConstants.FETCH_MANU_BY_ID, getManuById);
    yield takeLatest(OrganizationConstants.CART, cartCreateUpdate);
    yield takeLatest(OrganizationConstants.FETCH_CART, fetchCart);
}
