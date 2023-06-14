import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import {SignUp} from "../pages/SignUp"
import { SignIn } from "../pages/SignIn";
import {HomePage} from "../pages/HomePage";
import { Profile } from "../pages/Profile";

export function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route Component={SignIn} path="/"/>
          <Route Component={SignUp} path="/cadastro"/> 
          <Route Component={HomePage} path="/home"/>
          <Route Component={Profile} path="/profile"/>
        </Routes>            
     </BrowserRouter>
    )
}