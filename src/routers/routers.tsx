import {createBrowserRouter} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MoviesDetails} from "../components/MoviesDetails/MoviesDetails.tsx";

export const routers = createBrowserRouter([
    {path:'/',element: <MoviesPage/>},
    {path:'/movies/:id',element:<MoviesDetails/>}
])