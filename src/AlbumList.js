import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAlbums } from "./Api";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const albumData = await fetchAlbums();
      setAlbums(albumData);
    };
    getAlbums();
  }, []);

  return (
    <div>
      <h1>Список альбомов</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
