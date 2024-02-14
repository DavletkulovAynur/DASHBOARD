import { Balance } from "../../components/balance";
import css from "./styles/dashboard.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <Tabs>
        <TabList>
          <Tab>CUSHION</Tab>
          <Tab>INVESTMENTS</Tab>
        </TabList>

        <TabPanel>
          <Balance />
        </TabPanel>
        <TabPanel>
          <Balance />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
