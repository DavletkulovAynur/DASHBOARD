import { Tab } from "../../components/Tab";
import { Balance } from "./balance";
import css from "./styles/dashboard.module.css";

const Dashboard = () => {
  const tabs = ["CUSHION", "INVESTMENTS"];
  const panels = [<Balance />, <Balance />];

  return (
    <div className={css.dashboard}>
      <Tab tabs={tabs} panels={panels} />
    </div>
  );
};

export default Dashboard;
