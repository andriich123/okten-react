import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { usersService } from "../services/usersService";
import { IUser } from "../interfaces/users";
import UserDetails from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    if (!id) return;
    const { data: user } = await usersService.getById(+id);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <div>
      {user && <UserDetails user={user} />}
      <Outlet />
    </div>
  );
};

export default UserDetailsPage;
