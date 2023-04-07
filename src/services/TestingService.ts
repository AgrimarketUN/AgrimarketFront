import axios from "axios";

const TestingService = () => {
  return axios.get("https://rickandmortyapi.com/api/character/2")
};

export default TestingService;