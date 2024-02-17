import { FC } from "react";
import { IPost } from "../../interfaces/posts";
import { Link } from "react-router-dom";
import css from "./Post.module.css";

interface Props {
  post: Pick<IPost, "id" | "title">;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{post.title}</h1>
      <Link to={`/posts/${post.id}`} className={css.detailsLink}>
        Details
      </Link>
    </div>
  );
};

export default Post;
