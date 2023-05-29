import prismaClient from "../prisma";



class SingleCursoService{

    async execute(id:string){

        const existingCourse = await prismaClient.curso.findMany({
            where: {
                id
            }
        })

        if(!existingCourse) {
            throw new Error('Curso nao encontrado');
        }

        return existingCourse;

    }

}

export {SingleCursoService}