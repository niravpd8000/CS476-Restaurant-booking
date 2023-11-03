import {createAction} from "redux-actions";
import {OrganizationConstants} from "./organizationConstants";

export const createOrg = createAction(OrganizationConstants.CREATE_ORGANIZATION);
export const fetchOrg = createAction(OrganizationConstants.FETCH_ORGANIZATIONS);

export const fetchOrgById = createAction(OrganizationConstants.FETCH_ORGANIZATION_BY_ID);
export const fetchOrgManuById = createAction(OrganizationConstants.FETCH_ORGANIZATION_MANU_BY_ID);
export const createManu = createAction(OrganizationConstants.CREATE_MANU);
