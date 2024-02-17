import { FC } from "react";
import { IAlbum } from "../../interfaces/albums";
import css from "./Album.module.css";

interface Props {
  album: IAlbum;
}

const Album: FC<Props> = ({ album }) => {
  const { id, userId, title } = album;

  return (
    <div className={css.container}>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>title: {title}</p>
    </div>
  );
};

export default Album;
