import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: false,
  reducers: {
    menu: state => !state,
  },
  
},);

export const { menu } = menuSlice.actions;
export default menuSlice.reducer;