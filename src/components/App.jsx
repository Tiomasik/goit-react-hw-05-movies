import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Layout } from "./Layout";
import { MovieInfo } from "../pages/MovieInfo";

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieInfo />} />
        </Route>
      </Routes>
    </div>
      
  );
};
