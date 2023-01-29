import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";

// import { Home } from "../pages/Home";
// import { Movies } from "../pages/Movies";
// import { Layout } from "./Layout";
// import { MovieInfo } from "../pages/MovieInfo";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieInfo = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
      
  );
};