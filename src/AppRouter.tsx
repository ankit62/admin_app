import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import Home from "./pages/HomePage/HomePage";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const AppRouter = () => {
    const  isLoggedIn  = useIsAuthenticated();
    console.log(isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/home"}
          element={
            <RequireAuth fallbackPath="/login">
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
