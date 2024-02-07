import { CurrencyApi } from "../api";
import css from "./dashboard.module.css";

const Dashboard = () => {
  const { data } = CurrencyApi.useGetDataQuery();
  console.log("data", data);
  return (
    <div>
      <div className={css.dashboard}>
        <div className="balance">Your Balance: $1,000.00</div>
        <div className="currency-rate">
          Current Currency Rate: USD to EUR - 1.18
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
