import BalanceApi from "../../../api/currency/CurrencyApi";

const Balance = () => {
  //Реализовать получение баланса
  //Cash, crypto, usd
  const { data } = BalanceApi.useGetBalanceQuery();
  console.log("data", data);
  return <div className="balance">Balance: $1,000.00</div>;
};

export default Balance;
