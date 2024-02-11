import { FC } from "react";
import UsersContainer from "../../components/UsersContainer/UsersContainer";
import CommentContainer from "../../components/CommentsContainer/CommentsContainer";
import CarsContainer from "../../components/CarsContainer/CarsContainer";
import css from "./MainPage.module.css";

const MainPage: FC = () => {
  return (
    <div>
      <div className={css.section}>
        <h2 className={css.sectionTitle}>Users</h2>
        <UsersContainer />
      </div>

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Comments</h2>
        <CommentContainer />
      </div>

      <div className={css.section}>
        <h2 className={css.sectionTitle}>Cars</h2>
        <CarsContainer />
      </div>
    </div>
  );
};

export default MainPage;
