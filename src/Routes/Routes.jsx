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
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";
import SingleSpotDetails from "../Pages/SingleSpotDetials/SingleSpotDetails";
import UpdateMyListSpot from "../Pages/UpdateMyListSpot/UpdateMyListSpot";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CountryBasedTouristSpots from "../Pages/CountryBaseTouristSpots/CountryBasedTouristSpots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/touristSpots")
            },
            {
                path: "/allSpot",
                element: <ALlSpot></ALlSpot>,
                loader: () => fetch("https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/allTouristSpot")
            },
            {
                path: "/allSpot/:id",
                element: <UserProtectedRoute>
                    <SingleSpotDetails></SingleSpotDetails>
                </UserProtectedRoute>,
                loader : ({params}) => fetch(`https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/allTouristSpot/${params.id}`)
            },
            {
                path: "/addSpot",
                element: <UserProtectedRoute>
                    <AddSpot></AddSpot>
                </UserProtectedRoute>
            },
            {
                path: "/myList",
                element: <UserProtectedRoute>
                    <MyList></MyList>
                </UserProtectedRoute>
            },
            {
                path: "/myList/update/:id",
                element: <UserProtectedRoute>
                    <UpdateMyListSpot></UpdateMyListSpot>
                </UserProtectedRoute>,
                loader : ({params}) => fetch(`https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/allTouristSpot/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/touristSpotDetails/:id",
                element: <TouristSpotDetails></TouristSpotDetails>,
                loader : ({params}) => fetch(`https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/touristSpots/${params.id}`)
            },
            {
                path: "/countryBasedSpots/:country",
                element: <CountryBasedTouristSpots></CountryBasedTouristSpots>,
                loader : ({params}) => fetch(`https://asia-voyage-server-d4mk1n2iz-md-sojib-hossain-cses-projects.vercel.app/${params.country}`)
            },
        ]
    },
]);


export default router;