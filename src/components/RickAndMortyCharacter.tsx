import { FC } from "react";
import { Character } from "../data/rick-and-morty";
import "./RickAndMortyCharacter.css";

interface Props {
  character: Character;
}

const RickAndMortyCharacter: FC<Props> = ({ character }) => {
  return (
    <div className="rick-and-morty-card">
      <h1 className="rick-and-morty-card__title">{character.name}</h1>
      <img
        className="rick-and-morty-card__image"
        src={character.image}
        alt={character.name}
      />
      <p className="rick-and-morty-card__info">
        {character.status} - {character.species} - {character.gender}
      </p>
      <p className="rick-and-morty-card__info">
        Origin: {character.origin.name}
      </p>
    </div>
  );
};

export default RickAndMortyCharacter;
