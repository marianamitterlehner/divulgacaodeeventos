import React, { useState, useEffect } from 'react';
import {} from 'react-router-dom'

import './style.css';


function Login() {
    return (
        <div className="page-login">
            <h1>Divulgação de Evento</h1>
            <div className="conteiner">
                <h2>Login</h2>
                <form action="">
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="senha"/>
                    <button type="submit">Entrar</button>
                    <a href="/cadastro">Cadastre-se</a>
                </form>
            </div>
        </div>
    )
}

export default Login;