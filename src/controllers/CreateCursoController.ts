import {Request, Response} from 'express';
import { CreateCursoService } from '../services/CreateCursoService';

class CreateCursoController{
    async handle(req:Request, res: Response){
        const {name} = req.body;

        const createCursoService = new CreateCursoService();

        const curso = await createCursoService.execute({
            name: name
        })

        return res.json(curso)

    }
}

export { CreateCursoController};