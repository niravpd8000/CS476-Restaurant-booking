import {handleActions} from "redux-actions";
import {initialOrganizationState} from "./initialOrganizationState";
import {OrganizationConstants} from "./organizationConstants";
import {
    requestFail,
    requestPending,
    requestSuccess
} from "../../../utils/fetch";

export const organizationReducer = handleActions(
    {
        [requestSuccess(OrganizationConstants.CREATE_ORGANIZATION)]: (
            state,
            action
        ) => ({
            ...state,
            createOrgLoading: false,
            createOrgFailure: false,
            createOrgLoaded: true
        }),
        [requestPending(OrganizationConstants.CREATE_ORGANIZATION)]: state => ({
            ...state,
            createOrgLoading: true,
            createOrgFailure: false,
            createOrgLoaded: false
        }),
        [requestFail(OrganizationConstants.CREATE_ORGANIZATION)]: state => ({
            ...state,
            createOrgLoading: false,
            createOrgFailure: true,
            createOrgLoaded: true
        }),
    },
    initialOrganizationState()
);
