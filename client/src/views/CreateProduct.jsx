import { useCreatePoductMutation } from "../store/service/productService";

const CreateProduct = () => {
  const [createProduct] = useCreatePoductMutation();

  const formData = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [name, description, price, stock, categoryName, image] =
      e.target.elements;
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("price", price.value);
    formData.append("stock", stock.value);
    formData.append("categoryName", categoryName.value);
    formData.append("image", image.files[0]);
    formData.append("image", image.files[1]);

    for (const value of formData.values()) {
      console.log(value);
    }

     createProduct(formData);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="">Nombre</label>
        <input type="text" name="name" placeholder="Nombre del producto" />
        <input
          type="text"
          name="description"
          placeholder="Descripcion del producto"
        />
        <input type="number" name="price" placeholder="Precio" />
        <input type="number" name="stock" placeholder="Stock" />
        <input
          type="text"
          name="categoryName"
          placeholder="Nombre de la categoria"
        />
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          multiple
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default CreateProduct;
