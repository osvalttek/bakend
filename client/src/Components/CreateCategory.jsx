import { useCreateCategoryMutation } from "../store/service/categoryService";

const CreateCategory = () => {
  const [data] = useCreateCategoryMutation();
  const handleClick = () => {
    data({
      name: "Papas fritas",
    });
  };
  return (
    <button
      className="w-36 h-12 border-2 border-blue-700 rounded-lg text-white-700 bg-blue-700"
      onClick={handleClick}
    >
      Crear categoria
    </button>
  );
};

export default CreateCategory;
