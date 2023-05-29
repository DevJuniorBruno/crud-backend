import prismaClient from '../prisma';


class ListCursosService{

    async execute(  ){

        const cursos = prismaClient.curso.findMany({
          select:{
            id:true,
            name:true,
          }
        })

        return cursos;

    }

}

export { ListCursosService }