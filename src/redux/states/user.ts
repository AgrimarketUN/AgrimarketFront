import {createSlice} from '@reduxjs/toolkit';
import {UserInfo} from '@/models';

export const EmptyUserState: UserInfo = {
  token: '',
  name: '',
  lastName: '',
  email: '',
  phone: 0,
  seller: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    setUser: (state, action) => action.payload,
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;