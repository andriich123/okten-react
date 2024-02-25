import { useContext } from "react";
import { EpisodeNameContext } from "../hoc/EpisodeNameProvider";

const useEpisodeNameContext = () => useContext(EpisodeNameContext);

export { useEpisodeNameContext };
