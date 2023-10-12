import React from 'react';
import {ROUTES_ID} from "./enums";

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const CreateOrganization = React.lazy(() => import('./views/RegisterRestaurant/Create'));
const CreateManu = React.lazy(() => import('./views/RegisterManu/Create'));
const Organization = React.lazy(() => import('./views/RegisterRestaurant'));
const Meals = React.lazy(() => import('./views/Meals/'));
const TableReservation = React.lazy(() => import('./views/TableRegister/Create'));

const SignIn = React.lazy(() => import('./views/SignIn/Component/SignIn'));
const ForgetPassword = React.lazy(() => import('./views/SignIn/Component/ForgetPassword'));


const routes = [
    {path: '/dashboard', name: 'Dashboard', component: Dashboard, id: ROUTES_ID.DASHBOARD},
    {
        path: '/organizations/create',
        name: 'Restaurant Register',
        component: CreateOrganization,
        id: ROUTES_ID.CREATE_ORG,
    },
    {
        path: '/Manu/create',
        name: 'Manu Create',
        component: CreateManu,
        id: ROUTES_ID.CREATE_ORG,
    },
    {
        path: '/organizations',
        name: 'Organization name',
        component: Organization,
        id: ROUTES_ID.ORG,
    },
    {
        path: '/meals',
        name: 'Meals name',
        component: Meals,
        id: ROUTES_ID.ORG,
    },
    {
        path: '/table',
        name: 'Table',
        component: TableReservation,
        id: ROUTES_ID.ORG,
    },
    {path: '/sign-in', name: 'Sign In', component: SignIn, id: ROUTES_ID.SIGN_IN},
    {
        path: '/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        id: ROUTES_ID.FORGET_PASS
    },
];

export default routes;
