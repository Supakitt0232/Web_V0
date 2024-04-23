import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Theory from "views/examples/Theory.js"
import Login from "views/examples/Login.js";
import LoginTeacher from "views/examples/LoginTeacher.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Start from "views/examples/Start.js";
// import Theory from "views/examples/Theory.js";0.



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/login-teacher" exact element={<LoginTeacher/>}/>
      <Route path="/theory" exact element={<Theory />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/start-page" exact element={<Start />} />
      <Route path="/theory-page" exact element={<Theory />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
