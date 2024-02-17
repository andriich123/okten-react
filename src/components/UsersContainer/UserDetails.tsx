import { FC } from "react";
import css from "./UserDetails.module.css";
import { IUser } from "../../interfaces/users";
import { useNavigate } from "react-router";

interface IProps {
  user: IUser;
}

const UserDetails: FC<IProps> = ({ user }) => {
  const { name, username, email, address, company, phone, website } = user;
  const navigate = useNavigate();

  return (
    <div className={css.userContainer}>
      <h1 className={css.userTitle}>{name}</h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{address?.street || "-"}</p>
      <p>{company?.name || "-"}</p>
      <p>{phone}</p>
      <a href={website} className={css.websiteLink}>
        {website}
      </a>
      <p>{company?.catchPhrase || "-"}</p>
      <p>{company?.bs || "-"}</p>
      <button
        type="button"
        onClick={() => navigate(`/users/${user.id}/posts`)}
        className={css.postsButton}
      >
        Posts of the user
      </button>
    </div>
  );
};

export default UserDetails;
