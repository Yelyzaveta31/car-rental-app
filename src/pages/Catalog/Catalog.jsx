import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList"
import s from "./Catalog.module.css"
import { selectCars, selectIsLoading, selectLimit, selectPage, selectQuery, selectTotalPage } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";

const Catalog = () => {
  const cars = useSelector(selectCars);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarsThunk({ query }));
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = cars.filter(car => car.make === selectedBrand);
      dispatch(setFilteredCars(filtered));
      dispatch(selectTotalPage(filtered.length));
    } else {
      dispatch(setFilteredCars(cars));
    }
  }, [selectedBrand, cars, dispatch]);

  const handleFilter = brand => {
    dispatch(setSelectedBrand(brand));
  };

  return (
    <div className={s.container}>
    <Filtration onFilter={handleFilter} />
    {isLoading && <p className={s.loader}>Loading...</p>}
    <CarsList cars={filteredCars} />
  </div>
  )
}

export default Catalog
