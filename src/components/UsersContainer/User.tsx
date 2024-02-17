import { FC } from "react";
import css from "./User.module.css";
import { IUser } from "../../interfaces/users";
import { Link } from "react-router-dom";

interface IProps {
  user: Pick<IUser, "id" | "name">;
}

const User: FC<IProps> = ({ user }) => {
  const { id, name } = user;

  return (
    <div className={css.container}>
      <h1 className={css.userTitle}>
        <span>#{id}</span> {name}
      </h1>
      <Link to={`/users/${id}`}>Details</Link>
    </div>
  );
};

export default User;
