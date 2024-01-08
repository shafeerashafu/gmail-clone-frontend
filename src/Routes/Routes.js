import { lazy } from 'react';


const Main = lazy(()=>import("../Pages/Main.jsx"));
const Mails = lazy(()=>import("../Components/Mails.jsx"));
const ViewMail = lazy(()=>import("../Components/ViewMail.jsx"));

const Routes = {
    main : {
        path:'/',
        element: Main
    },
    mails : {
        path:'/mails',
        element: Mails
    },
    invalid : {
        path:'/*',
        element: Mails
    },
    view: {
        path:'/view',
        element: ViewMail
    }
}

export {Routes}