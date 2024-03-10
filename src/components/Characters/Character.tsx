import { FC } from "react";
import { ICharacter } from "../../interfaces/characters";

interface IProps {
  character: ICharacter;
}

const Character: FC<IProps> = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>
        {character.status}, {character.species}, {character.gender}
      </p>
    </div>
  );
};

export { Character };
