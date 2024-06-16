import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';
import {
  selectCars,
  selectFilteredCars,
  selectIsLoading,
  selectLimit,

} from '../../redux/cars/selectors';
import { setFilteredCars,setTotal } from '../../redux/cars/slice';
import CarsList from '../../components/CarsList/CarsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadButton from '../../components/Button/LoadButton';
import { selectBrand, setSelectedBrand } from '../../redux/filter/slice';
import s from './Catalog.module.css';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const limit = useSelector(selectLimit);
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectBrand);
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);


  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = cars.filter(car => car.make === selectedBrand);
      dispatch(setFilteredCars(filtered));
      dispatch(setTotal(filtered.length));
    } else {
      dispatch(setFilteredCars(cars));
    }
  }, [selectedBrand, cars, dispatch]);

  const handleFilter = brand => {
    dispatch(setSelectedBrand(brand));
  };


  return (
    <div className={s.wrapper}>
      <SearchBar onFilter={handleFilter} />
      {isLoading && <p className={s.loader}>Loading...</p>}
      <CarsList cars={filteredCars} />
      <LoadButton className={s.load_button}>
        Load more
      </LoadButton>
    </div>
  );
};

export default Catalog;
