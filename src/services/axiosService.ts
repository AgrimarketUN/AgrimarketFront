import { api } from "@/common";
import { UserCredentials, UserCreate } from "@/models";
import axios from "axios";

export const post = async (url: string, data: UserCredentials | UserCreate) => {
  const response = await axios.post(`${api.baseurl}${url}`, data);
  return response.data;
}

export const get = async (url: string) => {
  const response = await axios.get(`${api.baseurl}${url}`);
  return response.data;
}
