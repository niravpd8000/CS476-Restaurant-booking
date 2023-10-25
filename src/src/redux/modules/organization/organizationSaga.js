import {call, takeLatest} from "redux-saga/effects";
import {request} from "../../../utils/fetch";
import {OrganizationConstants} from "./organizationConstants";
import {config} from "../../../utils/config";
// APIS
import * as API from '../../../utils/apiConsts';

function* createOrganization(action) {
    yield call(
        request({
            type: OrganizationConstants.CREATE_ORGANIZATION,
            method: "POST",
            baseURL: config.ORG_URL,
            url: API.OrganisationInsert,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}


export default function* rootSaga() {
    yield takeLatest(OrganizationConstants.CREATE_ORGANIZATION, createOrganization);
}
