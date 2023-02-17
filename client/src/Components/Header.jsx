import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "../store/service/userService";

const Header = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  // const data = useMeQuery();
  // console.log("🚀 ~ file: Header.jsx:10 ~ Header ~ data", data);

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <header>
      <Link to={"/home"}>home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/admin/createproduct"}> Create Products</Link>
      <button onClick={handleClick}>Logout</button>
    </header>
  );
};

export default Header;
