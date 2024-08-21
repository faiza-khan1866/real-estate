import {
  UPDATE_FILTER,
  ADD_PROPERTY_LIST,
  ADD_BUILDING_SPECTRUM,
} from "../actions/action-types";

const initialState = {
  filter: {
    property_purpose: "Rent",
    category_type: "Residential",
    Property_type: "",
    bedRooms: "",
    bathRooms: "",
    location_state: "",
    location_area: "",
    propertyPrice: {
      from: "",
      to: "",
    },
    propertySize: {
      from: "",
      to: "",
    },
    propertyPriceMin: "",
    propertyPriceMax: "",
    propertySizeMin: "",
    propertySizeMax: "",
  },
  availablePropertyList: [],
  specificBuildingData: {},
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      const { filter } = state;
      const newFilter = { ...filter, ...action.payload };
      return { ...state, filter: newFilter };
    case ADD_PROPERTY_LIST:
      return { ...state, availablePropertyList: action.payload };
    case ADD_BUILDING_SPECTRUM:
      return { ...state, specificBuildingData: action.payload };
    default:
      return state;
  }
};

export default propertyReducer;
