import {call, takeLatest} from "redux-saga/effects";
import {request} from "../../../utils/fetch";
import {OrganizationConstants} from "./organizationConstants";
import {config} from "../../../utils/config";
// APIS
import * as API from '../../../utils/apiConsts';
import {manuCreate} from "../../../utils/apiConsts";

function* createOrganization(action) {
    yield call(
        request({
            type: OrganizationConstants.CREATE_ORGANIZATION,
            method: "POST",
            baseURL: config.URL,
            url: API.OrganisationInsert,
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
            baseURL: config.URL,
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
            baseURL: config.URL,
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
            baseURL: config.URL,
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
            baseURL: config.URL,
            url: API.manuCreate,
            data: action.payload.data,
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
}
