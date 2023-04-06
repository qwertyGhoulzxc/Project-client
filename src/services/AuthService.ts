import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse, ReloadData, SetAvatarR} from "../models/response/AuthResponse";



export default class AuthService{
    static async login(username:string,password:string,email:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login',{username,email,password})
    }
    static async  changeUsername(username:string,newUsername:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/change/username',{username,newUsername})
    }


    static async registration(username:string,password:string,email:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/registration',{email,password,username})
    }

    static async logout():Promise<void>{
        return $api.post('/logout')
    }

    static async ChangePass(changePassword:string,newPass:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/change/Bylink',{changePassword,newPass})
    }

    static async SendLink(email:string,username:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/forgotpass',{email,username})
    }

static async reloadReduxData(username:any):Promise<AxiosResponse<ReloadData>>{
    return $api.post<ReloadData>('/reloadataredux',{username})
}



}

