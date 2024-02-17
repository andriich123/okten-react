import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IPost } from "../../interfaces/posts";
import { postsService } from "../../services/postsService";
import css from "./Post.module.css";

const Post = () => {
  const { state } = useLocation();
  const postId = state?.postId;
  const [post, setPost] = useState<IPost | null>(null);

  const fetchPost = async () => {
    if (postId) {
      const { data: post } = await postsService.getById(postId);
      setPost(post);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className={css.container}>
      {!post && <p>Choose a comment to see the post</p>}
      {post && (
        <div>
          <p>id: {post.id}</p>
          <p>userId: {post.userId}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
