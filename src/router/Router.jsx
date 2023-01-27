import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../pages/Hero";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default Router;
