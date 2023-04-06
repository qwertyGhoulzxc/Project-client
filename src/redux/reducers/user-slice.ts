import {createSlice} from "@reduxjs/toolkit";
import {UserSliceInterface} from "../../models/redux-types/User-sliceInterface";
import {IError} from "../../models/response/IUser";

const initialState:UserSliceInterface = {
    user:{
        email:'',
        username:'',
        id:'',
        isActivated:false,
        avatarImg:'',
        description:'',
        name:''
    },
    isAuth:false,
    LoginError:{
        status:200,
        message:''
    },
    RegistrError:{
        status:200,
        message:''
    },
    ChangePassError:{
        status:202,
        message:''
    },
    SendLinkError:{
        status:202,
        message:''
    },

}

const userInfo = createSlice({
    name:'userParams',
initialState,
    reducers:{
        setUserData:(state, action)=>{state.user = action.payload},
        setAuth:(state, action)=>{state.isAuth=action.payload},
        setErrorStatusLogin:(state, action)=>{state.LoginError.status=action.payload.status;state.LoginError.message=action.payload.message},
        setErrorStatusRegistr:(state, action)=>{state.RegistrError.status=action.payload.status;state.RegistrError.message=action.payload.message},
        setErrorStatusChangePass:(state, action)=>{state.ChangePassError.status=action.payload.status;state.ChangePassError.message=action.payload.message},
        setErrorStatusSendLink:(state, action)=>{state.SendLinkError.status=action.payload.status;state.SendLinkError.message=action.payload.message},
    }
})

export const UserInfoReducer = userInfo.reducer
export const UserInfoActions = userInfo.actions