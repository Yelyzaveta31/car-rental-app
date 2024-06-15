import s from "./CarDetails.module.css";

const CarDetails = ({ car, onClose}) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
    age,
  } = car;

  const [city, country] = address.split(",");
  const conditions = rentalConditions.split("\n");
  const formattedMileage = mileage.toLocaleString();
  const ageNumber = age.split(" ");

  return (
    <div className={s.modal}>
      <div className={s.card}>
        <img className={s.img} src={img} alt={make} />
        <div className={s.content}>
          <div className={s.block}>
            <p className={s.title}>
              {make} <span className={s.span}>{model}</span>, {year}
            </p>
            <div>
              <ul className={s.list}>
                <li>
                  <p>{city}</p>
                </li>
                <li>
                  <p>{country}</p>
                </li>
                <li>
                  <p>Id: {id}</p>
                </li>
                <li>
                  <p>Year: {year}</p>
                </li>
                <li>
                  <p>Type: {type}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li>
                  <p>Fuel Consumption: {fuelConsumption}</p>
                </li>
                <li>
                  <p>Engine Size: {engineSize}</p>
                </li>
              </ul>
            </div>
            <h4 className={s.description}>{description}</h4>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Accessories and functionality</h4>
            <div className={s.listWrapper}>
              <ul className={s.list}>
                {accessories.map((car, idx) => (
                  <li key={idx}>{car}</li>
                ))}
              </ul>
              <ul className={s.list}>
                {functionalities.map((car, idx) => (
                  <li key={idx}>{car}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Rental conditions</h4>
            <div className={s.listWrapper}>
              <ul className={s.list}>
                <li>
                  <p>Minimum age:<span className={s.span}>{ageNumber[2]}</span></p>
                </li>
                <li>
                  <p>{conditions[1]}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li>
                  <p>{conditions[2]}</p>
                </li>
                <li>
                  <p> mileage <span className={s.span}>{formattedMileage}</span></p>
                </li>
                <li>
                  <p>Price: <span className={s.span}>{rentalPrice}</span></p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a className={s.rent} href="tel:+380730000000">
            Rental car
            </a>
          </div>
        </div>
      </div>
      <button className={s.closeButton} onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default CarDetails;
