import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import s from "./CarsItem.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { toggleFavorite } from "../../redux/cars/slice";
import { selectFavorites } from "../../redux/cars/selectors";

const CarsItem = ({ car }) => {

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const dispatch = useDispatch();
  const [city, country] = address.split(",");
  const [functionality] = functionalities;
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };



  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(car));
  };

  return (
    <div className={s.item}>
      <img className={s.img} src={img} alt={make} />
      <button className={s.icon} onClick={handleFavoriteClick}>
        {isFavorite ? <GrFavorite className={s.iconFavorite} /> : <MdOutlineFavorite />}
      </button>
      <div className={s.content}>
        <div className={s.model}>
          <p className={s.title}>
            {make}, {year}
          </p>
          <p className={s.title}>{rentalPrice}</p>
        </div>
        <div className={s.bottom}>
          <ul>
            <li>{city}</li>
            <li>{country}</li>
            <li>{rentalCompany}</li>

          </ul>
          <ul className={s.bot_info}>
            <li>{model}</li>
            <li>{type}</li>
            <li>{id}</li>
            <li>{functionality}</li>
          </ul>
        </div>
        <Button className={s.learnMore} onClick={openModal}>
          Learn more
        </Button>
      </div>
      {isOpen && <Modal onClose={closeModal} car={car} />}
    </div>
  );
};

export default CarsItem;
