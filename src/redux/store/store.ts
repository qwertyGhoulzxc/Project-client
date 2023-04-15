import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {UserInfoReducer} from "../reducers/user-slice";
import {LoadingReducer} from '../reducers/Loading-slice'
import {AlertReducers} from "../reducers/Alert-slice";

const rootReducer = combineReducers({
   UserInfoReducer,
   LoadingReducer,
   AlertReducers,
})


export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   })}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
