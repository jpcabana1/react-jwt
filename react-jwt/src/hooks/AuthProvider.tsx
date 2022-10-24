import React, { createContext, useContext, useState } from 'react';
import { AuthContextState } from '../POJO/AuthContextState';

export const AuthContext = createContext<AuthContextState>({
    acessToken: '',
    user: '',
    pass: '',
    setAcessToken(a) {
    },
    setUser(a) {
    },
    setPass(a) {
    },
})

export const useAuthContext = () => useContext(AuthContext)
