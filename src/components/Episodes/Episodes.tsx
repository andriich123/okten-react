import { useEffect, useState } from "react";
import { IEpisode } from "../../interfaces/episodes";
import { useSearchParams } from "react-router-dom";

import { episodesService } from "../../services/episodesService";
import Pagination from "../Pagination/Pagination";
import Episode from "./Episode";
import css from "./Episodes.module.css";

const Episodes = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const [pagination, setPagination] = useState<{
    next: number | null;
    prev: number | null;
  }>({ next: null, prev: null });

  const [query, setQuery] = useSearchParams();

  const currentPage = !isNaN(Number(query.get("page")))
    ? Number(query.get("page")) || 1
    : 1;

  useEffect(() => {
    episodesService.getAll({ page: currentPage }).then(({ data: response }) => {
      setEpisodes(response.results);
      setPagination({
        next: response.info.next ? currentPage + 1 : null,
        prev: response.info.prev ? currentPage - 1 : null,
      });
    });
  }, [currentPage]);

  const handleNextPage = () => {
    setQuery({ page: pagination.next ? `${pagination.next}` : "" });
  };

  const handlePrevPage = () => {
    setQuery({ page: pagination.prev ? `${pagination.prev}` : "" });
  };

  return (
    <div>
      <div className={css.container}>
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </div>
      <Pagination
        next={pagination.next}
        prev={pagination.prev}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
};

export default Episodes;
