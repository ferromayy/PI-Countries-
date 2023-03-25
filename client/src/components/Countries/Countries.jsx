import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries, orderByName, orderByP } from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";

const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const [orden, setOrden] = useState("");
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  console.log(orderByName);

  const pag = (number) => {
    setCurrentPage(number);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`order ${e.target.value}`);
  };

  function handleFilterP(e) {
    e.preventDefault();
    dispatch(orderByP(e.target.value));
    setCurrentPage(1);
    setOrden(`Order ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  return (
    <div>
      <div>
        <Pagination
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          pag={pag}
        />
      </div>
      <div>
        <Filters handleFilter={handleFilter} handleFilterP={handleFilterP} />
      </div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {" "}
        Volver a cargar todos los personajes
      </button>

      {currentCountries &&
        currentCountries?.map((country) => {
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
