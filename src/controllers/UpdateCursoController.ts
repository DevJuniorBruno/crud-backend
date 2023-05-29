import { Request, Response } from 'express';
import {UpdateCursoService} from "../services/UpdateCursoService";


class UpdateCursoController {

  async update(request: Request, response: Response) {

    const { id } = request.params;

    const { name } = request.body;

    try {

        const updateCurso = new UpdateCursoService();

        const curso = await updateCurso.execute(id, name)

        return response.json(curso);

    } catch (error) {

      console.error('Erro ao atualizar curso:', error);

      return response.status(500).json({ error: 'Erro ao atualizar curso' });

    }

  }

}

export {UpdateCursoController};
