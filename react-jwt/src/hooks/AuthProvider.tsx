import React, { createContext, useContext, useState } from 'react';
import { AuthContextState } from '../POJO/AuthContextState';

export const AuthContext = createContext<AuthContextState>({
    acessToken: '',
    setAcessToken(a) {
    },
})

export const useAuthContext = () => useContext(AuthContext)
