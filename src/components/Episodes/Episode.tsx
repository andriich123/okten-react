import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IEpisode } from "../../interfaces/episodes";
import css from "./Episode.module.css";

interface IProps {
  episode: IEpisode;
}

const Episode: FC<IProps> = ({ episode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/episodes/${episode.id}/characters`);
  };

  return (
    <div onClick={handleClick} className={css.container}>
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
};

export default Episode;
