import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="*">Not Found</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
