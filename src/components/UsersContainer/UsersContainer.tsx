import { FC, useEffect, useState } from "react";
import Users from "../Users/Users";
import UserForm from "../UserForm/UserForm";
import css from "./UsersContainer.module.css";
import { usersService } from "../../services/jsonplaceholder/usersService";
import { IUser } from "../../types/User";

const UsersContainer: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    usersService.getAll().then(({ data: users }) => setUsers(users));
  }, []);

  const handleCreateSubmit = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <div className={css.userFormContainer}>
        <UserForm onSubmit={handleCreateSubmit} />
      </div>
      <Users users={users} />
    </div>
  );
};

export default UsersContainer;
