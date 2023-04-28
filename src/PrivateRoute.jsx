import { useContext, useEffect } from "react";
import { UsersContext, UsersDispatchContext } from "./reducer";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export function PrivateRoute({ children }) {
  const state = useContext(UsersContext);
  const dispatch = useContext(UsersDispatchContext);
  let { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "pri_loading",
      loading: true,
    });
    if (id && state.users.length) {
      const user = state.users.find((item) => item.id == id);

      dispatch({
        type: "selectuser",
        user: user,
      });
      setTimeout(() => {
        dispatch({
          type: "pri_loading",
          loading: false,
        });
      }, 1000);
    }
  }, [dispatch, id, state.users]);

  return state.priLoading ? (
    <div
      style={{ minHeight: "100vh", width: "100%" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  ) : (
    <>{children}</>
  );
}
