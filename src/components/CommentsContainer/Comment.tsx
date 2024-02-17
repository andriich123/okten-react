import { FC } from "react";
import { IComment } from "../../interfaces/comments";
import css from "./Comment.module.css";

interface Props {
  comment: IComment;
}

const Comment: FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className={css.container}>
      <p className={css.name}>{name}</p>
      <p className={css.email}>{email}</p>
      <p className={css.body}>{body}</p>
    </div>
  );
};

export default Comment;
