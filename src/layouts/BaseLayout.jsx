
import React from 'react'
import PrimaryLayout from './PrimaryLayout';
export default function BaseLayout({children}) {
  const ContainerLayout = PrimaryLayout;


  return (
    <div>
        <ContainerLayout>
          {children}
        </ContainerLayout>
    </div>
  )
}
