import { useDeleteCategoryMutation } from "../store/service/categoryService";
const DeleteCategory = () => {
  const [data] = useDeleteCategoryMutation();
  const handleClick = () => {
    data(3);
  };
  return (
    <button
      className="w-36 h-12 border-2 border-red-700 rounded-lg text-white-700 bg-red-700"
      onClick={handleClick}
    >
      Eliminar categoria
    </button>
  );
};

export default DeleteCategory;
