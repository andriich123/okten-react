import { FC } from "react";
import { IUser } from "../../types/User";
import css from "./User.module.css";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user }) => {
  const { name, username, email, address, company, phone, website } = user;

  return (
    <div className={css.userContainer}>
      <h1 className={css.userTitle}>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{address?.street}</p>
      <p>{company?.name}</p>
      <p>{phone}</p>
      <a href={website}>{website}</a>
      <p>{company?.catchPhrase}</p>
      <p>{company?.bs}</p>
      <p>{user.id}</p>
    </div>
  );
};

export default User;
