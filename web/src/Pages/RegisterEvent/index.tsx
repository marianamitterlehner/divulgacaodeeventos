import React, { useState, useEffect } from 'react';
import {} from 'react-router-dom'

import './style.css';


function RegisterEvent() {
    return (
        <div className="page-login">
            <h1>Cadastro de Evento</h1>
            <div className="conteiner">
                <form action="">
                    <input type="text" placeholder="Nome do Evento"/>
                    <input type="text" placeholder="Local"/>
                    <input type="text" placeholder="Foto"/>
                    <textarea placeholder="Comentário"/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterEvent;