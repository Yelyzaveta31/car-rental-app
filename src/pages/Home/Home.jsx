import { Link } from "react-router-dom";
import s from "./Home.module.css";
const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}> Car Rental App</h1>
      <p className={s.text}>Rental the car of your dreams!</p>
      <Link to="/catalog">
      <button type="button" className={s.button}>
        Find a car
      </button>
      </Link>
    </div>
  );
};

export default Home;