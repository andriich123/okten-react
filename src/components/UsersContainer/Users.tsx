import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/users";
import { usersService } from "../../services/usersService";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const { data: users } = await usersService.getAll();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
