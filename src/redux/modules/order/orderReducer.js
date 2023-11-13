import {handleActions} from "redux-actions";
import {initialOrderState} from "./initialOrderState";
import {OrderConstants} from "./orderConstants";
import {
    requestFail,
    requestPending,
    requestSuccess
} from "../../../utils/fetch";

export const orderReducer = handleActions(
    {
        [requestSuccess(OrderConstants.CREATE_ORDER)]: (
            state,
        ) => {
            return ({
                ...state,
                createOrderLoading: false,
                createOrderFailure: false,
                createOrderLoaded: true
            })
        },
        [requestPending(OrderConstants.CREATE_ORDER)]: state => ({
            ...state,
            createOrderLoading: true,
            createOrderFailure: false,
            createOrderLoaded: false
        }),
        [requestFail(OrderConstants.CREATE_ORDER)]: state => ({
            ...state,
            createOrderLoading: false,
            createOrderFailure: true,
            createOrderLoaded: false
        }),
        [requestSuccess(OrderConstants.UPDATE_ORDER)]: (
            state
        ) => ({
            ...state,
            loginLoading: false,
            loginFailure: false,
            loginLoaded: true
        })
        ,
        [requestPending(OrderConstants.UPDATE_ORDER)]: state => ({
            ...state,
            loginLoading: true,
            loginFailure: false,
            loginLoaded: false
        }),
        [requestFail(OrderConstants.UPDATE_ORDER)]: state => ({
            ...state,
            loginLoading: false,
            loginFailure: true,
            loginLoaded: false
        }),
        [requestSuccess(OrderConstants.UPDATE_ORDER)]: (
            state
        ) => ({
            ...state,
            updateOrderLoading: false,
            updateOrderFailure: false,
            updateOrderLoaded: true
        })
        ,
        [requestPending(OrderConstants.UPDATE_ORDER)]: state => ({
            ...state,
            updateOrderLoading: true,
            updateOrderFailure: false,
            updateOrderLoaded: false
        }),
        [requestFail(OrderConstants.UPDATE_ORDER)]: state => ({
            ...state,
            updateOrderLoading: false,
            updateOrderFailure: true,
            updateOrderLoaded: false
        }),
        [requestSuccess(OrderConstants.FETCH_ORDER)]: (
            state
        ) => ({
            ...state,
            fetchOrderLoading: false,
            fetchOrderFailure: false,
            fetchOrderLoaded: true
        })
        ,
        [requestPending(OrderConstants.FETCH_ORDER)]: state => ({
            ...state,
            fetchOrderLoading: true,
            fetchOrderFailure: false,
            fetchOrderLoaded: false
        }),
        [requestFail(OrderConstants.FETCH_ORDER)]: state => ({
            ...state,
            fetchOrderLoading: false,
            fetchOrderFailure: true,
            fetchOrderLoaded: false
        }),
        [requestSuccess(OrderConstants.FETCH_ORDER_BY_REST)]: (state, action) => {
            const pickup = action?.payload?.filter(item => item?.isPickUp && item?.status === "Pending").length;
            const reserve = action?.payload?.filter(item => !item?.isPickUp && item?.status === "Pending").length;
            console.log(pickup)
            return ({
                ...state,
                reserveTableNumber: reserve,
                pickUpNumber: pickup,
                fetchOrderByRestLoading: false,
                fetchOrderByRestFailure: false,
                fetchOrderByRestLoaded: true
            })
        },
        [requestPending(OrderConstants.FETCH_ORDER_BY_REST)]: (state, action) => ({
            ...state,
            fetchOrderByRestLoading: true,
            fetchOrderByRestFailure: false,
            fetchOrderByRestLoaded: false
        }),
        [requestFail(OrderConstants.FETCH_ORDER_BY_REST)]: state => ({
            ...state,
            fetchOrderByRestLoading: false,
            fetchOrderByRestFailure: true,
            fetchOrderByRestLoaded: false
        }),
        [requestSuccess(OrderConstants.FETCH_ORDER_BY_USER)]: (
            state
        ) => ({
            ...state,
            fetchOrderByUserLoading: false,
            fetchOrderByUserFailure: false,
            fetchOrderByUserLoaded: true
        }),
        [requestPending(OrderConstants.FETCH_ORDER_BY_USER)]: state => ({
            ...state,
            fetchOrderByUserLoading: true,
            fetchOrderByUserFailure: false,
            fetchOrderByUserLoaded: false
        }),
        [requestFail(OrderConstants.FETCH_ORDER_BY_USER)]: state => ({
            ...state,
            fetchOrderByUserLoading: false,
            fetchOrderByUserFailure: true,
            fetchOrderByUserLoaded: false
        }),
        [requestSuccess(OrderConstants.FETCH_ORDER_ITEM_DASHBOARD)]: (
            state
        ) => ({
            ...state,
            fetchOrderItemDashboardLoading: false,
            fetchOrderItemDashboardFailure: false,
            fetchOrderItemDashboardLoaded: true
        })
        ,
        [requestPending(OrderConstants.FETCH_ORDER_ITEM_DASHBOARD)]: state => ({
            ...state,
            fetchOrderItemDashboardLoading: true,
            fetchOrderItemDashboardFailure: false,
            fetchOrderItemDashboardLoaded: false
        }),
        [requestFail(OrderConstants.FETCH_ORDER_ITEM_DASHBOARD)]: state => ({
            ...state,
            fetchOrderItemDashboardLoading: false,
            fetchOrderItemDashboardFailure: true,
            fetchOrderItemDashboardLoaded: false
        }),
        [requestSuccess(OrderConstants.RATE_ORDER)]: (
            state
        ) => ({
            ...state,
            rateOrderLoading: false,
            rateOrderFailure: false,
            rateOrderLoaded: true
        })
        ,
        [requestPending(OrderConstants.RATE_ORDER)]: state => ({
            ...state,
            rateOrderLoading: true,
            rateOrderFailure: false,
            rateOrderLoaded: false
        }),
        [requestFail(OrderConstants.RATE_ORDER)]: state => ({
            ...state,
            rateOrderLoading: false,
            rateOrderFailure: true,
            rateOrderLoaded: false
        }),
    },
    initialOrderState()
);
