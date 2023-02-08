import { useGetCategoryByIdQuery } from "../store/service/categoryService";

const GetCategoryById = () => {
  const { data, isLoading } = useGetCategoryByIdQuery(3);
  return isLoading ? <h2>Espera</h2> : <h3>{data.results.name}</h3>;
};

export default GetCategoryById;
