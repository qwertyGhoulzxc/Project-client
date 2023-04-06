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