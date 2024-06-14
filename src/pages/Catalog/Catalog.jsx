import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList"
import s from "./Catalog.module.css"
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/cars/operations";
import SearchBar from "../../components/SearchBar/SearchBar";
import { selectBrands, selectCars, selectFilteredCars, selectIsLoading, selectQuery } from "../../redux/cars/selectors";
import { setFilteredCars, setTotal } from "../../redux/cars/slice";
import { setSelectedBrand } from "../../redux/filter/slice";

const Catalog = () => {
  const cars = useSelector(selectCars);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  const selectedBrand = useSelector(selectBrands);
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCarsThunk({ query }));
  }, [dispatch, query]);

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
    <div className={s.container}>
      <SearchBar onFilter={handleFilter} />
      {isLoading && <p className={s.loader}>Loading...</p>}
      <CarsList items={filteredCars}/>
    </div>
  )
}

export default Catalog;
