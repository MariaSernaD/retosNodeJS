import express from "express";
import colors from "colors";
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, desc: "Estudiar Node Js", status: "done" },
  { id: 2, desc: "Hacer ejercicio", status: "pending" },
  { id: 3, desc: "Leer documentación", status: "done" },
];

app.get("/api/tasks", (req, res) => {
  res.status(200).json({ tasks });
});

app.get("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  } else {
    res.status(200).json(task);
  }
});
app.listen(3000, () => {
  console.log(colors.cyan("Servidor corriendo en http://localhost:3000"));
});
