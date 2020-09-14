import {Request, Response} from 'express';
import db from '../database/connection';

export default class EventController {
    async index(request:Request, response:Response){
        const event = await db('events').select('*');
    
        return response.json(event);
    }

    async create(request:Request, response:Response){
        const {evento, local, foto, comentario} = request.body;
        const id_user = request.headers.authorization;
    
        const [id] = await db('events').insert({
            evento,
            local,
            foto, 
            comentario, 
            id_user
        })
        
        return response.json({id})
    }

    async delete(request:Request, response:Response){
        const {id} = request.params;
        const id_user = request.headers.authorization;

        const event = await db('events')
            .where('id_event', id)
            .select('id_user')
            .first();

        if(event.id_user != id_user){
            return response.status(401).json({error: 'Operação não autorizada'})
        }

        await db('events').where('id_event', id).delete();
        return response.status(204).send();
    }
}