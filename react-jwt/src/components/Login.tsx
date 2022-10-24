import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import  { useAuthContext } from '../hooks/AuthProvider';
import { SignIn } from '../services/LoginService';


function Login() {
    const [mensagem, setMensagem] = useState<string>('')
    const { acessToken, setAcessToken } = useAuthContext();

    const LogIn = async () => {
        await SignIn({ Username: 'jpcabana', Password: '' })
            .then((res) => {
                const resp : string = res
                setAcessToken(resp)
                console.log(acessToken)
            })
            .catch(err => {
                console.log(err)
                setMensagem('Ops, parece que suas credenciais estão erradas ')
                setTimeout(() => setMensagem(''), 3000)
            })
    }

useEffect(() => {
    LogIn()
}, [])

    return (
        <div className="App-header">
            <Form>
                <Form.Group className="mb-3" controlId="ControlInputUser">
                    <Form.Label>Usuário: </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInputPass">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type='password' />
                </Form.Group>
                <Form.Group className="d-grid gap-2">
                    <Button variant='outline-primary' size='lg'>Login</Button>
                </Form.Group>
            </Form>

            <Alert variant="danger" hidden={mensagem === ''}>{mensagem}</Alert>
        </div>
    );
}

export default Login;