import React from 'react'
import { TypeLayout } from '../../layouts/type'
const Home = React.lazy(()=> import('./Home'))

const routes = [
    {
        path : '/',
        element : Home,
        layout : TypeLayout.HomeLayout,
    }
   
]
export default routes;