import { Tab } from "../../components/Tab";
import { Balance } from "./balance";
import css from "./styles/dashboard.module.css";

const DashboardContainer = () => {
  return (
    <div>
      <Balance />
    </div>
  );
};

const Dashboard = () => {
  //API
    

  //
  const tabs = ["CUSHION", "INVESTMENTS"];
  const panels = [<DashboardContainer />, <DashboardContainer />];

  return (
    <div className={css.dashboard}>
      <Tab tabs={tabs} panels={panels} />
    </div>
  );
};

export default Dashboard;
