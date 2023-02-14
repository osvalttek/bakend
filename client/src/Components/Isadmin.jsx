import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useMeQuery } from "../store/service/userService";

const Isadmin = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useMeQuery();
  console.log("🚀 ~ file: Isadmin.jsx:8 ~ Isadmin ~ data", data);
  console.log("🚀 ~ file: Isadmin.jsx:7 ~ Isadmin ~ error", error);

  useEffect(() => {
    if (!isLoading) {
      if (data?.result.role != "admin" || error) navigate("/");
    }
  }, [isLoading]);

  return isLoading ? (
    <h2>Cargando</h2>
  ) : (
    data?.result.role === "admin" && <Outlet />
  );
};

export default Isadmin;
