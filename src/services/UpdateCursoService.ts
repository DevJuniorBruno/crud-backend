import prisma from '../prisma';

class UpdateCursoService {
  async execute(id: string, name: string) {
    // Verifique se o curso existe antes de atualizá-lo
    const existingCourse = await prisma.curso.findUnique({ where: { id } });

    if (!existingCourse) {
      throw new Error('Curso não encontrado');
    }

    const updatedCourse = await prisma.curso.update({
      where: {
        id 
    },
      data:{
        name
    }  
    });

    return updatedCourse;
  }
}

export {UpdateCursoService};
