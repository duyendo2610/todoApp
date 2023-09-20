import { TUser } from "../action/login"
import { login } from "../constant"

const initialUser:TUser[] = []
const LoginReducer = (state = initialUser, action: { type: any, payload:TUser })=>{
    switch(action.type){
        case login:
            return action.payload;
        default:
            return state;
    }
}

export default LoginReducer