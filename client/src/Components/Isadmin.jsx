import { Outlet } from "react-router-dom";



const Isadmin = () => {
  const isAdmin = true;

  return isAdmin ? <Outlet/> : <h1>Acceso denegado</h1>;
};

export default Isadmin;
