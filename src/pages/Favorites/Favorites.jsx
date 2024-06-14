import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cars/selectors";
import CarsItem from "../../components/CarsItem/CarsItem";
import s from "./Favorites.module.css";

const Favorites = () => {
  const favoritesCars = useSelector(selectFavorites);
  return (
    <div className={s.container}>
      {!!favoritesCars.length && (
        <ul className={s.list}>
          {favoritesCars.map((item) => {
            return <CarsItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Favorites;