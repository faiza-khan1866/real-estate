import {
  UPDATE_FILTER,
  ADD_PROPERTY_LIST,
  ADD_BUILDING_SPECTRUM,
} from './action-types';

export const updatePropertyFilter = (payload) => {
  return { type: UPDATE_FILTER, payload };
};

export const updateAvailablePropertyList = (payload) => {
  return { type: ADD_PROPERTY_LIST, payload };
};

export const updateSpecificBuildingData = (payload) => {
  return { type: ADD_BUILDING_SPECTRUM, payload };
};
