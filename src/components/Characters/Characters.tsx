import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Character } from "./Character";
import css from "./Characters.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { charactersActions, episodesActions } from "../../store/slices";

const Characters = () => {
  const { episodeCharacters: characters } = useAppSelector(
    (state) => state.characters
  );

  const { state: characterIds } = useLocation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(charactersActions.getAllByIds(characterIds));
    return () => {
      dispatch(episodesActions.setCurrentEpisode(""));
    };
  }, []);

  const handleNavigateBack = () => navigate(-1);

  return (
    <div>
      <div className={css.backButton} onClick={handleNavigateBack}>
        <span>&#8592;</span>
      </div>
      <div className={css.container}>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export { Characters };
