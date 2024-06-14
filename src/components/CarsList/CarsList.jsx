import { useDispatch, useSelector } from "react-redux";
import s from "./CarsList.module.css";
import CarsItem from "../CarsItem/CarsItem";
import Button from "../Button/Button";
import { selectLimit, selectPage, selectTotal } from "../../redux/cars/selectors";
import { fetchCarsThunk } from "../../redux/cars/operations";

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const limit = useSelector(selectLimit);

  const onLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page + 1, limit }));
  };
  
  return (
    <div className={s.listContainer}>
      <ul className={s.list}>
        {cars.map(car => {
          return (
          <li key={car.id} className={s.item}>
            <CarsItem car={car} />
          </li>
          );
})}
      </ul>
      {cars.length > 0 && cars.length < total && (
        <Button className={s.loadMoreButton} onClick={onLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default CarsList;
