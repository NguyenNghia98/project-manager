import { api } from "./api";


const getListGenderAPI = () => {
  return api("GET", "gender/", null);
};

// export
export { getListGenderAPI };


