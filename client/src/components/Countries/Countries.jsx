import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCountries } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";

const Countries = () => {
  const dispatch = useDispatch();
  const AllCountries = useSelector((state) => state.pepitoCountry);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar todos los personajes
      </button>
      {AllCountries &&
        AllCountries?.map((country) => {
          return (
            <CountryCard
              img={country.flag_image}
              name={country.name}
              continent={country.continent}
            />
          );
        })}
    </div>
  );
};
export default Countries;
