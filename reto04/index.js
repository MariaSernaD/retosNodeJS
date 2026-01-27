import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync("./index.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(html);
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server runnig on port 8080");
});
