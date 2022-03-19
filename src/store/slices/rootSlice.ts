import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./appSlice";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const appPersistConfig: any = {
    key: 'app',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const rootSlice = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
});

export type RootState = ReturnType<typeof rootSlice>;

export default rootSlice;
