import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import {SignUp} from "../pages/SignUp"
import { SignIn } from "../pages/SignIn";

export function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route Component={SignIn} path="/"/>
          <Route Component={SignUp} path="/cadastro"/> 
        </Routes>            
     </BrowserRouter>
    )
}