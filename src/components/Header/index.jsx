/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import DropDownComp from "../DropDownComp";
import "./style.scss";
import { UsersContext } from "../../reducer";

export const HeaderComp = ({ name }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { selectedUser } = useContext(UsersContext);
  return (
    <>
      <div className="header position-relative">
        <p className="mb-0">{name}</p>
        <div className="d-flex align-items-center">
          <img
            src={selectedUser?.profilepicture}
            alt={selectedUser?.username}
            className="profile-small"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
          <p className="mb-0 ms-2">{selectedUser?.name}</p>
        </div>
      </div>
      {isVisible ? <DropDownComp user={selectedUser} /> : null}
    </>
  );
};
