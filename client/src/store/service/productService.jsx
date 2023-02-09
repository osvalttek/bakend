import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/product" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/",
      providesTags: ["Products"],
    }),
    getProductById: builder.query({ query: (id) => `/${id}` }),
    getProductByUpdate: builder.query({
      query: (id) => `/getproductbyupdate/${id}`,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByUpdateQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = products;
