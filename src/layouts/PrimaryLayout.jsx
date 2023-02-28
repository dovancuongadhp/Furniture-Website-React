import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function PrimaryLayout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
