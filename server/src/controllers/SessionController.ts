import {Request, Response} from 'express';
import db from '../database/connection';

export default class SessionController {
    async create(request:Request, response:Response){
        const { email, senha } = request.body; 
        try {
            const user = await db('users').where('email', email).select('senha', 'name').first();
        
            if(senha !== user.senha){
                return response.status(400).json({error: 'password not compatible with email!'});
            } 

            return response.json(user.name)

        } catch (err) {
            return response.status(400).json({error: 'email and password not found!'});
        }
    }
}