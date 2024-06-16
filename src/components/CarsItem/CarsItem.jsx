import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import s from "./CarsItem.module.css";
import { toggleFavorite } from "../../redux/cars/slice";
import Modal from "../Modal/Modal";
import LoadButton from "../Button/LoadButton";
import { selectFavorites } from "../../redux/cars/selectors";

const CarsItem = ({ car }) => {
  const {
    address,
    functionalities,
    img,
    make,
    model,
    year,
    rentalCompany,
    rentalPrice,
    type,
    id,
  } = car;

  const dispatch = useDispatch();
  const [city, country] = address ? address.split(",") : ["Unknown", "Unknown"];
  const [functionality] = functionalities;
  const formatType = `${type.slice(0, 1).toUpperCase()}${type.slice(1).toLowerCase()}`;
  
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(favorite => favorite.id === id);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(car));
  };

  return (
    <>
      <div className={s.card} onClick={openModal}>
        <button className={s.icon} onClick={handleFavoriteClick}>
          {isFavorite ? <GrFavorite className={s.iconFavorite} /> : <MdOutlineFavorite />}
        </button>
        <div className={s.img_wrap}>
          <img
            src={img}
            className={!img ? s.default_img : undefined}
            alt={make}
          />
        </div>
        <div className={s.desc}>
          <div className={s.heading}>
            <p>
              {make}, {year}
            </p>
            <p>{rentalPrice}</p>
          </div>
          <div className={s.bottom}>
            <ul>
              <li>{city}</li>
              <li>{country}</li>
              <li>{rentalCompany}</li>
            </ul>
            <ul className={s.bot_info}>
              <li>{formatType}</li>
              <li>{model}</li>
              <li>{id}</li>
              <li>{functionality}</li>
            </ul>
          </div>
        </div>
        <LoadButton className={s.learnMore} onClick={openModal}>
          Learn more
        </LoadButton>
      </div>
      {isOpen && <Modal onClose={closeModal} car={car} />}
    </>
  );
};

export default CarsItem;