import {Request, Response} from 'express';
import db from '../database/connection';

export default class UserController {
    async index(request:Request, response:Response){
        const users = await db('users').select('*');
    
        return response.json(users);
    }

    async create(request:Request, response:Response){
        const {name, email, senha} = request.body;
    
        await db('users').insert({
            name, 
            email, 
            senha
        })
        
        return response.json({name})
    }
}