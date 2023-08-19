import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import {SignUp} from "../pages/SignUp"
import { SignIn } from "../pages/SignIn";
import {HomePage} from "../pages/HomePage";
import { Profile } from "../pages/Profile";
import { Announce } from "../pages/Announce";
import { ProductPage } from "../pages/Product";
import { MyAnnounce } from "../pages/MyAnnounce";
import { EditProfile } from "../pages/EditProfile";
import { Ranking } from "../pages/Ranking";

export function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route Component={SignIn} path="/"/>
          <Route Component={SignUp} path="/cadastro"/> 
          <Route Component={HomePage} path="/home"/>
          <Route Component={Profile} path="/profile"/>
          <Route Component={Announce} path="/announce"/>
          <Route Component={ProductPage} path="/product/:id"/>
          <Route Component={MyAnnounce} path="/myAnnounce"/>
          <Route Component={EditProfile} path="/editProfile"/>
          <Route Component={Ranking} path="/ranking"/>
        </Routes>            
     </BrowserRouter>
    )
}