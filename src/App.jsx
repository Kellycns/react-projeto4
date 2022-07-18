import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import React from "react";

import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";
import Profile from "./components/pages/Profile";
import Registration from "./components/pages/Registration";
import EditProfile from "./components/pages/EditProfile";

import './css/reset.css';
import './css/all.css';
import './css/cadastro_style.css';
import './css/feed_style.css';
import './css/index_style.css';
import './css/nav.css';
import './css/perfil_style.css';
import './css/edit_style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/user/:userId/edit" element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
