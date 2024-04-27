import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Pages/Root/Root";
import ALlSpot from "../Pages/AllSpot/ALlSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";
import MyList from "../Pages/MyList/MyList";
import Home from "../Pages/Home/Home";


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
                element : <AddSpot></AddSpot>
            },
            {
                path : "/myList",
                element : <MyList></MyList>
            },
        ]
    },
]);


export default router;