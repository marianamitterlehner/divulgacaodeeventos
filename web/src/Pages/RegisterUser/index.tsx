import React, { useState, useEffect } from 'react';
import {} from 'react-router-dom'

import './style.css';


function RegisterUser() {
    return (
        <div className="page-login">
            <h1>Cadastro de Usuário</h1>
            <div className="conteiner">
                <form action="">
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Senha"/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterUser;