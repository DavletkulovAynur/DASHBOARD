import { Tab } from "../../components/Tab";
import Cushion from "./cushion";
import Investment from "./investment";
import css from "./styles/dashboard.module.css";

const Dashboard = () => {
  const tabs = ["CUSHION", "INVESTMENTS"];
  const panels = [<Cushion />, <Investment />];

  return (
    <div className={css.dashboard}>
      <Tab tabs={tabs} panels={panels} />
    </div>
  );
};

export default Dashboard;
