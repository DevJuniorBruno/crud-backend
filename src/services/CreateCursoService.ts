import prismaClient from "../prisma";

interface CursoRequest{
    name: string;
}

class CreateCursoService{
    async execute({name}:CursoRequest){


        const curso = await prismaClient.curso.create({
            data:{
                name:name
            }
        })

        return curso

    }
}

export { CreateCursoService};