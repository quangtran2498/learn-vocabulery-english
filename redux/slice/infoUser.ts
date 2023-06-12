import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  name: string;
  age:string
}

const initialState: SearchState = {
  name: "quang",
  age:"25"
};

const userInfo = createSlice({
  name: "search",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userInfo.actions;
export default userInfo.reducer;