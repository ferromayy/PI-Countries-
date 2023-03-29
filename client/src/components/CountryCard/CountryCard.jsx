import { Link } from "react-router-dom";

const CountryCard = ({ img, name, continent, id }) => {
  return (
    <div>
      <Link to={`/countries/${id}`}>
        <button>Ver Más</button>
      </Link>
      <h3>{name}</h3>
      <h4>{continent}</h4>
      <img src={img} alt="not received" />
    </div>
  );
};

export default CountryCard;
