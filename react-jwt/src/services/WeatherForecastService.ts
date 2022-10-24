import { AxiosResponse } from "axios";
import { WeatherForecast } from "../POJO/WeatherForecast";
import { weatherInstance } from "./AuthAxiosService";

export async function GetWeatherForecast(token: string) {
  try {
    const response: AxiosResponse<WeatherForecast[]> =
      await weatherInstance.get<WeatherForecast[]>("/WeatherForecast", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
