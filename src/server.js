import http from "node:http";
import { greet } from "./greeting.js";

const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  const name = new URL(req.url, "http://localhost").searchParams.get("name");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(greet(name) + "\n");
}).listen(port);
