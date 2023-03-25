import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_COUNTRIES_P = "ORDER_COUNTRIES_P";

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
console.log(orderByName);
// export function getAllCountries() {
//   return async function (dispatch) {
//     const res = await axios.get("http://localhost:3001/countries");
//     return dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
//   };
// }
