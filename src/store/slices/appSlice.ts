import { createSlice } from "@reduxjs/toolkit";

export interface MainState {
}

const initialState: MainState = {
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
    },
});

export const {
} = appSlice.actions;

export default appSlice.reducer;
