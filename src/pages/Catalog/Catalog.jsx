import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";
import { selectCars, selectFilteredCars, selectIsLoading, selectLimit, selectSelectedBrand, } from "../../redux/cars/selectors";
import { setFilteredCars, setTotal } from "../../redux/cars/slice";
import CarsList from "../../components/CarsList/CarsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./Catalog.module.css";

const Catalog = () => {
  const cars = useSelector(selectCars);
  const limit = useSelector(selectLimit);
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectSelectedBrand);
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = cars.filter((car) => car.make === selectedBrand);
      dispatch(setFilteredCars(filtered));
      dispatch(setTotal(filtered.length));
    } else {
      dispatch(setFilteredCars(cars));
    }
  }, [selectedBrand, cars, dispatch]);

  const handleFilter = (brand) => {
    dispatch(selectSelectedBrand(brand));
  };

  return (
    <div className={s.container}>
      <SearchBar onFilter={handleFilter} />
      {isLoading && <p className={s.loader}>Loading...</p>}
      <CarsList cars={filteredCars} />
    </div>
  );
};

export default Catalog;

