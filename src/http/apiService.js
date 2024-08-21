import { useQuery } from "react-query";
import axios from "axios";
// import { setupCache } from "axios-cache-interceptor";

// const axios = setupCache(Axios);

const api = axios.create({
  // baseURL: "https://makeen.ae/APIs/public/api",
  baseURL: "https://lovettonazareth.com/APIs/public/api",
});

export const fetchPagesData = (page) => {
  return api.get(`/pages/${page}`);
};

export const useFetchPagesData = (queryCache) => {
  return useQuery("pageData", () => fetchPagesData(), {
    cache: queryCache,
    keepPreviousData: true,
    staleTime: 3000000,
    cacheTime: 3000000,
  });
};

// Add more API calls as needed
