import { TypeLayout } from "../../layouts/type";
import { lazy } from "react";
// import Decor from "./Decor";
const Decor = lazy(()=>import('./Decor')) 
const routes = [
    {
        path : '/decor',
        element : Decor,
        layout : TypeLayout.PrimaryLayout,
    }
   
]
export default routes;