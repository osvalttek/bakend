import { useGetAllCategoriesQuery } from "../store/service/categoryService";
import Categories from "./Categories";

const GetAllCategories = () => {
  const { data, isError, isLoading } = useGetAllCategoriesQuery();
  return isLoading ? (
    <h2>Espera</h2>
  ) : (
    data.results.map((d, key) => <Categories data={d} key={key} />)
  );
};

export default GetAllCategories;
