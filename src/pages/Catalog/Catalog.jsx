import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';
import {
  selectBrands,
  selectCars,
  selectFilteredCars,
  selectIsLoading,
  selectLimit,
  selectPage,
  selectTotal
} from '../../redux/cars/selectors';
import { setFilteredCars, setPage, setTotal } from '../../redux/cars/slice';
import CarsList from '../../components/CarsList/CarsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadButton from '../../components/Button/LoadButton';
import { setSelectedBrand } from '../../redux/filter/slice';
import s from './Catalog.module.css';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const limit = useSelector(selectLimit);
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit, page]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = cars.filter(car => car.make === selectedBrand);
      dispatch(setFilteredCars(filtered));
      dispatch(setTotal(filtered.length));
    } else {
      dispatch(setFilteredCars(cars));
      dispatch(setTotal(cars.length));
    }
  }, [selectedBrand, cars, dispatch]);

  const handleFilter = brand => {
    dispatch(setSelectedBrand(brand));
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (nextPage <= total) {
      dispatch(setPage(nextPage));
    }
  };

  return (
    <div className={s.wrapper}>
      <SearchBar onFilter={handleFilter} />
      {isLoading && <p className={s.loader}>Loading...</p>}
      <CarsList cars={filteredCars} />
      <LoadButton className={s.load_button} onClick={handleLoadMore}>
        Load more
      </LoadButton>
    </div>
  );
};

export default Catalog;
