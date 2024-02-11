import { FC, useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { commentsService } from "../../services/jsonplaceholder/commentsService";
import { IComment } from "../../types/Comment";
import css from "./CommentsContainer.module.css";
import CommentForm from "../CommentForm/CommentForm";

const CommentContainer: FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    commentsService
      .getAll()
      .then(({ data: comments }) => setComments(comments));
  }, []);

  const handleCreateSubmit = (comment: IComment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div>
      <div className={css.commentFormWrapper}>
        <CommentForm onSubmit={handleCreateSubmit} />
      </div>
      <div className={css.commentsWrapper}>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default CommentContainer;
