import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthContext } from "../hooks/AuthProvider";
import usePrivateAuth from "../hooks/usePrivateAuth";
import { WeatherForecast } from "../POJO/WeatherForecast";
import { getToken } from "../services/LoginService";
import ModalTemp from "./ModalTemp";

function WeatherForecastTable() {
  const { acessToken } = useAuthContext()
  const token: string | undefined = getToken()
  const [list, setList] = useState<WeatherForecast[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [erro, setErro] = useState<string>("");
  const { get } = usePrivateAuth()
  const [selectedRow, setSelectedRow] = useState<WeatherForecast>()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
 
  useEffect(() => {
    get<WeatherForecast[]>("/WeatherForecast", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
      .then((res) => {
        setList(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setErro(err.message)
        setIsLoading(false)
      })

  }, [])

const selectRow = (e : HTMLButtonElement) => {
  const selectedIndex : number =  +e.id
  setSelectedRow(list[selectedIndex])
  setShow(true)
}

  if (isLoading) {
    return (<h2>Carregando...</h2>)
  } else if (erro) {
    return (<h2>Ops, algo deu errado</h2>)
  } else {
    return (
      <>
        <h1>Weather Forecast</h1>
        <Table  bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>TemperatureC</th>
              <th>Summary</th>
              <th>TemperatureF</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {list.map((clima: WeatherForecast, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{clima.Date}</td>
                <td>{clima.TemperatureC}</td>
                <td>{clima.Summary}</td>
                <td>{clima.TemperatureF}</td>
                <td>
                    <Button id={i.toString()} 
                            onClick={(e) => selectRow(e.currentTarget)}>
                              Expandir
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {ModalTemp(selectedRow, show, handleClose)}
      </>
    )
  }
}

export default WeatherForecastTable;
