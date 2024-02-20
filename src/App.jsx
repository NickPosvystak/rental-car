import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import GlobalStyle from 'GlobalStyle';
import { Navigation } from 'components/Navigation/Navigation';
// import { Home } from 'pages/Home';
// import { Catalog } from 'pages/Catalog';
// import { Favorites } from 'pages/Favorites';

// const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </div>
  );
};
