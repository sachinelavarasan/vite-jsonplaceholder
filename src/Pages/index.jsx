/* eslint-disable no-unused-vars */

import "../App.css";
import { HeaderComp, Sidebar } from "../components";
import ComingSoon from "./ComingSoon";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <div className="account-page">
      <div className="side-section">
        <Sidebar />
      </div>
      <Routes>
        <Route
          path="/profile"
          element={
            <div className="main-section ps-4">
              <HeaderComp name="Profile" />
              <Profile />
            </div>
          }
        />
        <Route
          path="/posts"
          element={
            <div className="main-section ps-4">
              <HeaderComp name="Posts" />
              <ComingSoon />
            </div>
          }
        />
        <Route
          path="/gallery"
          element={
            <div className="main-section ps-4">
              <HeaderComp name="Gallery" />
              <ComingSoon />
            </div>
          }
        />
        <Route
          path="/todo"
          element={
            <div className="main-section ps-4">
              <HeaderComp name="ToDo" />
              <ComingSoon />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Pages;
