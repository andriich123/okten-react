import { FC } from "react";
import { Simpson } from "../data/simpsons";
import "./SimpsonCharacter.css";

interface Props {
  character: Simpson;
}

const SimpsonCharacter: FC<Props> = ({ character }) => {
  const { age, info, name, photo, surname } = character;

  return (
    <div className="simpson-card">
      <h1 className="simpson-card__title">
        {name} {surname}
      </h1>
      <img className="simpson-card__image" src={photo} alt={name} />
      <p className="simpson-card__age">{age} years old</p>
      <p className="simpson-card__info">{info}</p>
    </div>
  );
};

export default SimpsonCharacter;
