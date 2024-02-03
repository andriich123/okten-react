import "./Characters.css";
import { simpsons } from "../data/simpsons";
import { characters as rickAndMortyCharacters } from "../data/rick-and-morty";
import RickAndMortyCharacter from "./RickAndMortyCharacter";
import SimpsonCharacter from "./SimpsonCharacter";

/* TODO: 

1. Описати всю сім'ю сімпсонів (5 персонажів)

2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
https://rickandmortyapi.com/api/character
Створити 6 персонажів

*/

const Characters = () => {
  return (
    <div>
      <h1 className="title">Simpsons</h1>
      <div className="characters">
        {simpsons.map((simpson, idx) => (
          <SimpsonCharacter key={idx} character={simpson} />
        ))}
      </div>

      <h1 className="title">Rick and Morty</h1>
      <div className="characters">
        {rickAndMortyCharacters.map((character, idx) => (
          <RickAndMortyCharacter key={idx} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
