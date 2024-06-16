import { useDispatch, useSelector } from "react-redux";
import s from "./CarsList.module.css";
import CarsItem from "../CarsItem/CarsItem";
import { selectLimit, selectPage, selectTotal } from "../../redux/cars/selectors";
import { fetchCarsThunk } from "../../redux/cars/operations";
import LoadButton from "../Button/LoadButton";

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const onLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page + 1, limit }));
  };

  return (
    <div className={s.listContainer}>
      <ul className={s.list}>
        {cars.map((car) => (
          <li key={car.id} className={s.item}>
            <CarsItem car={car} />
          </li>
        ))}
      </ul>
      {cars.length > 0 && cars.length < total && (
        <LoadButton className={s.loadMoreButton} onClick={onLoadMore}>
          Load more
        </LoadButton>
      )}
    </div>
  );
};

export default CarsList;
