import { FC } from "react";
import { IComment } from "../../interfaces/comments";
import Comment from "./Comment";

interface Props {
  comments: IComment[];
}

const Comments: FC<Props> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
