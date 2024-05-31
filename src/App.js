// /* eslint-disable */ 
// import { Suspense, lazy } from 'react';
// import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom";
// import { Routes } from './Routes/Routes.js';
// import SuspenseLoader from './Components/Common/SuspenseLoader.jsx';
// // const ErrorComponent = lazy(() => import('./Components/Common/ErrorComponent.jsx'));



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       {/* <Route path={Routes.main.path} element={<Navigate to={`${Routes.mails.path}/inbox`}/>}/> */}
//       <Route path={Routes.signup.path} element={<Navigate to={Routes.signup.path}/>}/>
//       <Route path={Routes.signup.path} element={<Routes.signup.element/>}/>
//       {/* <Route path={Routes.main.path} element={<Routes.main.element/>}>
//         <Route path={`${Routes.mails.path}/:type`} element={<Routes.mails.element/>} errorElement={<ErrorComponent/>}/>
//         <Route path={Routes.view.path} element={<Routes.view.element/>} errorElement={<ErrorComponent/>}/>
//       </Route> */}
//       {/* <Route path={Routes.invalid.path} element={<Navigate to={`${Routes.mails.path}/inbox`}/>}/> */}
//     </Route>
//   )
// )

// function App() {
//   return (
//     <>
//     <Suspense fallback={SuspenseLoader}>
//       <RouterProvider router={router} />
//     </Suspense>
//     </>
//   );
// }

// export default App;


/* eslint-disable */ 
import { Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import { Routes } from './Routes/Routes.js';
import SuspenseLoader from './Components/Common/SuspenseLoader.jsx';
const ErrorComponent = lazy(() => import('./Components/Common/ErrorComponent.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/" element={<Navigate to={Routes.login.path} />} />
      <Route path={Routes.login.path} element={<Routes.login.element />} />
      <Route path={Routes.signup.path} element={<Routes.signup.element/>} />
      <Route path={Routes.main.path} element={<Routes.main.element />}>
        <Route path={`${Routes.mails.path}/:type`} element={<Routes.mails.element />} errorElement={<ErrorComponent />} />
        <Route path={Routes.view.path} element={<Routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>
      <Route path={Routes.invalid.path} element={<Navigate to={Routes.login.path} />} />
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
