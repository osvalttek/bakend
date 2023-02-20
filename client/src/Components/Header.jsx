import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "../store/service/userService";

const Header = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const data = useMeQuery();
   console.log("🚀 ~ file: Header.jsx:10 ~ Header ~ data", data);

  const handleClick = () => {
    logout();
    navigate("/logout");
  };
  return (
    <header className="flex gap-4">
      <Link to={"/"}>home</Link>
      <Link to={"/admin/createproduct"}> Create Products</Link>

      {data.data ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
      {data.data && <Link to={"/profile"}>{data.data.result.email} </Link>}
    </header>
  );
};

export default Header;
