import { api } from "@/common";
import axios from "axios";

export const post = async (url: string, data: any) => {
  const response = await axios.post(`${api.baseurl}${url}`, data);
  return response.data;
}

export const put = async (url: string, data: any) => {
  const response = await axios.put(`${api.baseurl}${url}`, data);
  return response.data;
}

export const get = async (url: string) => {
  const response = await axios.get(`${api.baseurl}${url}`);
  return response.data;
}

agriamarket.elb.aws.com