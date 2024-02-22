import { useEffect, useState } from 'react';
import { StyledBtn, StyledText } from './StyledLoadMoreBtn.styled';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { fetchAllCars } from '../../redux/operations';

const carsInstance = axios.create({
  baseURL: 'https://65ccd3f8dd519126b83fa909.mockapi.io',
});

export const LoadMoreBtn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const loadMoreCars = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const nextPage = currentPage + 1;
      const response = await carsInstance.get(`/car?page=${nextPage}&limit=12`);
      const newCars = response.data;

      dispatch({ type: fetchAllCars.fulfilled.type, payload: newCars });

      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error fetching more cars:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {cars.cars.length > 0 ? (
        <StyledBtn type="button" onClick={loadMoreCars}>
          {loading ? 'Loading...' : 'Load more'}
        </StyledBtn>
      ) : (
        <StyledText>
          We are very sorry, but we no longer have free options for car rental,
          please go back to the catalog
        </StyledText>
      )}
    </>
  );
};
