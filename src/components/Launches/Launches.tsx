import { FC, useEffect, useState } from "react";
import { launchesService } from "../../services/spacex/launchesService";
import { ILaunch } from "../../types/Launch";
import Launch from "../Launch/Launch";
import css from "./Launches.module.css";

interface Props {}

const Launches: FC<Props> = () => {
  const [launches, setLaunches] = useState<ILaunch[]>([]);

  useEffect(() => {
    launchesService.getLaunches().then((res) => setLaunches(res.data));
  }, []);

  const filtered = launches.filter((launch) => launch.launch_year !== "2020");

  return (
    <div className={css.container}>
      {filtered.map((launch, idx) => (
        <Launch key={idx} launch={launch} />
      ))}
    </div>
  );
};

export default Launches;
