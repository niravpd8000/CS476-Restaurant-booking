import {handleActions} from "redux-actions";
import {initialAuthorisationState} from "./initialAuthorisationState";
import {AuthorisationConstants} from "./authorisationConstants";
import {
    requestFail,
    requestPending,
    requestSuccess
} from "../../../utils/fetch";
import {setIntoStorage} from "../../../utils/common";

export const authorisationReducer = handleActions(
    {
        [requestSuccess(AuthorisationConstants.LOGIN)]: (
            state,
            action
        ) => {
            let access_token = "";
            if (action.payload) {
                const data = action.payload;
                access_token = data.token;
                // global.userId = data.id;
                // global.userRole = parseJwt(data?.access_token)?.roles || null;
                // if (global.userRole)
                setIntoStorage({...data});
            }
            return ({
                ...state,
                access_token: access_token || "",
                loginLoading: false,
                loginFailure: false,
                loginLoaded: true
            })
        },
        [requestPending(AuthorisationConstants.LOGIN)]: state => ({
            ...state,
            loginLoading: true,
            loginFailure: false,
            loginLoaded: false
        }),
        [requestFail(AuthorisationConstants.LOGIN)]: state => ({
            ...state,
            access_token: "",
            loginLoading: false,
            loginFailure: true,
            loginLoaded: false
        }),
        [requestSuccess(AuthorisationConstants.SIGNUP)]: (
            state
        ) => ({
            ...state,
            loginLoading: false,
            loginFailure: false,
            loginLoaded: true
        })
        ,
        [requestPending(AuthorisationConstants.SIGNUP)]: state => ({
            ...state,
            loginLoading: true,
            loginFailure: false,
            loginLoaded: false
        }),
        [requestFail(AuthorisationConstants.SIGNUP)]: state => ({
            ...state,
            access_token: "",
            loginLoading: false,
            loginFailure: true,
            loginLoaded: false
        }),

    },
    initialAuthorisationState()
);
