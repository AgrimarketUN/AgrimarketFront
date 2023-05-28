import { api } from "@/common";
import { UserInfo } from "@/models";
import { put } from "@/services"

const fetchUpdateUser = async (data: UserInfo) => {
  const response = await put(api.updateUser, data);
  return response;
};

export const updateUser = (data: UserInfo) => {
  const promise = fetchUpdateUser(data);
  promise.then((response) => {
    return response;
  });
};