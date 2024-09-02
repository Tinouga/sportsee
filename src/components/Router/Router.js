import Root from "../../pages/Root";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={'/dashboard/12'} replace />
            },
            {
                path: 'dashboard/:userId',
                element: <Dashboard />
            }
        ]
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router}/>
    );
}
