import {IUser,IError} from "../response/IUser";

export interface UserSliceInterface{
    user:IUser;
    isAuth:boolean;
    LoginError:IError
    RegistrError:IError
    ChangePassError:IError
    SendLinkError:IError
    ChangeUsername:IError
    ChangeName:IError
    ChangeDescription:IError
    ChangeProfile:{
        img:boolean
    }
    lastErrorName:string;

}