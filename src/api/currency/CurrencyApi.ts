import BaseApi from "../BaseApi";

const BalanceApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<unknown, void>({
      query: () => {
        return {
          url: "/balance",
          method: "GET",
        };
      },
    }),
    //Мутации используются для отправки обновлений данных на сервер и применения изменений в локальном кеше.
    //Нужно будет поэкперементировать с мутациями
    setBalance: builder.mutation<unknown, void>({
      query: () => {
        return {
          url: "/balance",
          method: "POST",
        };
      },
    }),
  }),
});

//

export default BalanceApi;
