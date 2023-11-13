import React from 'react';
import Meals from "./views/Meals";
import Dashboard from "./views/Dashboard";
import RegisterRestaurant from "./views/RegisterRestaurant";
import SignIn from "./views/SignIn/SignIn";

import TableReservationForm from "./views/TableRegister/TableReservationForm";
import ManuCreate from "./views/RegisterManu/ManuCreate";
import SignUp from './views/SignUp/SignUp';
import DataDashboard from "./views/DataDashboard/DataDashboard";
//import OrderManagement from "./views/OrderManagement/OrderManagementFinal";
import CartSummary from './views/CartSummary/CartSummary';
import PreviousOrder from './views/PreviousOrder/PreviousOrder';
import ManageManu from "./views/ManageManu";
import Payment from "./views/Payment/Payment";
import Reciept from "./views/Reciept/Reciept";
import TableManagement from './views/TableManagement/TableManagement';
import OrderManagement from './views/OrderManagementUpdated/OrderManagement';
import OrderSummary from "./views/OrderSummary/OrderSummary";

const routes = [
    {path: '/', name: 'Dashboard', auth: "PUBLIC", component: <Dashboard/>},
    {path: '/dashboard', name: 'Dashboard', auth: "PUBLIC", component: <Dashboard/>},
    {
        path: '/restaurant-home/sign-up',
        name: 'Restaurant Register',
        auth: 'PUBLIC',
        component: <RegisterRestaurant/>,
    },
    {
        path: '/restaurant-home/edit',
        name: 'Restaurant edit',
        auth: 'ADMIN',
        component: <RegisterRestaurant/>,
    },
    {
        path: '/Manu/create',
        name: 'Manu Create',
        auth: 'ADMIN',
        component: <ManuCreate/>

    },
    {
        path: '/meals/:id',
        name: 'Meals name',
        auth: 'PUBLIC',
        component: <Meals/>,
    },
    {
        path: '/table/:restId',
        name: 'Table',
        auth: 'PUBLIC',
        component: <TableReservationForm/>,
    },
    {path: '/sign-in', name: 'Sign In', auth: 'PUBLIC', component: <SignIn/>},
    {path: '/sign-up', name: 'Sign Up', auth: 'PUBLIC', component: <SignUp/>},
    {path: '/restaurant-home', name: 'Data Dashboard', auth: 'ADMIN', component: <DataDashboard/>},
    // {path: '/order-management', name: 'Order Management', auth: 'ADMIN', component: <OrderManagement/>},
    {path: '/CartSummary', name: 'Cart Summary', auth: 'PUBLIC', component: <CartSummary/>},
    {path: '/my-pickup-order', name: 'My Pickup order', auth: 'PUBLIC', component: <PreviousOrder/>},
    {path: '/my-reservation', name: 'My Reservation Order', auth: 'PUBLIC', component: <PreviousOrder/>},
    {path: '/manage-manu', name: 'Manage Manu', auth: 'ADMIN', component: <ManageManu/>},
    {path: '/edit-manu/:id', name: 'Edit Manu', auth: 'ADMIN', component: <ManuCreate/>},
    {path: '/order-summary/:id', name: 'Order Details', auth: 'PUBLIC', component: <OrderSummary/>},
    {path: '/TableManagement', name: 'TableManagement', auth: 'ADMIN', component: <TableManagement/>},
    {path: '/OrderManagement', name: 'Order Management', auth: 'ADMIN', component: <OrderManagement/>},
    {path: '/payment', name: 'Payment', component: <Payment/>},
    {path: '/reciept', name: 'Reciept', component: <Reciept/>},
];

export default routes;
