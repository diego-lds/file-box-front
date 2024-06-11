import React from "react";
import { Route, Routes as Rotas } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Routes = () => {
  return (
    <Rotas>
      <Route path="/" exact element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Rotas>
  );
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default Routes;
