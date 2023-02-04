import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieInfo = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Trailer = lazy(() => import("./Trailer/Trailer"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
