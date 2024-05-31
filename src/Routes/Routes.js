import { lazy } from 'react';

const Signup = lazy(()=>import("../Auth/Signup.jsx"));
const Login = lazy(()=>import("../Auth/Login.jsx"));
const Main = lazy(()=>import("../Pages/Main.jsx"));
const Mails = lazy(()=>import("../Components/Mails.jsx"));
const ViewMail = lazy(()=>import("../Components/ViewMail.jsx"));

const Routes = {
    login : {
        path:'login',
        element: Login 
    },
    main: {
       path:'/main',
       element: Main
    },
    mails : {
        path:'mails',
        element: Mails
    },
    invalid : {
        path:'/*',
        element: Mails
    },
    view: {
        path:'view',
        element: ViewMail
    },
    signup: {
        path:'signup',
        element: Signup
    },
    logout: {
        path: '/logout'
    }
    
    
}

export {Routes};