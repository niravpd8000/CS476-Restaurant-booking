import {call, takeLatest} from "redux-saga/effects";
import {config} from "../../../utils/config";
//
import {request} from "../../../utils/fetch";
//
import {AuthorisationConstants} from "./authorisationConstants";
// APIS
import * as API from '../../../utils/apiConsts';

function* login(action) {
  yield call(
    request({
      type: AuthorisationConstants.LOGIN,
      method: "POST",
      url: API.signIn,
      data: action.payload.data,
      success: action.payload.onSuccess,
      fail: action.payload.onFail,
      baseURL: config.BASE_URL
    }),
    action
  );
}
function* signup(action) {
    yield call(
        request({
            type: AuthorisationConstants.SIGNUP,
            method: "POST",
            url: API.signUp,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail,
            baseURL: config.BASE_URL
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(AuthorisationConstants.LOGIN, login);
    yield takeLatest(AuthorisationConstants.SIGNUP, signup);
}
