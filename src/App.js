import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Router from "./routes";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

export const listRoutes = [{ ...Home }, { ...Login }, { ...NotFound }];

// params req, res, store
export const getInitialData = () => {
  // you able to push promises here
  const promises = [Promise.resolve()];
  return promises;
};

export const getStaticDataProps = (req) => {
  const { url } = req || {};
  const routeMappingProps = listRoutes.filter((route) => route.path === url);
  const getStaticProps = routeMappingProps[0]?.getStaticProps;
  if (getStaticProps) return getStaticProps;
  return [null, null];
};

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router listRoutes={listRoutes} />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
