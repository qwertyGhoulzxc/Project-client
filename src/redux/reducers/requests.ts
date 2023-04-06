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

const {setUserData,setAuth,setErrorStatusLogin,setErrorStatusRegistr,setErrorStatusChangePass,setErrorStatusSendLink} = UserInfoActions

export const login =(username:string,password:string,email:string)=> async(dispatch:AppDispatch)=>{
    try {
        const response = await AuthService.login(username,password,email)
        // console.log(response)
        localStorage.setItem('token',response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusLogin({
            status:200,
            message:''
        }))
        Cookies.set('username', response.data.user.username, { expires: 365*5 });
    }catch (e:any) {
        dispatch(setErrorStatusLogin({
            status:e.response.status,
            message:e.response.data.message
        }))
    }

}

export const registration = (username:string,password:string,email:string)=>async(dispatch:AppDispatch)=> {
    try {
        const response = await AuthService.registration( email, password,username)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusRegistr({
            status:200,
            message:''
        }))
        Cookies.set('username', username, { expires: 365*5 });
    } catch (e: any) {
        dispatch(setErrorStatusRegistr({
            status:e.response.status,
            message:e.response.data.message
        }))
    }
}

    export const logout = ()=>async(dispatch:AppDispatch)=>{
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            dispatch(setAuth(false))
            dispatch(setUserData({} as IUser))
            Cookies.remove('username');
        }catch (e:any) {
            console.log(e.response?.data?.message)
        }

}

export const checkAuth = ()=>async(dispatch:AppDispatch)=>{
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}refresh`,{withCredentials:true})

                localStorage.setItem('token', response.data.accessToken)
                dispatch(setAuth(true))

                const username = Cookies.get('username');
                Cookies.set('username', String(username), { expires: 365*5 });
            }catch (e:any) {
                console.log(e.response?.data?.message)
            }
}
export const changeUsername = (username:string,newUsername:string)=>async(dispatch:AppDispatch)=>{
    try {
        const response = await AuthService.changeUsername(username,newUsername)
        console.log(response.data)
        localStorage.setItem('token', response.data.accessToken)
        Cookies.set('username', String(response.data.user.username), { expires: 365*5 });
    }catch (e:any) {
        console.log(e.response?.data)
    }
}


export const setAvatarServer=(data:any)=>async(dispatch:AppDispatch)=>{
    try {
    const response =await axios.post(`${API_URL}setAvatar`,data,{
        headers:{
            'content-type':'mulpipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials:true,
    })
       const userResponse= await axios.post(`${API_URL}setavatarDB`,{username:Cookies.get('username'),avatarImg:response.data},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials:true,
        })
        dispatch(setUserData(userResponse.data))



    }catch (e) {

    }
}


export const changePassword =(changePassword:string,newPass:string)=>async (dispatch:AppDispatch)=>{
    try {
        const response = await AuthService.ChangePass(changePassword,newPass)
        dispatch(setErrorStatusChangePass({
            status:200,
            message:''
        }))
    }catch (e:any) {
        dispatch(setErrorStatusChangePass({
            status:e.response.status,
            message:e.response?.data?.message
        }))
    }
}

export const SendLink =(email:string,username:string)=>async (dispatch:AppDispatch)=>{
    try {
        const response = await AuthService.SendLink(email,username)
        dispatch(setErrorStatusSendLink({
            status:200,
            message:''
        }))
    }catch (e:any) {
        dispatch(setErrorStatusSendLink({
            status:e.response.status,
            message:e.response?.data?.message
        }))
    }
}


export const reloadReduxData = (username:any) =>async (dispatch:AppDispatch)=>{
    try {
        const response = await AuthService.reloadReduxData(username)
        console.log(response)
        dispatch(setAuth(true))
          dispatch(setUserData(response.data))
        Cookies.set('username', username, { expires: 365*5 });
    }catch (e:any) {
        dispatch(setErrorStatusLogin({
            status:e.response.status,
            message:e.response.data.message
        }))
    }
}