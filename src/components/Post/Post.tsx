import { FC } from "react";
import { IPost } from "../../types/Post";
import css from "./Post.module.css";

interface IProps {
  post: Pick<IPost, "id" | "title">;
}

const Post: FC<IProps> = ({ post }) => {
  const { id, title } = post;

  return (
    <h1 className={css.title}>
      id: {id} {title}
    </h1>
  );
};

export default Post;
