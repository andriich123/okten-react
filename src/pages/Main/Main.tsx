import { FC } from "react";
import PostsContainer from "../../components/PostsContainer/PostsContainer";
import css from "./Main.module.css";
import Launches from "../../components/Launches/Launches";

interface Props {}

const Main: FC<Props> = () => {
  return (
    <div className={css.container}>
      <PostsContainer />
      <div className={css.launches}>
        <Launches />
      </div>
    </div>
  );
};

export default Main;
