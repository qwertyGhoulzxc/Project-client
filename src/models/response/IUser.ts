import {changeUsernameI, reloadReduxData, SendLink, setAvatarServer} from "../../redux/reducers/requests";

export interface IUser{
email:string;
id:string;
    username:string;
    isActivated:boolean
    avatarImg:string
    description:string;
    name:string


}

export interface IError{
status:number;
message:string
}

interface ILoading{
    loginLoading:boolean;
    registrationLoading:boolean;
    LogOutLoading:boolean;
    checkAuthLoading:boolean;
    changeUsernameLoading:boolean;
    setAvatarServerLoading:boolean;
    SendLinkLoading:boolean;
    reloadReduxDataLoading:boolean;
    changeDescriptionLoading:boolean;
    changeNameLoading:boolean;
    changePasswordLoading:boolean
}

export interface ILoadingStatus{
    loadingStatus:ILoading
    LoadingStatus:boolean
}