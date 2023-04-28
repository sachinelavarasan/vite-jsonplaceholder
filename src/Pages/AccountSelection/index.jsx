/* eslint-disable react/prop-types */

import { useContext } from "react";
import { UsersContext } from "../../reducer";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const AccountSelection = () => {
  const state = useContext(UsersContext);

  const navigate = useNavigate();
  return (
    <div className="account-selection">
      {state.isLoading ? (
        <div className="spinner-border text-light" role="status"></div>
      ) : (
        <div className="container-dropdown">
          <header>
            <h6>Select an account</h6>
          </header>
          <div className="dropdown">
            {state.users.map((item) => {
              return (
                <div
                  className="dropdownitem"
                  key={item.username}
                  onClick={() => {
                    navigate(`${item.id}/profile`);
                  }}
                >
                  <img
                    src={item.profilepicture}
                    alt={item.username}
                    className="profile me-3"
                  />
                  <p className="mb-0">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
