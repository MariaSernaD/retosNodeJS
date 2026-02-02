import http from "http";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.writeHead(200, { "Content-type": "text/plain" });
  if (url === "/listaDeTareas") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Obteniendo la lista de tareas..." }));
    } else if (method === "POST") {
      res.statusCode = 201;
      res.end(JSON.stringify({ message: "Creando una nueva tarea: " }));
    } else if (method === "PUT") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: "Actualizando una tarea existente: " }),
      );
    } else if (method === "DELETE") {
      res.statusCode = 204;
      res.end(JSON.stringify({ message: "Tarea eliminada correctamente" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Método no soportado" }));
    }
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
