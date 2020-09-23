import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    function handleLogin(e: FormEvent) {
        e.preventDefault(); 

        const response = api.post('sessions', {email, senha})
        .then(() => {
            localStorage.setItem('userEmail', email)
            localStorage.setItem('userSenha', senha)
            history.push('/profile');
        }).catch(()=>{
            alert('Erro no login!');
        });
    }

    return (
        <div className="page-primary">
            <h1>Divulgação de Evento</h1>
            <div className="conteiner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input type="password" placeholder="senha" value={senha} onChange={(e)=> {setSenha(e.target.value)}}/>
                    <button type="submit">Entrar</button>
                    <Link to="">Esqueci minha senha</Link>
                    <Link to="/register-user">Cadastre-se</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;