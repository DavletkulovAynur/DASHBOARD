import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server/api",
  }),
  endpoints: () => ({}),
});

export default BaseApi;
