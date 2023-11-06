import React from 'react';
import Meals from "./views/Meals";
import Dashboard from "./views/Dashboard";
import RegisterRestaurant from "./views/RegisterRestaurant";
import SignIn from "./views/SignIn/SignIn";

import TableReservationForm from "./views/TableRegister/TableReservationForm";
import ManuCreate from "./views/RegisterManu/ManuCreate";
import SignUp from './views/SignUp/SignUp';
import DataDashboard from "./views/DataDashboard/DataDashboard";
import OrderManagement from "./views/OrderManagement/OrderManagementFinal";
import CartSummary from './views/CartSummary/CartSummary';
import PreviousOrder from './views/PreviousOrder/PreviousOrder';
import ManageManu from "./views/ManageManu";
import Payment from "./views/Payment/Payment";
import Reciept from "./views/Reciept/Reciept";

const routes = [
    {path: '/dashboard', name: 'Dashboard', component: <Dashboard/>},
    {
        path: '/organizations/create',
        name: 'Restaurant Register',
        component: <RegisterRestaurant/>,
    },
    {
        path: '/Manu/create',
        name: 'Manu Create',
        component: <ManuCreate/>

    },
    {
        path: '/meals/:id',
        name: 'Meals name',
        component: <Meals/>,
    },
    {
        path: '/table',
        name: 'Table',
        component: <TableReservationForm/>,
    },
    {path: '/sign-in', name: 'Sign In', component: <SignIn/>},
    {path: '/sign-up', name: 'Sign Up', component: <SignUp/>},
    {path: '/restaurant-home', name: 'Data Dashboard', component: <DataDashboard/>},
    {path: '/OrderManagementFinal', name: 'Order Management', component: <OrderManagement/>},
    {path: '/CartSummary', name: 'Cart Summary', component: <CartSummary/>},
    {path: '/PreviousOrder', name: 'Previous Order', component: <PreviousOrder/>},
    {path: '/manage-manu', name: 'Manage Manu', component: <ManageManu/>},
    {path: '/edit-manu/:id', name: 'Edit Manu', component: <ManuCreate/>},
    {path: '/payment', name: 'Payment', component: <Payment/>},
    {path: '/reciept', name: 'Reciept', component: <Reciept/>},
];

export default routes;
