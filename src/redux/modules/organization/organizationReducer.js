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
        [requestPending(OrganizationConstants.FETCH_ORGANIZATIONS)]: state => ({
            ...state,
            fetchOrgListLoading: true,
            fetchOrgListFailure: false,
            fetchOrgListLoaded: false
        }),
        [requestFail(OrganizationConstants.FETCH_ORGANIZATIONS)]: state => ({
            ...state,
            fetchOrgListLoading: false,
            fetchOrgListFailure: true,
            fetchOrgListLoaded: true
        }),
        [requestSuccess(OrganizationConstants.FETCH_ORGANIZATIONS)]: (
            state,
            action
        ) => ({
            ...state,
            fetchOrgListLoading: false,
            fetchOrgListFailure: false,
            fetchOrgListLoaded: true
        }),
        [requestPending(OrganizationConstants.FETCH_ORGANIZATION_BY_ID)]: state => ({
            ...state,
            fetchOrgByIdLoading: true,
            fetchOrgByIdFailure: false,
            fetchOrgByIdLoaded: false
        }),
        [requestFail(OrganizationConstants.FETCH_ORGANIZATION_BY_ID)]: state => ({
            ...state,
            fetchOrgByIdLoading: false,
            fetchOrgByIdFailure: true,
            fetchOrgByIdLoaded: true
        }),
        [requestSuccess(OrganizationConstants.FETCH_ORGANIZATION_BY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            fetchOrgByIdLoading: false,
            fetchOrgByIdFailure: false,
            fetchOrgByIdLoaded: true
        }),
        [requestPending(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID)]: state => ({
            ...state,
            fetchOrgManuByIdLoading: true,
            fetchOrgManuByIdFailure: false,
            fetchOrgManuByIdLoaded: false
        }),
        [requestFail(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID)]: state => ({
            ...state,
            fetchOrgManuByIdLoading: false,
            fetchOrgManuByIdFailure: true,
            fetchOrgManuByIdLoaded: true
        }),
        [requestSuccess(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            fetchOrgManuByIdLoading: false,
            fetchOrgManuByIdFailure: false,
            fetchOrgManuByIdLoaded: true
        }),
        [requestPending(OrganizationConstants.CREATE_MANU)]: state => ({
            ...state,
            createManuLoading: true,
            createManuFailure: false,
            createManuLoaded: false
        }),
        [requestFail(OrganizationConstants.CREATE_MANU)]: state => ({
            ...state,
            createManuLoading: false,
            createManuFailure: true,
            createManuLoaded: true
        }),
        [requestSuccess(OrganizationConstants.CREATE_MANU)]: (
            state,
            action
        ) => ({
            ...state,
            createManuLoading: false,
            createManuFailure: false,
            createManuLoaded: true
        }),
        [requestPending(OrganizationConstants.FETCH_MANU_BY_ID)]: state => ({
            ...state,
            fetchManuByIdLoading: true,
            fetchManuByIdFailure: false,
            fetchManuByIdLoaded: false
        }),
        [requestFail(OrganizationConstants.FETCH_MANU_BY_ID)]: state => ({
            ...state,
            fetchManuByIdLoading: false,
            fetchManuByIdFailure: true,
            fetchManuByIdLoaded: true
        }),
        [requestSuccess(OrganizationConstants.FETCH_MANU_BY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            fetchManuByIdLoading: false,
            fetchManuByIdFailure: false,
            fetchManuByIdLoaded: true
        }),
        [requestPending(OrganizationConstants.CART)]: state => ({
            ...state,
            cartUpdateLoading: true,
            cartUpdateFailure: false,
            cartUpdateLoaded: false
        }),
        [requestFail(OrganizationConstants.CART)]: state => ({
            ...state,
            cartUpdateLoading: false,
            cartUpdateFailure: true,
            cartUpdateLoaded: true
        }),
        [requestSuccess(OrganizationConstants.CART)]: (
            state,
            action
        ) => ({
            ...state,
            cartUpdateLoading: false,
            cartUpdateFailure: false,
            cartUpdateLoaded: true
        }),
        [requestPending(OrganizationConstants.FETCH_CART)]: state => ({
            ...state,
            fetchCartLoading: true,
            fetchCartFailure: false,
            fetchCartLoaded: false
        }),
        [requestFail(OrganizationConstants.FETCH_CART)]: state => ({
            ...state,
            fetchCartLoading: false,
            fetchCartFailure: true,
            fetchCartLoaded: true
        }),
        [requestSuccess(OrganizationConstants.FETCH_CART)]: (
            state,
            action
        ) => {
            const total = action?.payload?.items &&action?.payload?.items?.length ? action?.payload?.items.reduce((sum, product) => sum + product?.quantity, 0) : 0;
            return ({
                ...state,
                cartItemQTY: total,
                fetchCartLoading: false,
                fetchCartFailure: false,
                fetchCartLoaded: true
            })
        },
    },
    initialOrganizationState()
);
