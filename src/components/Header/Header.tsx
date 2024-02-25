import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useEpisodeNameContext } from "../../hooks/useEpisodeNameContext";

const Header = () => {
  const { episodeName } = useEpisodeNameContext();

  return (
    <div className={css.header}>
      {episodeName && <h1 className={css.episode}>{episodeName}</h1>}
      <Link to="/episodes" className={css.link}>
        Episodes
      </Link>
    </div>
  );
};

export default Header;
