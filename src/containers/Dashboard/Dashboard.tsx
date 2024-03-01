import { Tab } from "../../components/Tab";
import Balance from "./balance";
import Investment from "./investment";
import css from "./styles/dashboard.module.css";

const Dashboard = () => {
  const tabs = ["BALANCE", "INVESTMENTS"];
  const panels = [<Balance />, <Investment />];

  return (
    <div className={css.dashboard}>
      <Tab tabs={tabs} panels={panels} />
    </div>
  );
};

export default Dashboard;
