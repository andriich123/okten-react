import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { postsService } from "../services/postsService";
import { IPost } from "../interfaces/posts";
import PostDetails from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  const fetchUser = async () => {
    if (!id) return;
    const { data: post } = await postsService.getById(+id);
    setPost(post);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return <div>{post && <PostDetails post={post} />}</div>;
};

export default PostDetailsPage;
