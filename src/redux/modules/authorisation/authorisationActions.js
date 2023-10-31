import {createAction} from "redux-actions";
import {AuthorisationConstants} from "./authorisationConstants";

export const login = createAction(AuthorisationConstants.LOGIN);
