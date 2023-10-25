import {createAction} from "redux-actions";
import {OrganizationConstants} from "./organizationConstants";

export const createOrg = createAction(OrganizationConstants.CREATE_ORGANIZATION);
