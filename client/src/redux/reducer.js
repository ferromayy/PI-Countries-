/* eslint-disable default-case */
import { GET_ALL_COUNTRIES } from "./actions";

let initialState = {
  pepitoCountry: [],
  countryDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        pepitoCountry: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
