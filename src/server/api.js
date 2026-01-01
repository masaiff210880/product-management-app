import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productManagementApi = createApi({
  reducerPath: "productManagementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productManagementApi;
