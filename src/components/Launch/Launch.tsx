import { FC } from "react";
import { ILaunch } from "../../types/Launch";

interface Props {
  launch: ILaunch;
}

const Launch: FC<Props> = ({ launch }) => {
  const { mission_name, launch_year, links } = launch;

  return (
    <div>
      <h1>{mission_name}</h1>
      <p>{launch_year}</p>
      <img src={links.mission_patch_small} alt="launch" />
    </div>
  );
};

export default Launch;
