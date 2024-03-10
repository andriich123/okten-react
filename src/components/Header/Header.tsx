import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/cars">Cars</Link>
    </div>
  );
};

export { Header };
