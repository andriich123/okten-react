import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IEpisode } from "../../interfaces/episodes";
import css from "./Episode.module.css";
import { useAppDispatch } from "../../hooks/store";
import { episodesActions } from "../../store/slices";

interface IProps {
  episode: IEpisode;
}

const Episode: FC<IProps> = ({ episode }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const extractCharactersIds = () => {
    return episode.characters
      .map((character) => character.split("/").pop())
      .map((id) => Number(id));
  };

  const handleClick = () => {
    navigate(`/episodes/${episode.id}/characters`, {
      state: extractCharactersIds(),
    });

    dispatch(episodesActions.setCurrentEpisode(episode.name));
  };

  return (
    <div onClick={handleClick} className={css.container}>
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
};

export { Episode };
