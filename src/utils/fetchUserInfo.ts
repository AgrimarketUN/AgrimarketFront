import { api } from "@/common";
import { UserInfo } from "@/models";
import { setUser } from "@/redux/states/userState";
import { get } from "@/services";
import { Dispatch } from "@reduxjs/toolkit";

export const fetchUserInfo = (dispatch: Dispatch) => {
  const response = async () => {
    const data = await get(api.getUser);
    return data.user as UserInfo;
  };

  response()
    .then((user) => {
      dispatch(setUser(user));
    })
    .catch((e) => {
      console.error(e);
    });
};
