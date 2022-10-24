import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { AuthContext } from './hooks/AuthProvider';
import { AuthContextState } from './POJO/AuthContextState';




function App() {
  const [token, setToken] = useState<string>('')

  const state : AuthContextState = {
    acessToken: token,
    setAcessToken : setToken
  
  }

  return (
    <div className="App">
      <AuthContext.Provider value={state}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </AuthContext.Provider>

    </div>
  );
}
export default App;
