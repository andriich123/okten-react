import { FC } from "react";
import { IUser } from "../../types/User";
import User from "../User/User";

import css from "./Users.module.css";

interface IProps {
  users: IUser[];
}

const Users: FC<IProps> = ({ users }) => {
  return (
    <div className={css.usersContainer}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
