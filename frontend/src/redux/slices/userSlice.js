import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { preferences: {} },
  reducers: {
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const { setPreferences } = userSlice.actions;
export default userSlice.reducer;