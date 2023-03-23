/* eslint-disable default-case */
import { GET_ALL_COUNTRIES } from "./actions";

let initialState = {
  countries: [],
  countryDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
  }
};

export default reducer;
