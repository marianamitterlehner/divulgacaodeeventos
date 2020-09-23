import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';


function RegisterEvent() {

    const history = useHistory();

    const [evento, setEvento] = useState('');
    const [local, setLocal] = useState('');
    const [foto, setFoto] = useState('');
    const [comentario, setComentario] = useState('')

    function handleCreateEvent(e: FormEvent){
        e.preventDefault();
        api.post('events', {
            evento, local, foto, comentario
        }).then(() => {
            alert('Cadastro realizado!')
            history.push('/profile');
        }).catch(()=>{
            alert('erro no cadastro!')
        })
    }

    return (
        <div className="page-primary">
            <h1>Cadastro de Evento</h1>
            <div className="conteiner">
                <form onSubmit={handleCreateEvent} >
                    <input type="text" placeholder="Nome do Evento" value={evento} onChange={(e) => { setEvento(e.target.value)}} />
                    <input type="text" placeholder="Local" value={local} onChange={(e) => { setLocal(e.target.value)}} />
                    <input type="text" placeholder="Foto" value={foto} onChange={(e) => { setFoto(e.target.value)}}/>
                    <textarea placeholder="Comentário" value={comentario} onChange={(e) => { setComentario(e.target.value)}}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterEvent;