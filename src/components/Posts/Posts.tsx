import { FC, useEffect, useState } from "react";
import { postsService } from "../../services/jsoplaceholder/postsService";
import Post from "../Post/Post";
import { IPost } from "../../types/Post";
import css from "./Posts.module.css";

interface IProps {
  setPostDetails?: (post: IPost) => void;
}

const Posts: FC<IProps> = ({ setPostDetails }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postsService.getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className={css.container}>
      {posts.map((post) => (
        <div key={post.id} className={css.post}>
          <Post key={post.id} post={post} />

          {setPostDetails && (
            <button
              className={css.detailsButton}
              onClick={() => setPostDetails(post)}
            >
              Details
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
