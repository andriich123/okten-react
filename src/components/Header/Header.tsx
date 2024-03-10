import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useAppSelector } from "../../hooks/store";

const Header = () => {
  const { currentEpisode } = useAppSelector((state) => state.episodes);

  return (
    <div className={css.header}>
      {currentEpisode && <h1 className={css.episode}>{currentEpisode}</h1>}
      <Link to="/episodes" className={css.link}>
        Episodes
      </Link>
    </div>
  );
};

export { Header };
