import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root/Root";
import ALlSpot from "../Pages/AllSpot/ALlSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";
import MyList from "../Pages/MyList/MyList";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UserProtectedRoute from "../ProtectedRoutes/UserProtectedRoute/UserProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [ 
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/allSpot",
                element : <ALlSpot></ALlSpot>
            },
            {
                path : "/addSpot",
                element : <UserProtectedRoute>
                    <AddSpot></AddSpot>
                </UserProtectedRoute>
            },
            {
                path : "/myList",
                element : <UserProtectedRoute>
                    <MyList></MyList>
                </UserProtectedRoute>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
        ]
    },
]);


export default router;