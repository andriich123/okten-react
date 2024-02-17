import { Outlet } from "react-router-dom";
import Comments from "../components/CommentsContainer/Comments";

const CommentsPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Comments />
      <Outlet />
    </div>
  );
};

export default CommentsPage;
