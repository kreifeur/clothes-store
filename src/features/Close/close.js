import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'close',
  initialState: false,
  reducers: {
    close: state => !state,
  },
  
},);

export const { close } = counterSlice.actions;
export default counterSlice.reducer;