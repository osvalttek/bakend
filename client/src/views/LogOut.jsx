import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 500);
    return clearTimeout();
  }, []);
  return <div>Chau!!! hasta luego!!!</div>;
};

export default LogOut;
