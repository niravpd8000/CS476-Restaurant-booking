import {createAction} from "redux-actions";
import {OrderConstants} from "./orderConstants";

export const createOrder = createAction(OrderConstants.CREATE_ORDER);
export const updateOrder = createAction(OrderConstants.UPDATE_ORDER);
export const fetchOrder = createAction(OrderConstants.FETCH_ORDER);
export const fetchOrderByRest = createAction(OrderConstants.FETCH_ORDER_BY_REST);
export const fetchOrderByUser = createAction(OrderConstants.FETCH_ORDER_BY_USER);
export const rateOrder = createAction(OrderConstants.RATE_ORDER);
export const fetchOrderItemsForDashboard = createAction(OrderConstants.FETCH_ORDER_ITEM_DASHBOARD);
