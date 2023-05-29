import { Request, Response } from 'express';
import { ListCursosService } from '../services/ListCursosService';

class ListCursosController{

    async handle(req: Request, res: Response){

        const listCursos = new ListCursosService();

        const cursos = await listCursos.execute()

        return res.json(cursos);

    }
}

export { ListCursosController }

