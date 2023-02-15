// import { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useMeQuery } from "../store/service/userService";

// const Isadmin = () => {
//   const navigate = useNavigate();
//   const { data, isLoading, error } = useMeQuery();
//   useEffect(() => {
//     ((!isLoading && data?.result.role != "admin") || error) && navigate("/");
//   }, [isLoading]);

//   return isLoading ? <h2>Cargando</h2> : <Outlet />;
// };

// export default Isadmin;
// -----------------------------------

import { Outlet, Navigate } from "react-router-dom";
import { useMeQuery } from "../store/service/userService";

const Isadmin = () => {
  const { data, isLoading} = useMeQuery();
  return isLoading ? (
    <h2>Cargando</h2>
  ) : (
    data?.result.role === "admin"? <Outlet />: <Navigate to="/" replace={true}  />
  );
};
export default Isadmin;
