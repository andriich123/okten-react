import { useEffect, useState } from "react";
import { IAlbum } from "../../interfaces/albums";
import { albumsService } from "../../services/albumsService";
import Album from "./Album";
import css from "./Albums.module.css";

const Albums = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const fetchAlbums = async () => {
    const { data: albums } = await albumsService.getAll();
    setAlbums(albums);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className={css.container}>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Albums;
