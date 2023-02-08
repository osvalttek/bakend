import CreateCategory from "./Components/CreateCategory";
import DeleteCategory from "./Components/DeleteCategory";
import GetAllCategories from "./Components/GetAllCategories";
import GetCategoryById from "./Components/GetCategoryById";
import UpdateCategory from "./Components/UpdateCategory";
import { useCreateCategoryMutation } from "./store/service/categoryService";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">getAllCategories</h1>
      <GetAllCategories />

      <hr />
      <h2 className="text-3xl font-bold underline">getCategoryByid</h2>
      <GetCategoryById />
      <hr />
      <h1 className="text-3xl font-bold underline">createCategory</h1>
      <CreateCategory />
      <hr />
      <h1 className="text-3xl font-bold underline">updateCategory</h1>
      <UpdateCategory />
      <hr />
      <h1 className="text-3xl font-bold underline">deleteCategory</h1>
      <DeleteCategory />
    </>
  );
}

export default App;
