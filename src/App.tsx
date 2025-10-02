import { BrowserRouter, Routes, Route } from "react-router";
import { routeConfig } from "~/routes/config";

import DefaultLayout from "~/components/DefaultLayout/DefaultLayout";

import "./utils/scss/reset.module.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            {routeConfig.map((route) => (
              <Route path={route.path} element={route.element}></Route>
            ))}
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
