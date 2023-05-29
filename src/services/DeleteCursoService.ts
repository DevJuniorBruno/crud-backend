import prismaClient from '../prisma';

interface RequestId{
    id:string
}

class DeleteIdCursoService{
    async execute ( {id}:RequestId){
        const course = await prismaClient.curso.delete({
            where:{
                id: id,
            },
        });

        return course;

    }
}

export {DeleteIdCursoService}

////////////////////////////////////////////////////////

