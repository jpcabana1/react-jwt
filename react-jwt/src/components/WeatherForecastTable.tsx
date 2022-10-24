import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/AuthProvider";
import usePrivateAuth from "../hooks/usePrivateAuth";
import { WeatherForecast } from "../POJO/WeatherForecast";

function WeatherForecastTable() {
  const { acessToken } = useAuthContext();
  const [list, setList] = useState<WeatherForecast[]>([]);
  const [erro, setErro] = useState<string>("");
  const { get } = usePrivateAuth()

  useEffect(() => {
    get<WeatherForecast[]>("/WeatherForecast", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acessToken}`
      },
      withCredentials: true
    })
    .then((res) => setList(res.data))
    .catch((err) => setErro(err))
  }, [])

  if (list.length > 0) {
    return (
      <>
        <h1>Weather Forecast</h1>
        <ul>
          {list.map((clima : WeatherForecast, i) => (
            <li key={i}>
              {clima.Date + ';'+ clima.TemperatureC + ';'+ clima.Summary + ';'+ clima.TemperatureF}
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (<h2>Ops, algo deu errado {erro}</h2>)
  }
}

export default WeatherForecastTable;
