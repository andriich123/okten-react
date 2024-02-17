import { FC } from "react";
import { IPost } from "../../interfaces/posts";
import Post from "./Post";

interface Props {
  posts: IPost[];
}

const Posts: FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
