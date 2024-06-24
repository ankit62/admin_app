import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HomePageState {
  email: string;
  name: string;
}

const initialState: HomePageState = {
  email: '',
  name: '',
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setEmail, setName } = homePageSlice.actions;

export default homePageSlice.reducer;
