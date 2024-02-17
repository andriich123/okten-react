import { Outlet } from "react-router-dom";
import Comments from "../components/CommentsContainer/Comments";
import css from "./CommentsPage.module.css";

const CommentsPage = () => {
  return (
    <div className={css.container}>
      <Comments />
      <Outlet />
    </div>
  );
};

export default CommentsPage;
