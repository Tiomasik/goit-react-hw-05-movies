import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <Outlet/>
        </nav>
      </header>
  );
};