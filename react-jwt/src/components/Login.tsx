import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/AuthProvider';
import { savePass, saveToken, saveUser, SignIn, } from '../services/LoginService';

function Login() {
    const [mensagem, setMensagem] = useState<string>('')
    const { setAcessToken, setUser, setPass, user, pass } = useAuthContext();
    const navigate = useNavigate();

    const LogIn = async (event : React.FormEvent) => {
        event.preventDefault();
        saveUser(user)
        savePass(pass)
        await SignIn({ Username: user, Password: pass})
            .then((res) => {
                //setAcessToken(res)
                saveToken(res)
                navigate('/app/weatherforecast', {replace: true})
            })
            .catch(err => {
                setMensagem('Credenciais inválidas')
                setTimeout(() => setMensagem(''), 3000)
            })
    }

    return (
        <div className="App-header">
            <Form onSubmit={(e) => LogIn(e)}>
                <Form.Group className="mb-3" controlId="ControlInputUser">
                    <Form.Label>Usuário: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setUser(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInputPass">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type='password' onChange={(e) => setPass(e.target.value)}/>
                </Form.Group>
                <Button className="mb-3" variant='outline-primary' size='lg' type="submit">Login</Button>
            </Form>
            <Alert variant="danger" hidden={mensagem === ''}>{mensagem}</Alert>
        </div>
    );
}

export default Login;