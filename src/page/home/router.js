import React from 'react'
import { TypeLayout } from '../../layouts/type'
const Home = React.lazy(()=> import('./Home'))

export const routes = [
    {
        path : '/',
        element : Home,
        layout : TypeLayout.HomeLayout,
    }
   
]