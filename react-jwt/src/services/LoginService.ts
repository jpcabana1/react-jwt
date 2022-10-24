import axios, { AxiosResponse } from "axios";
import { User } from "../DTOs/User";

export const instance = axios.create({
    baseURL: 'https://localhost:7082/',
    timeout: 1000,
    withCredentials: true
});

export async function SignIn(params: User) {

    try {
        const response: AxiosResponse<string> = await instance.post<string>('/authenticate', {
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

