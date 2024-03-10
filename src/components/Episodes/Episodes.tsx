import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Pagination } from "../Pagination";
import { Episode } from "./Episode";
import css from "./Episodes.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { episodesActions } from "../../store/slices";

const Episodes = () => {
  const { episodes, pagination } = useAppSelector((state) => state.episodes);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useSearchParams({ page: "1" });
  const currentPage = Number(query.get("page")) || 1;

  useEffect(() => {
    dispatch(episodesActions.getAll({ page: currentPage }));
  }, [currentPage]);

  const handleNextPage = () => {
    if (pagination && pagination.next) {
      setQuery((query) => {
        query.set("page", `${currentPage + 1}`);
        return query;
      });
    }
  };

  const handlePrevPage = () => {
    if (pagination && pagination.prev) {
      setQuery((query) => {
        query.set("page", `${currentPage - 1}`);
        return query;
      });
    }
  };

  return (
    <div>
      <div className={css.container}>
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </div>

      {pagination && (
        <Pagination
          next={!!pagination.next}
          prev={!!pagination.prev}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      )}
    </div>
  );
};

export { Episodes };
