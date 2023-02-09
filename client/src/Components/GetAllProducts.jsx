import { useEffect } from "react";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByUpdateQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../store/service/productService";

const GetAllProducts = () => {
  // const allProducts = useGetAllProductsQuery();
  // console.log(
  //   "🚀 ~ file: GetAllProducts.jsx:5 ~ GetAllProducts ~ allProducts",
  //   allProducts
  // );
  // -------------------
  //   const productByID = useGetProductByIdQuery(1);
  //   console.log(
  //     "🚀 ~ file: GetAllProducts.jsx:8 ~ GetAllProducts ~ productByID",
  //     productByID
  //   );
  // -------------------
  //   const productByUpdate=useGetProductByUpdateQuery(1)
  //   console.log("🚀 ~ file: GetAllProducts.jsx:20 ~ GetAllProducts ~ productByUpdate", productByUpdate)
  // -------------------
  const [createProduct, results] = useCreateProductMutation();
  // console.log("🚀 ~ file: GetAllProducts.jsx:25 ~ GetAllProducts ~ resulst", results)
  //   console.log(
  //     "🚀 ~ file: GetAllProducts.jsx:25 ~ GetAllProducts ~ createProduct",
  //     createProduct
  //   );
  const handleClickCreate = () => {
    createProduct({
      name: "torta de chocolate",
      description: "carne a la parrilla",
      price: 300,
      stock: 10,
      categoryName: "tortas",
    });
  };
  // -------------------

  const [updateProduct] = useUpdateProductMutation();
  // console.log("🚀 ~ file: GetAllProducts.jsx:43 ~ GetAllProducts ~ updateProduct", updateProduct)
  const handleClickUpdate = () => {
    updateProduct({
      id: 1,
      name: "torta de jamon",
    });
  };
  // -------------------
  const [deleteProduct, { data: resultDelete, isError, isLoading, error }] =
    useDeleteProductMutation();
  console.log(
    "🚀 ~ file: GetAllProducts.jsx:54 ~ GetAllProducts ~ error",
    error && error
  );
  // console.log(
  //   "🚀 ~ file: GetAllProducts.jsx:54 ~ GetAllProducts ~ isLoading",
  //   isLoading
  // );
  // console.log(
  //   "🚀 ~ file: GetAllProducts.jsx:54 ~ GetAllProducts ~ isError",
  //   isError
  // );
  // console.log(
  //   "🚀 ~ file: GetAllProducts.jsx:53 ~ GetAllProducts ~ resultDelete",
  //   resultDelete
  // );
  const handleClickDelete = () => {
    deleteProduct(11);
  };
  useEffect(() => {
    resultDelete && alert(resultDelete.message);
    error && alert(error.data.message);
  }, [error, resultDelete]);

  return (
    <div>
      <button
        className="w-36 h-12 border-2 border-blue-700 rounded-lg text-white-700 bg-blue-700"
        onClick={handleClickCreate}
      >
        Crear Producto
      </button>
      <button
        className="w-36 h-12 border-2 border-green-700 rounded-lg text-white-700 bg-green-700"
        onClick={handleClickUpdate}
      >
        Modificar Producto
      </button>
      <button
        className="w-36 h-12 border-2 border-red-700 rounded-lg text-white-700 bg-red-700"
        onClick={handleClickDelete}
      >
        Eliminar Producto
      </button>
    </div>
  );
};

export default GetAllProducts;
