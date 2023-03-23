import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const getAllCountries = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
  };
};

// ver si el endpoint es correcto o le falta la / al final
//
