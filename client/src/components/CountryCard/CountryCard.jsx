import { Link } from "react-router-dom";
import style from "./CountryCard.module.css";

const CountryCard = ({ img, name, continent, id }) => {
  return (
    <div className={style.cardContainer}>
      <Link to={`/countries/${id}`}>
        <button className={style.boton}>More</button>
      </Link>
      <h3>{name}</h3>
      <h4>{continent}</h4>
      <div>
        <img className={style.imageContainer} src={img} alt="not received" />
      </div>
    </div>
  );
};

export default CountryCard;
