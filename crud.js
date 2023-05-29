const express = require('express');
const server = express();

server.use(express.json());

const cursos = []

//QUery params = ?nome=NodeJs
//Route Params = /curso/2
//Request Body = { nome: "NodeJs", tipo: "Backend"}


//make CRUD Create, Read, Update, Delete


//get curso of the index
server.get('/curso/:index', (req,res)=> {

    const {index} = req.params;

    return res.json(cursos[index]);

});

//get all cursos
server.get('/cursos', (req,res)=>{

    return res.json(cursos)
});


// create curso
server.post('/cursos', (req,res)=>{

    const { name } = req.body;

    cursos.push( name );

    return res.json( cursos );

});

//update the curso of the index
server.put("/cursos/:index", (req,res)=>{

    const {index} = req.params;

    const {name}= req.body;

    cursos[index] = name;

    return res.json(cursos);

});

//delete curso
server.delete("/cursos/:id", (req,res)=>{
    const {index} = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
});

console.log("Server Online");

server.listen(3000);
