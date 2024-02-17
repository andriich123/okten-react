import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/todos">Todos</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/comments">Comments</Link>
    </div>
  );
};

export default Header;
