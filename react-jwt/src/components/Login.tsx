import React, { useContext, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import AuthContext from '../hooks/AuthProvider';
import { SignIn } from '../services/LoginService';


function Login() {
    //const [auth, setAuth] = useState<string>('')
    const [mensagem, setMensagem] = useState<string>('')
    const { setAuth } = useContext(AuthContext);


    const LogIn = () => {
        SignIn({ Username: 'jpcabana', Password: '' })
            .then((res) => setAuth({res}))
            .catch(err => {
                console.log(err)
                setMensagem('Ops, parece que suas credenciais estão erradas ')
                setTimeout(() => setMensagem(''), 3000)
            })
    }

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