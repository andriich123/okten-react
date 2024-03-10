import { Outlet } from "react-router-dom";
import css from "./MainLayout.module.css";
import { Header } from "../components/Header";

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

export { MainLayout };
