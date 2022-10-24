import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import WeatherForecast from "./components/WeatherForecast";
import { AuthContext } from "./hooks/AuthProvider";
import { AuthContextState } from "./POJO/AuthContextState";

function App() {
  const [token, setToken] = useState<string>('')
  const [usuario, setUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const state: AuthContextState = {
    acessToken: token,
    user: usuario,
    pass: senha,
    setAcessToken: setToken,
    setUser: setUsuario,
    setPass: setSenha
  };

  return (
    <div className="App">
      <AuthContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="/app" element={<NavBar />}>
            <Route index path="/app/weatherforecast" element={<WeatherForecast />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
