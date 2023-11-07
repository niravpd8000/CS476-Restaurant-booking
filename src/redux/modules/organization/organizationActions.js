import {createAction} from "redux-actions";
import {OrganizationConstants} from "./organizationConstants";

export const createOrg = createAction(OrganizationConstants.CREATE_ORGANIZATION);
export const fetchOrg = createAction(OrganizationConstants.FETCH_ORGANIZATIONS);

export const fetchOrgById = createAction(OrganizationConstants.FETCH_ORGANIZATION_BY_ID);
export const fetchOrgManuById = createAction(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID);
export const createManu = createAction(OrganizationConstants.CREATE_MANU);
export const fetchManuById = createAction(OrganizationConstants.FETCH_MANU_BY_ID);
export const cartUpdate = createAction(OrganizationConstants.CART);
export const fetchCart = createAction(OrganizationConstants.FETCH_CART);
