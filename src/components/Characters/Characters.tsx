import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacter } from "../../interfaces/characters";
import { episodesService } from "../../services/episodesService";
import { charactersService } from "../../services/charactersService";
import Character from "./Character";
import css from "./Characters.module.css";
import { useEpisodeNameContext } from "../../hooks/useEpisodeNameContext";

const Characters = () => {
  const { id: episodeId } = useParams<{ id: string }>();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const navigate = useNavigate();
  const { setEpisodeName } = useEpisodeNameContext();

  const getCharacters = async () => {
    const { data: episode } = await episodesService.getById(Number(episodeId));

    setEpisodeName(episode.name);

    const characterIds = episode.characters
      .map((character) => character.split("/").pop())
      .map((id) => Number(id));

    const { data: characters } = await charactersService.getByIds(characterIds);
    setCharacters(characters);
  };

  const handleNavigateBack = () => navigate(-1);

  useEffect(() => {
    getCharacters();

    return () => setEpisodeName("");
  }, [episodeId]);

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

export default Characters;
