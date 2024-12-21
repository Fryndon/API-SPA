import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById, fetchUserAlbums } from "./Api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserById(id);
      setUser(userData);
      const userAlbums = await fetchUserAlbums(id);
      setAlbums(userAlbums);
    };
    getUserData();
  }, [id]);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Альбомы</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Назад к пользователям</Link>
    </div>
  );
};

export default UserDetail;
