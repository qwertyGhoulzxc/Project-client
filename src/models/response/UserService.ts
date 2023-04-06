import $api from "../../http/index";
import {AxiosResponse} from "axios";
import {AuthResponse} from "./AuthResponse";
import {IUser} from "./IUser";

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }
}

