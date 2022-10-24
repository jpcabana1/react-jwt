import axios, { AxiosResponse } from "axios";
import { User } from "../POJO/User";
import { authInstance } from "./AuthAxios";

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
        console.log(response.data)
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

