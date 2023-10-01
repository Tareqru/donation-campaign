import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Root from "../Pages/Root";
import Donation from "../Pages/Donation";
import Statactics from "../Pages/Statactics";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=>fetch("donation.json")
            },
                       {
                path:"/donation",
                element:<Donation></Donation>,
            },
            {
                path:"/statactics",
                element:<Statactics></Statactics>,
            },
        ]
    }
])
export default router;