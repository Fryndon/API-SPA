import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import AlbumList from "./components/AlbumList";
import Album from "./components/Album";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* This will catch all unmatched routes */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
