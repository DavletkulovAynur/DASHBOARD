import { Tab as ReactTab, Tabs, TabList, TabPanel } from "react-tabs";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  tabs: string[];
  panels: React.ReactNode[];
}
const Tab: React.FC<IProps> = ({ tabs, panels }) => {
  const tabIds = tabs.map(() => uuidv4()); // Генерируем уникальные ID для вкладок

  return (
    <Tabs>
      <TabList>
        {tabs.map((tab, index) => (
          <ReactTab key={tabIds[index]}>{tab}</ReactTab>
        ))}
      </TabList>

      {panels.map((panel, index) => (
        <TabPanel key={tabIds[index]}>{panel}</TabPanel>
      ))}
    </Tabs>
  );
};

export default Tab;
