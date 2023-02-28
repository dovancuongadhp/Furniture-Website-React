
import React, { useEffect } from 'react'
import {TypeLayout} from './type'
import PrimaryLayout from './PrimaryLayout';
import HomeLayout from './HomeLayout';
export default function BaseLayout({children,layout}) {

  function getLayout(layout){
    if(layout === TypeLayout.HomeLayout){
      return HomeLayout
    }
    if(layout === TypeLayout.PrimaryLayout){
      return PrimaryLayout
    }
  }
  var ContainerLayout = getLayout(layout);
 

  return (
    <div>
        <ContainerLayout>
          {children}
        </ContainerLayout>
    </div>
  )
}
