import { FC } from "react";
import { IComment } from "../../types/Comment";
import css from "./Comment.module.css";

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className={css.commentContainer}>
      <h1 className={css.commentTitle}>{name}</h1>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
