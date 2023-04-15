import {createSlice} from "@reduxjs/toolkit";
import {ILoadingStatus} from "../../models/response/IUser";


const initialState:ILoadingStatus = {
    LoadingStatus:false,
    loadingStatus:{
        loginLoading: false,
        registrationLoading: false,
        LogOutLoading: false,
        checkAuthLoading: false,
        changeUsernameLoading: false,
        setAvatarServerLoading: false,
        SendLinkLoading: false,
        reloadReduxDataLoading: false,
        changeDescriptionLoading: false,
        changeNameLoading: false,
        changePasswordLoading: false,
    }
}

const loadingSlice = createSlice({
    name:'Loading',
    initialState,
    reducers:{
        setLoginLoading:(state, action) =>{state.loadingStatus.loginLoading = action.payload},
        setRegistrationLoading:(state, action) =>{state.loadingStatus.registrationLoading = action.payload},
        setLogOutLoading:(state, action) =>{state.loadingStatus.LogOutLoading = action.payload},
        setCheckAuthLoading:(state, action) =>{state.loadingStatus.checkAuthLoading = action.payload},
        setChangeUsernameLoading:(state, action) =>{state.loadingStatus.changeUsernameLoading = action.payload},
        setSetAvatarServerLoading:(state, action) =>{state.loadingStatus.setAvatarServerLoading = action.payload},
        setSendLinkLoading:(state, action) =>{state.loadingStatus.SendLinkLoading = action.payload},
        setReloadReduxDataLoading:(state, action) =>{state.loadingStatus.reloadReduxDataLoading = action.payload},
        setChangeDescriptionLoading:(state, action) =>{state.loadingStatus.changeDescriptionLoading = action.payload},
        setChangeNameLoading:(state, action) =>{state.loadingStatus.changeNameLoading = action.payload},
        setChangePasswordLoading:(state, action) =>{state.loadingStatus.changePasswordLoading = action.payload},
        setGlobalLoadingStatus:(state, action)=>{state.LoadingStatus=action.payload}
    }
})



export const LoadingReducer = loadingSlice.reducer
export const LoadingActions = loadingSlice.actions