import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";
import { IComment } from "../../interfaces/comments";
import { commentsService } from "../../services/commentsService";
import css from "./Comments.module.css";

const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const navigate = useNavigate();

  const fetchComments = async () => {
    const { data: comments } = await commentsService.getAll();
    setComments(comments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleCommentClick = (comment: IComment) => {
    navigate("posts", { state: { postId: comment.postId } });
  };

  return (
    <div className={css.container}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onClick={handleCommentClick}
        />
      ))}
    </div>
  );
};

export default Comments;
