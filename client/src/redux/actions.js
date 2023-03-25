import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_COUNTRIES_P = "ORDER_COUNTRIES_P";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";

export const getAllCountries = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByP = (payload) => {
  return {
    type: ORDER_COUNTRIES_P,
    payload,
  };
};
export const filterByContinents = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

//payload es name (podria haber sido name en vez de payload)
export const searchCountry = (payload) => {
  return async (dispatch) => {
    const json = await axios.get(
      "http://localhost:3001/countries?name=" + payload
    );
    return dispatch({ type: SEARCH_BY_NAME, payload: json.data });
  };
};
