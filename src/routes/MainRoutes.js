import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <Login />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
    ]
};

export default MainRoutes;
