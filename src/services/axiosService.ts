import { api } from "@/common";
import axios from "axios";

export const post = async (url: string, data: any) => {
  const response = await axios.post(`${api.baseUrl}${url}`, data);
  return response.data;
}

export const put = async (url: string, data: any) => {
  const response = await axios.put(`${api.baseUrl}${url}`, data);
  return response.data;
}

export const get = async (url: string) => {
  const response = await axios.get(`${api.baseUrl}${url}`);
  return response.data;
}

export const deleteReq = async (url: string) => {
  const response = await axios.delete(`${api.baseUrl}${url}`);
  return response.data;
}