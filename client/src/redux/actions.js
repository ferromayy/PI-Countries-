import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const getAllCountries = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
  };
};

// export function getAllCountries() {
//   return async function (dispatch) {
//     const res = await axios.get("http://localhost:3001/countries");
//     return dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
//   };
// }
