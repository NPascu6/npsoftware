import {createSlice} from "@reduxjs/toolkit";

export interface MainState {
    firebaseUser: any
}

const initialState: MainState = {
    firebaseUser: null
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setFirebaseUser(state, action) {
            state.firebaseUser = action.payload
        }
    },
});

export const {setFirebaseUser} = appSlice.actions;

export default appSlice.reducer;
