import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import css from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <div className={css.contentContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
