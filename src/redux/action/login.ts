import { login } from './../constant/index';

export type TUser = {
    name:string,
    password:string
}

export const loginAction = (payload:TUser)=>({
    type:login,
    payload:payload
})