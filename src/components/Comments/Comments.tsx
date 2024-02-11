import { FC } from "react";
import { IComment } from "../../types/Comment";
import Comment from "../Comment/Comment";
import css from "./Comments.module.css";

interface IProps {
  comments: IComment[];
}

const Comments: FC<IProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className={css.commentWrapper}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
