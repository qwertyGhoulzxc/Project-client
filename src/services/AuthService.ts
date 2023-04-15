import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse, ReloadData, SetAvatarR} from "../models/response/AuthResponse";
import {IUser} from "../models/response/IUser";



export default class AuthService{
    static async login(username:string,password:string,email:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login',{username,email,password})
    }
    static async  changeUsername(id:string,newUsername:string):Promise<AxiosResponse<IUser>>{
        return $api.post<IUser>('/change/username',{id,newUsername})
    }

    static async  changeDescription(id:string,newDescription:string):Promise<AxiosResponse<IUser>>{
        return $api.post<IUser>('/setdescription',{id,newDescription})
    }

    static async  changeName(id:string,newName:string):Promise<AxiosResponse<IUser>>{
        return $api.post<IUser>('/setname',{id,newName})
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

static async reloadReduxData(id:any):Promise<AxiosResponse<ReloadData>>{
    return $api.post<ReloadData>('/reloadataredux',{id})
}



}

