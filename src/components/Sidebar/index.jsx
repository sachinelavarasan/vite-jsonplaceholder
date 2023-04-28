import { NavLink, useParams } from "react-router-dom";
import "./style.scss";

export const Sidebar = () => {
  let { id } = useParams();
  return (
    <div className="sidebar-container">
      <NavLink
        to={`/${id}/profile`}
        className={({ isActive, isPending }) =>
          isPending ? "navlink" : isActive ? "active" : "navlink"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to={`/${id}/posts`}
        className={({ isActive, isPending }) =>
          isPending ? "navlink" : isActive ? "active" : "navlink"
        }
      >
        Posts
      </NavLink>
      <NavLink
        to={`/${id}/gallery`}
        className={({ isActive, isPending }) =>
          isPending ? "navlink" : isActive ? "active" : "navlink"
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to={`/${id}/todo`}
        className={({ isActive, isPending }) =>
          isPending ? "navlink" : isActive ? "active" : "navlink"
        }
      >
        Todo
      </NavLink>
    </div>
  );
};
