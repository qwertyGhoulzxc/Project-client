export interface Login{
    username?:string
    email?:string;
    password:string
}
export interface SendLinkInt{
    username?:string
    email?:string;

}
export interface Registration{
    username:string;
    email:string;
    password:string;
}