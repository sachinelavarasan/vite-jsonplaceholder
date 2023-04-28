/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./style.scss";
function DropDownComp({ user }) {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="dropdown-container d-flex flex-column align-items-center">
      <img
        src={user?.profilepicture}
        alt={user?.username}
        className="profile-small"
      />
      <p className="bold-para">{user?.name}</p>
      <p className="light-para">{user?.email}</p>
      <div className="divider" />
      <p className="bold-para">{user?.name}</p>
      <div className="divider" />
      <p className="bold-para">{user?.name}</p>
      <button className="signout" onClick={logOut}>
        Sign out
      </button>
    </div>
  );
}

export default DropDownComp;
