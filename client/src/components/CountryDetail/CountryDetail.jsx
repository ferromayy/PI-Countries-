import { getCountryDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import React from "react";

const CountryDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);
  const country = useSelector((state) => state.detail);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h2>country Detail:</h2>
      </div>

      <div>
        {
          <div>
            <h2>{country[0]?.name}</h2>
            <img src={country[0]?.flag_image} alt="could not found the image" />
            <h4>{country[0]?.id}</h4>
            <h4>{country[0]?.capitalcity}</h4>
            <h4>Continent:{country[0]?.continent}</h4>
            <h4>Subregion:{country[0]?.subregion}</h4>
            <h4>Area:{country[0]?.area}</h4>
            <h4>Population:{country[0]?.population}</h4>
          </div>
        }
      </div>
    </div>
  );
};

export default CountryDetail;

// id: el.cca3,
// name: el.name.official,
// flag_image: el.flags.png,
// capitalCity: el.capital ? el.capital[0] : "capitalCity not found",
// continent: el.continents[0], //.map((e)=> {for(let i = 0; i < e.length; i = ++ ) return e[i]}),
// subregion: el.subregion,
// area: el.area,
// population: el.population,

// -  ID (Código de tres letras).
// -  Nombre.
// -  Imagen de la bandera.
// -  Continente.
// -  Capital.
// -  Subregión (si tiene).
// -  Área (si tiene).
// -  Población.
