import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const LoggedinRoutes = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/'/>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default LoggedinRoutes;
