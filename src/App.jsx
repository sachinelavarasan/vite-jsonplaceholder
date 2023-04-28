/* eslint-disable no-unused-vars */
import { useEffect, useReducer, useState } from "react";

import "./App.css";
import { AccountSelection } from "./Pages/AccountSelection";
import { Route, Routes } from "react-router-dom";
import {
  reducer,
  initialState,
  UsersContext,
  UsersDispatchContext,
} from "./reducer";
import { PrivateRoute } from "./PrivateRoute";
import Pages from "./Pages";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "loading",
      loading: true,
    });
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then(({ users }) => {
        dispatch({
          type: "userslist",
          users: users,
        });
        setTimeout(() => {
          dispatch({
            type: "loading",
            loading: false,
          });
        }, 1000);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <UsersContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        <main className="main">
          <Routes>
            <Route path="/" element={<AccountSelection />} />
            <Route
              path=":id/*"
              element={
                <PrivateRoute>
                  <Pages />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </UsersDispatchContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;
