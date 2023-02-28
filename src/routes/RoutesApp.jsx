import { allroutes } from "./allroutes";

import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        {
          allroutes.map((item,index)=>{
            const Page = item.element
            return <Route key={index} path={item.path} 
                element={
                <BaseLayout>
                  <Page />
                </BaseLayout>
              }
            />
          })
        }
      </Routes>
    </BrowserRouter>
  );
}
