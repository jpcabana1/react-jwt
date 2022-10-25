import axios, { AxiosResponse } from "axios";
import { User } from "../POJO/User";
import { authInstance } from "./AuthAxiosService";

export async function SignIn(params: User) {

    try {
        const response: AxiosResponse<string> = await authInstance.post<string>('/authenticate', {
            Username: params.Username,
            Password: params.Password
        },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const saveToken = (token : string) : void => {
    sessionStorage.setItem('token', token)
}

export const getToken = () : any => {
    const userSession : string | undefined = sessionStorage.getItem('token')?.toString()
    return userSession
}

export const saveUser = (user : string) : void => {
    sessionStorage.setItem('user', user)
}

export const getUser = () : any => {
    const userSession : string | undefined = sessionStorage.getItem('user')?.toString()
    return userSession
}

export const savePass = (pass : string) : void => {
    sessionStorage.setItem('pass', pass)
}


export const getPass = () : any => {
    const passSession : string | undefined = sessionStorage.getItem('pass')?.toString()
    return passSession
}

