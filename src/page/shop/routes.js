import { TypeLayout } from "../../layouts/type";
import React from "react";
// import Shop from "./Shop";
const Shop = React.lazy(()=>import('./Shop'))

const routes = [
    {
        path : '/shop',
        element : Shop,
        layout : TypeLayout.PrimaryLayout,
    }
]
export default routes;