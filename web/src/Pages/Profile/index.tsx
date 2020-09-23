import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FiTrash} from 'react-icons/fi';
import api from '../../services/api';
import './style.css'

interface Event {
    id:string;
    name: string;
    foto:string;
    local: string;
    comentario: string;
}

const Profile : React.FC<Event> = () => {

    const [event, setEvent] = useState([]);
    const [like, setLike] = useState(0);
    const [deslike, setDeslike] = useState(0);

    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        api.get('likeEvents').then(response => {
            const { like, deslike } = response.data;
            setLike(like);
            setDeslike(deslike);
        })
    }, []);

    function handleCreateLike() {
            api.post('likeEvents', {
                like
            })
    }
    function handleCreateDesLike() {
        api.post('likeEvents', {
            deslike
        })
    }

    useEffect(() => {
        api.get('events', {
            headers:{
                Authorization: userId
            }
        }).then(response => {
           setEvent(response.data);
        })
    }, [userId]);

    async function handleDeleteEvent(id:Event) {
        try{
            await api.delete(`events/${id}`, {
                headers:{
                    Authorization: userId
                }
            })
        }catch(err){
            alert('Erro ao deletar caso!')
        }
    }

    return (
        <div className="container-profile" >
            <div className="navegation">
                <h3>Bem vindo, {userEmail} </h3>
                <div className="nav">
                    <Link to="/register-event">Cadastrar novo evento</Link>
                    <button>Sair</button>
                </div>
            </div>
            <div className="container-box">
                <div className="form-box">{
                    event.map((event:Event) =>{
                        return(
                            <div>
                                <div className="img-container">
                                    <img src={event.foto} alt="Foto do Evento"/>
                                    <button onClick={() => handleDeleteEvent(event.id)}><FiTrash size={15}  color='fff' /></button>
                                </div>
                                <div className="text-container">
                                    <p><b>Nome do Evento:</b>{event.name}</p>
                                    <p><b>Local:</b> {event.local} </p>
                                    <p><b>Comentário:</b> {event.comentario} </p>
                                </div>
                                <div className="like-container">
                                    <button onClick={handleCreateLike}> Like {setLike} </button>
                                    <button onClick={handleCreateDesLike}> Deslike {setDeslike}</button>
                                </div>
                         </div>
                        )
                    })
                }
                    

                </div>

            </div>
        </div>
    )
}

export default Profile;