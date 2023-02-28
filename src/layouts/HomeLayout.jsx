import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function HomeLayout({children}) {
  return (
    <div>
       <Navbar />
       {/* <h1>HomeLayout</h1> */}
        {children}
    </div>
  )
}
