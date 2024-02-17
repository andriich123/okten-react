import { FC } from "react";
import { IComment } from "../../interfaces/comments";
import css from "./Comment.module.css";

interface Props {
  comment: IComment;
  onClick: (comment: IComment) => void;
}

const Comment: FC<Props> = ({ comment, onClick }) => {
  const { id, postId, name, email, body } = comment;

  const handleClick = () => {
    onClick(comment);
  };

  return (
    <div onClick={handleClick} className={css.container}>
      <p>id: {id}</p>
      <p>postId: {postId}</p>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>body: {body}</p>
    </div>
  );
};

export default Comment;
