import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { routes } from "./routes";

console.log(routes);

function Router() {



  return (
    <BrowserRouter>
      <Routes>
        {routes.map((el) => (
          <Route path={el.route} element={el.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
