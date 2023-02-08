import { useUpdateCategoryMutation } from "../store/service/categoryService";

const UpdateCategory = () => {
  const [data] = useUpdateCategoryMutation();
  const handleClick = () => {
    data({
      id: 3,
      name: "enchiladas"
    });
  };
  return (
    <button
      className="w-36 h-12 border-2 border-green-700 rounded-lg text-white-700 bg-green-700"
      onClick={handleClick}
    >
      Modificar categoria
    </button>
  );
};

export default UpdateCategory;
