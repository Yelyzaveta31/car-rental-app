import { useEffect } from "react";
import s from "./Modal.module.css";
import clsx from "clsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CarDetails from "../CarDetails/CarDetails";

const Modal = ({ onClose, className, car }) => {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={clsx(s.content, className)}>
        <button className={s.closeBtn} onClick={onClose}>
          <IoMdCloseCircleOutline width={24} height={24} />
        </button>
        <CarDetails car={car} onClose={onClose}/>
      </div>
    </div>
  );
};

export default Modal;