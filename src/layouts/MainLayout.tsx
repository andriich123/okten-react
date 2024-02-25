import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import css from "./MainLayout.module.css";
import { EpisodeNameProvider } from "../hoc/EpisodeNameProvider";

const MainLayout = () => {
  return (
    <>
      <EpisodeNameProvider>
        <div className={css.headerContainer}>
          <Header />
        </div>
        <div className={css.contentContainer}>
          <Outlet />
        </div>
      </EpisodeNameProvider>
    </>
  );
};

export default MainLayout;
