import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/AuthProvider';

function WeatherForecast() {
    const authContext = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if(authContext.acessToken === null || authContext.acessToken === ''){
            setTimeout(() => {
                navigate('/login', {replace: true})
            }, 1000);
        }
    }, [])

    return ( <>
        <h1>WeatherForecast</h1>
    </>);
}

export default WeatherForecast;