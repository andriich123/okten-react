import { FC, useEffect, useState } from "react";
import { IPost } from "../../interfaces/posts";
import { IComment } from "../../interfaces/comments";
import { commentsService } from "../../services/commentsService";
import Comments from "../CommentsContainer/Comments";
import css from "./PostDetails.module.css";

interface Props {
  post: IPost;
}

const PostDetails: FC<Props> = ({ post }) => {
  const [postComments, setPostComments] = useState<IComment[]>([]);

  const fetchPostComments = async () => {
    if (!post.id) return;
    const { data: comments } = await commentsService.getByPostId(post.id);
    setPostComments(comments);
  };

  useEffect(() => {
    fetchPostComments();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>{post.title}</h1>
      <p className={css.meta}>
        #{post.id} by #{post.userId}
      </p>
      <p className={css.body}>{post.body}</p>

      <h2 className={css.commentsTitle}>Comments</h2>
      <Comments comments={postComments} />
    </div>
  );
};

export default PostDetails;
