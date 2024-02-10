import { FC } from "react";
import { IPost } from "../../types/Post";
import css from "./PostDetails.module.css";

interface Props {
  post: IPost;
}

const PostDetails: FC<Props> = ({ post }) => {
  const { userId, id, title, body } = post;

  return (
    <div className={css.container}>
      <h1>{title}</h1>
      <p>{body}</p>
      userId: {userId}, id: {id}
    </div>
  );
};

export default PostDetails;
