import { listroutes } from "./listroutes";
import { Fragment } from "react";
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

export default function RoutesApp() {
  const allroutes = listroutes
  return (
   <Fragment>
    <BrowserRouter>
      <Routes>
        {
          allroutes && allroutes.map((item,index)=> {
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
   </Fragment>
  );
}
