import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import AlbumDetail from "./AlbumDetail";
import AlbumList from "./AlbumList";
import NotFound from "./NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/user/:id/albums" element={<AlbumList />} />
        <Route path="/user/:id/albus/:id" element={<AlbumDetail />} />

        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
