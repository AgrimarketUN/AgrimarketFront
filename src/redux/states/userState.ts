import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "@/models";

export const EmptyUserState: UserInfo = {} as UserInfo;

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => EmptyUserState,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
