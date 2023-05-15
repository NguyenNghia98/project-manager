import { api } from "./api";


const getListDistricAPI = () => {
  return api("GET", "districs/", null);
};

// export
export { getListDistricAPI };


