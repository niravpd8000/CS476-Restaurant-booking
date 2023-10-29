import React from 'react';
import Meals from "./views/Meals";
import Dashboard from "./views/Dashboard";
import RegisterRestaurant from "./views/RegisterRestaurant";
import SignIn from "./views/SignIn/SignIn";

import TableReservationForm from "./views/TableRegister/TableReservationForm";
import ManuCreate from "./views/RegisterManu/ManuCreate";
import SignUp from './views/SignUp/SignUp';
<<<<<<< Updated upstream
import MainCart from './views/Cart'; // Import the Cart component
=======
import DataDashboard from "./views/DataDashboard/DataDashboard";
>>>>>>> Stashed changes


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
        path: '/meals',
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
<<<<<<< Updated upstream
    { path: '/cart', name: 'Cart', component: <MainCart/> }

=======
    {path: '/data-dashboard', name: 'Data Dashboard', component: <DataDashboard/>}
>>>>>>> Stashed changes
];

export default routes;
