const baseURL = "https://rickandmortyapi.com/api";

const episode = "/episode";
const character = "/character";

const urls = {
  episodes: {
    base: episode,
  },
  characters: {
    byIds: (ids: number[]) => `${character}/${ids.join(",")}`,
  },
};

export { urls, baseURL };
