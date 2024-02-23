import { Dashboard } from "../containers/Dashboard";
import css from "./styles/main.module.css";

const Main = () => {

  return (
    <div className={css.wrapper}>
      <Dashboard />
    </div>
  );
};

export default Main;
