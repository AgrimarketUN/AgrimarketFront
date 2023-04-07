import { baseurl } from "@/common";
import { UserCredentials, UserCreate } from "@/models";
import axios from "axios";

export function post(url: string, data: UserCredentials | UserCreate) {
  return axios.post(`${baseurl}${url}`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export default post;
