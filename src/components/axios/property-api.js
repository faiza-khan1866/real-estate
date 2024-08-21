import { axiosGet } from "./config";

export async function getPropertyList() {
  try {
    const data = await axiosGet("properties");
    if (data?.status === 200) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return error?.response?.data;
  }
}

export async function getBuildingData(slug) {
  try {
    const data = await axiosGet(`properties/${slug}`);
    if (data?.status === 200) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return error?.response?.data;
  }
}
