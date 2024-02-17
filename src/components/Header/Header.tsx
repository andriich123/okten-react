import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
