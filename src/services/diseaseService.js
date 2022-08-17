import axios from "axios";

const BASE_URL = "https://disease.sh";

const getAll = () => {
  const request = axios.get(`${BASE_URL}/v3/covid-19/all`)
  return request.then(response => response.data)
};

export default { getAll };
