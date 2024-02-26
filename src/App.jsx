import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import GlobalStyle from 'GlobalStyle';
import { Navigation } from 'components/Navigation/Navigation';
import { CirclesWithBar } from 'react-loader-spinner';
import { StyledLoader } from './pages/Home/StyledHome.styled';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Suspense
        fallback={
          <StyledLoader>
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </StyledLoader>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </div>
  );
};
