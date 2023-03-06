import listRoutes from "./listRoutes";
import { Suspense } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Loading from "../components/loading/Loading";

export default function RoutesApp() {
  return (
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            {listRoutes &&
              listRoutes.map((item, index) => {
                const Page = item.element;
                const layout = item.layout
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      <BaseLayout layout={layout}>
                        <Page />
                      </BaseLayout>
                    }
                  />
                );
              })}
          </Routes>
        </BrowserRouter>
      </Suspense>
  );
}
