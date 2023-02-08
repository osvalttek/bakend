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
    createPoduct: builder.mutation({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    updatePoduct: builder.mutation({
      query: (body) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    deletePoduct: builder.mutation({
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
  useCreatePoductMutation,
  useUpdatePoductMutation,
  useDeletePoductMutation,
} = products;
