import s from "./CatDetails.module.css"

const CarDetails = ({car}) => {
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

        const [ city, country] = address.split(",");
        const conditions = rentalConditions.split('\n');
        const formattedMileage = mileage.toLocaleString();
        const ageNumber = age.split(' ');
  return (
    <div>
        <div className={s.card}>
        <img className={s.img} src={img} alt={make} />
        <div className={s.content}>
          <div className={s.block}>
            <p className={s.title}>
              {make} <span className={s.span}>{model}</span>, {year}
            </p>

            <div>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}>{city}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>{country}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Id: {id}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Year: {year}</p>
                </li>
                <li className={s.item}>
                  <p className={s.feature}>Type: {type}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li className={s.item}>
                  <p className={s.feature}>
                    Fuel Consumption: {fuelConsumption}
                  </p>
                </li>

                <li className={s.item}>
                  <p className={s.feature}>Engine Size: {engineSize}</p>
                </li>
              </ul>
            </div>
            <h4 className={s.description}>{description}</h4>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Accessories and functionalities</h4>
            <div className={s.listWrapper}>
              <ul className={s.list}>
              {accessories.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
              </ul>
              <ul className={s.list}>
              {functionalities.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
              </ul>
            </div>
          </div>
          <div className={s.block}>
            <h4 className={s.heading}>Rental Conditions</h4>
            <div className={s.listWrapper}>
              <ul className={s.list}>
                <li className={s.condition}>
                  <p className={s.name}>
                    Minimum age: <span className={s.span}>{ageNumber[2]}</span>
                  </p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>{conditions[1]}</p>
                </li>
              </ul>
              <ul className={s.list}>
                <li className={s.condition}>
                  <p className={s.name}>{conditions[2]}</p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>
                    Mileage: <span className={s.span}>{formattedMileage}</span>
                  </p>
                </li>
                <li className={s.condition}>
                  <p className={s.name}>
                    Price: <span className={s.span}>{rentalPrice}</span>
                  </p>
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
    </div>
  )
}

export default CarDetails
