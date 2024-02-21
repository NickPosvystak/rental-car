import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import { StyledBox } from './StyledCatalogList.styled';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const filteredCars = Array.isArray(cars)
    ? cars
        .filter(car => car.make && typeof car.make === 'string')
        .map(car => ({ ...car, make: car.make.toLowerCase() }))
    : [];


  return (
    <>
      <StyledBox>
        {filteredCars && filteredCars.map(car => (
          <CatalogItem key={car.id} car={car} />
        ))}
      </StyledBox>
    </>
  );
};
