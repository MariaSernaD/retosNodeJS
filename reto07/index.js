import express from 'express';
const app = express();
app.use(express.json());

//SIMULACIÓN DE BASE DE DATOS
let notes= [{id: 1, title: "Nota 1", content: "Contenido de la nota 1"},
    {id: 2, title: "Nota 2", content: "Contenido de la nota 2"},
    {id: 3, title: "Nota 3", content: "Contenido de la nota 3"},
    {id : 4, title: "Nota 4", content: "Contenido de la nota 4"}     
];
let currentId = 1;

//RUTAS
app.get("/api/notes", (req, res)=>{
    res.status(200).json({notes});
});

app.get("/api/notes/:id", (req, res)=>{
    const id= parseInt(req.params.id);
    const note = notes.find((n)=> n.id === id);

    if(!note){
        return res.status(404).json({error: "Nota no encontrada"});
    }
    res.status(200).json(note);
});


app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000")
});