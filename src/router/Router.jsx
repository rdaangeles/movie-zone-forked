import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default Router;
