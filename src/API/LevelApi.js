import { api } from "./api";



const getListLevelAPI = () => {
  return api("GET", "level/", null);
};

// export
export { getListLevelAPI };
