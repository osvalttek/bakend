import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/service/userService";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      CreateProduct
      <button
        className="w-36 h-12 border-2 border-green-700 rounded-lg text-green-700"
        onClick={handleClick}
      >
        {" "}
        salir
      </button>
    </div>
  );
};

export default CreateProduct;
