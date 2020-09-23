import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';


function RegisterUser() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleCreateUser(e: FormEvent){
        e.preventDefault();
        const data = {name, email, senha};

        api.post('users', data)
        .then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro!');
        });
    }

    return (
        <div className="page-primary">
            <h1>Cadastro de Usuário</h1>
            <div className="conteiner">
                <form onSubmit={handleCreateUser}>
                    <input type="text" placeholder="Nome" value={name} onChange={(e)=> {setName(e.target.value)}} />
                    <input type="email" placeholder="E-mail" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input type="password" placeholder="Senha" value={senha} onChange={(e)=> {setSenha(e.target.value)}}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <Link to="/">Voltar ao Login</Link>
        </div>
    )
}

export default RegisterUser;