import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAlbumById, fetchPhotosByAlbumId, fetchUserById } from "./Api";

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState({});

  useEffect(() => {
    const getAlbumData = async () => {
      const albumData = await fetchAlbumById(id);
      setAlbum(albumData);
      const photoData = await fetchPhotosByAlbumId(id);
      setPhotos(photoData);
      const userData = await fetchUserById(albumData.userId);
      setCreator(userData);
      setLoading(false);
    };
    getAlbumData();
  }, [id]);

  if (loading) return <h2>Загрузка...</h2>;

  return (
    <div>
      <h1>{album.title}</h1>
      <p>
        Создано пользователем:{" "}
        <Link to={`/users/${creator.id}`}>{creator.name}</Link>
      </p>
      <h2>Фотографии</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
