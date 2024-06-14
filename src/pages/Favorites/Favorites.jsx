import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cars/selectors";
import CarsItem from "../../components/CarsItem/CarsItem";
import s from "./Favorites.module.css";

const Favorites = () => {
  const favoritesCars = useSelector(selectFavorites);
  
  return (
    <div className={s.container}>
      {favoritesCars.length > 0 ? (
        <ul className={s.list}>
          {favoritesCars.map(car => (
            <li key={car.id} className={s.item}>
              <CarsItem car={car} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.emptyMessage}>No favorites selected.</p>
      )}
    </div>
  );
};

export default Favorites;
