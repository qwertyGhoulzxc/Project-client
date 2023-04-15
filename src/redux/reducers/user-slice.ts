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
    ChangeUsername:{
        status:202,
        message:''
    },
    ChangeName:{
        status:202,
        message:''
    },
    ChangeDescription:{
        status:202,
        message:''
    },
    ChangeProfile:{
        img:false
    },
    lastErrorName:''

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
        setErrorStatusChangeUsername:(state, action)=>{state.ChangeUsername.status=action.payload.status;state.ChangeUsername.message=action.payload.message},
        setErrorStatusChangeName:(state, action)=>{state.ChangeName.status=action.payload.status;state.ChangeName.message=action.payload.message},
        setErrorStatusChangeDescription:(state, action)=>{state.ChangeDescription.status=action.payload.status;state.ChangeDescription.message=action.payload.message},
        setChangeProfileAvatar:(state, action)=>{state.ChangeProfile.img = action.payload},
        setLastErrorChangeUsername:(state, action)=>{state.lastErrorName=action.payload}


    }
})

export const UserInfoReducer = userInfo.reducer
export const UserInfoActions = userInfo.actions