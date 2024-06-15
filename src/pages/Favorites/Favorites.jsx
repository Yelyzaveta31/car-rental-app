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
          {favoritesCars.map((car) => {
return <CarsItem car={car} key={car.id} />
})}
        </ul>
      ) : (
        <p className={s.message}>No favorites selected.</p>
      )}
    </div>
  );
};

export default Favorites;
