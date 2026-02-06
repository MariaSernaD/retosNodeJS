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

app.post("/api/tasks", (req, res) => {
  const { desc, status } = req.body;
  if (!desc) {
    return res.status(400).json({ error: "La descripción es requerida" });
  }
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    desc: desc,
    status: "pending", // Por defecto, el estado es "pending"
  };
  tasks.push(newTask);
  res.status(201).json(tasks);
});

app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { desc, status } = req.body;

  const tasksIndex = tasks.findIndex((t) => t.id === id);

  if (tasksIndex === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  if (!desc || !status) {
    return res
      .status(400)
      .json({ error: "La descripción y el estado son requeridos" });
  }

  tasks[tasksIndex].desc = desc;
  tasks[tasksIndex].status = status;

  res.status(200).json({
    message: "Tarea actualizada correctamente",
    task: tasks[tasksIndex],
  });
});

app.listen(3000, () => {
  console.log(colors.cyan("Servidor corriendo en http://localhost:3000"));
});
