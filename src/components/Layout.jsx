import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header, Link } from './Layout.styled'

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
    </>
    
  );
};