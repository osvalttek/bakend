import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/category" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "",
    }),
    createCategory:builder.mutation({
        query:(body)=>({
            url:"",
            method:"POST",
            body
        })
    })
    
  }),
});

export const {useGetAllCategoriesQuery, useCreateCategoryMutation} = categories;
