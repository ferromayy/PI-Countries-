/* eslint-disable default-case */
import { GET_ALL_COUNTRIES } from "./actions";
import { ORDER_BY_NAME } from "./actions";
import { ORDER_COUNTRIES_P } from "./actions";
import { SEARCH_BY_NAME } from "./actions";
import { FILTER_BY_CONTINENT } from "./actions";

let initialState = {
  allCountries: [],
  countries: [],
  countryDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continent === action.payload);
      return {
        ...state,
        countries: continentFiltered,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case ORDER_BY_NAME:
      let filterOrder =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: filterOrder,
      };
    case ORDER_COUNTRIES_P:
      let filterOrderPp =
        action.payload === "smallerPp"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: filterOrderPp,
      };

    default:
      return { ...state };
  }
};
export default reducer;
