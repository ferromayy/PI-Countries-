import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllCountries,
  orderByName,
  orderByP,
  filterByContinents,
  filterByActivity,
  getAllActivities,
} from "../../redux/actions";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import style from "./Countries.module.css";
//import SearchBar from "../SearchBar/SearchBar";

const Countries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);

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

  const handleFilterP = (e) => {
    e.preventDefault();
    dispatch(orderByP(e.target.value));
    setCurrentPage(1);
    setOrden(`Order ${e.target.value}`);
  };

  const handleFilterC = (e) => {
    e.preventDefault(e);
    dispatch(filterByContinents(e.target.value));
  };
  const handleFilterAct = (e) => {
    e.preventDefault(e);
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
    setOrden(`Order ${e.target.value}`);
  };

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
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
        <Filters
          handleFilter={handleFilter}
          handleFilterP={handleFilterP}
          handleFilterC={handleFilterC}
        />
        <div>
          <button className={style.botonsito}>
            {allActivities.length === 0 ? (
              <p>no activities to show</p>
            ) : (
              <select onChange={(e) => handleFilterAct(e)}>
                {allActivities.map((e) => (
                  <>
                    <option value="none">none</option>
                    <option value={e.name} key={e.id}>
                      {e.name}
                    </option>
                  </>
                ))}
              </select>
            )}
          </button>
        </div>
      </div>

      <div>
        <button
          className={style.botonAll}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {" "}
          Charge all countries
        </button>
      </div>

      {currentCountries &&
        currentCountries?.map((country) => {
          return (
            <CountryCard
              img={country.flag_image}
              name={country.name}
              continent={country.continent}
              id={country.id}
            />
          );
        })}
    </div>
  );
};
export default Countries;
