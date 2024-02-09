import BaseApi from "../BaseApi";

export const CurrencyApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<unknown, void>({
      query: () => {
        return {
          url: "todos",
          method: "GET",
        };
      },
    }),
  }),
});
