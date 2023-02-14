import { Outlet } from "react-router-dom";
import { useMeQuery } from "../store/service/userService";

const Isadmin = () => {
  const { data, isLoading, error } = useMeQuery();
 

   return !isLoading && data?.result.role === "admin" ? <Outlet /> : <h1>{error.data.message}</h1>;
  

};

export default Isadmin;
