import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/posts";
import { postsService } from "../../services/postsService";
import Posts from "../PostsContainer/Posts";
import { useParams } from "react-router";

const UserPosts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchUserPosts = async () => {
    if (!id) return;
    const { data: posts } = await postsService.getByUserId(+id);
    setPosts(posts);
  };

  useEffect(() => {
    fetchUserPosts();
  }, [id]);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default UserPosts;
