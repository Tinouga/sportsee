import Root from "../../pages/Root";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/:userId',
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
