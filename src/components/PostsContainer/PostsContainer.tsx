import { FC, useState } from "react";
import { IPost } from "../../types/Post";
import Posts from "../Posts/Posts";
import PostDetails from "../PostDetails/PostDetails";
import css from "./PostsContainer.module.css";

const PostsContainer: FC = () => {
  const [postDetails, setPostDetails] = useState<IPost | null>(null);

  return (
    <div className={css.container}>
      <div
        className={css.posts}
        style={{ width: postDetails ? "70%" : "100%" }}
      >
        <Posts setPostDetails={setPostDetails} />
      </div>

      {postDetails && (
        <div className={css.details}>
          <h2>Post details</h2>
          <PostDetails post={postDetails} />
        </div>
      )}
    </div>
  );
};

export default PostsContainer;
