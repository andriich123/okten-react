import { urls } from "../constants/urls";
import { ICharacter } from "../interfaces/characters";
import { apiService } from "./apiService";

const charactersService = {
  getByIds: (ids: number[]) =>
    apiService.get<ICharacter[]>(urls.characters.byIds(ids)),
};

export { charactersService };
