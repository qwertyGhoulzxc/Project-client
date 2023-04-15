import AuthService from "../../services/AuthService";
import {useAppDispatch} from "../../hooks/redux";
import {UserInfoActions} from "./user-slice";
import {IUser} from "../../models/response/IUser";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {useNavigate} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {AuthResponse, ChangePass, SetAvatarR} from "../../models/response/AuthResponse";
import $api, {API_URL} from "../../http";
import Cookies from 'js-cookie'
import {LoadingActions} from "./Loading-slice";
import App from "../../App";

const {setUserData,setAuth,setErrorStatusLogin,setErrorStatusRegistr,setErrorStatusChangePass,setErrorStatusSendLink,setErrorStatusChangeDescription,setErrorStatusChangeName,setErrorStatusChangeUsername} = UserInfoActions

const {setChangePasswordLoading,setChangeUsernameLoading,setChangeNameLoading,setChangeDescriptionLoading,setReloadReduxDataLoading,setSetAvatarServerLoading,setCheckAuthLoading,setRegistrationLoading,setLogOutLoading,setSendLinkLoading,setLoginLoading} = LoadingActions

export const login =(username:string,password:string,email:string)=> async(dispatch:AppDispatch)=>{
    try {
        dispatch(setLoginLoading(true))
        const response = await AuthService.login(username,password,email)
        dispatch(setLoginLoading(false))
        // console.log(response)
        localStorage.setItem('token',response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusLogin({
            status:200,
            message:''
        }))
        Cookies.set('id', response.data.user.id, { expires: 365*5 });

    }catch (e:any) {
        dispatch(setErrorStatusLogin({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setLoginLoading(false))
    }

}

export const registration = (username:string,password:string,email:string)=>async(dispatch:AppDispatch)=> {
    try {
        dispatch(setRegistrationLoading(true))
        const response = await AuthService.registration( email, password,username)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusRegistr({
            status:200,
            message:''
        }))
        Cookies.set('id', response.data.user.id, { expires: 365*5 });
        dispatch(setRegistrationLoading(false))
    } catch (e: any) {
        dispatch(setErrorStatusRegistr({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setRegistrationLoading(false))
    }
}

    export const logout = ()=>async(dispatch:AppDispatch)=>{
        try {
            dispatch(setLogOutLoading(true))
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(setAuth(false))
            dispatch(setUserData({} as IUser))
            Cookies.remove('id');
            dispatch(setLogOutLoading(false))
        }catch (e:any) {
            console.log(e.response?.data?.message)//!!!!!
            dispatch(setLogOutLoading(false))
        }

}

export const checkAuth = ()=>async(dispatch:AppDispatch)=>{
            try {
                dispatch(setCheckAuthLoading(true))
                const response = await axios.get<AuthResponse>(`${API_URL}refresh`,{withCredentials:true})

                localStorage.setItem('token', response.data.accessToken)
                dispatch(setAuth(true))

                const id = Cookies.get('id');
                Cookies.set('id', String(id), { expires: 365*5 });
                dispatch(setCheckAuthLoading(false))
            }catch (e:any) {
                console.log(e.response?.data?.message)
                dispatch(setCheckAuthLoading(false))
            }
}
export const changeUsernameI = (id:any,newUsername:string)=>async(dispatch:AppDispatch)=>{
    try {
        dispatch(setChangeUsernameLoading(true))
        const response = await AuthService.changeUsername(id,newUsername)
        Cookies.set('id', String(response.data.id), { expires: 365*5 });
        dispatch(setErrorStatusChangeUsername({
            status:response.status,
            message:''
        }))
        dispatch(setUserData(response.data))
        dispatch(setChangeUsernameLoading(false))
    }catch (e:any) {
        console.log(e.response)
        dispatch(setErrorStatusChangeUsername({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setChangeUsernameLoading(false))
    }
}
export const changeDescriptionI = (id:any,newDescription:string)=>async(dispatch:AppDispatch)=>{
    try {
        dispatch(setChangeDescriptionLoading(true))
        const response = await AuthService.changeDescription(id,newDescription)
        dispatch(setErrorStatusChangeDescription({
            status:200,
            message:''
        }))
        dispatch(setUserData(response.data))
        dispatch(setChangeDescriptionLoading(false))
    }catch (e:any) {
        dispatch(setErrorStatusChangeDescription({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setChangeDescriptionLoading(false))
    }
}
export const changeNameI = (id:any,newName:string)=>async(dispatch:AppDispatch)=>{
    try {
        dispatch(setChangeNameLoading(true))
        const response = await AuthService.changeName(id,newName)
        dispatch(setErrorStatusChangeName({
            status:200,
            message:''
        }))
        dispatch(setUserData(response.data))
        dispatch(setChangeNameLoading(false))
    }catch (e:any) {
        dispatch(setErrorStatusChangeName({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setChangeNameLoading(false))
    }
}



export const setAvatarServer=(data:any)=>async(dispatch:AppDispatch)=>{
    try {
        dispatch(setSetAvatarServerLoading(true))
    const response =await axios.post(`${API_URL}setAvatar`,data,{
        headers:{
            'content-type':'mulpipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials:true,
    })
       const userResponse= await axios.post(`${API_URL}setavatarDB`,{id:Cookies.get('id'),avatarImg:response.data},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials:true,
        })
        dispatch(setUserData(userResponse.data))

        dispatch(setSetAvatarServerLoading(false))


    }catch (e) {
        //!!!!!!
        dispatch(setSetAvatarServerLoading(false))

    }
}


export const changePassword =(changePassword:string,newPass:string)=>async (dispatch:AppDispatch)=>{
    try {
        dispatch(setChangePasswordLoading(true))
        const response = await AuthService.ChangePass(changePassword,newPass)
        dispatch(setErrorStatusChangePass({
            status:200,
            message:''
        }))
        dispatch(setChangePasswordLoading(false))
    }catch (e:any) {

        dispatch(setErrorStatusChangePass({
            status:e.response.status,
            message:e.response?.data?.message
        }))
        dispatch(setChangePasswordLoading(false))
    }
}

export const SendLink =(email:string,username:string)=>async (dispatch:AppDispatch)=>{
    try {
        dispatch(setSendLinkLoading(true))
        const response = await AuthService.SendLink(email,username)
        dispatch(setErrorStatusSendLink({
            status:200,
            message:''
        }))
        dispatch(setSendLinkLoading(false))
    }catch (e:any) {
        dispatch(setErrorStatusSendLink({
            status:e.response.status,
            message:e.response?.data?.message
        }))
        dispatch(setSendLinkLoading(false))
    }
}


export const reloadReduxData = (id:any) =>async (dispatch:AppDispatch)=>{
    try {
        dispatch(setReloadReduxDataLoading(true))
        const response = await AuthService.reloadReduxData(id)
        dispatch(setAuth(true))
          dispatch(setUserData(response.data))
        Cookies.set('id', id, { expires: 365*5 });
        dispatch(setReloadReduxDataLoading(false))
    }catch (e:any) {
        dispatch(setErrorStatusLogin({
            status:e.response.status,
            message:e.response.data.message
        }))
        dispatch(setReloadReduxDataLoading(false))
    }
}