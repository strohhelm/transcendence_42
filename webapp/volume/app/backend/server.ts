import fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import fs from 'fs/promises';
import { PathLike } from 'fs';

const templatesDir = "/app/app/templates"
const server = fastify({
	logger: true
})

//tell the server wher static files are to server, so just the index.html, css and jsfiles can be in this path
server.register(fastifyStatic, {
  root: path.join(__dirname, '../../public'),
});

//serves the index.html
server.setNotFoundHandler( async (request, reply) => {
  return reply.sendFile('index.html');
})

//spa dynamic router endpoint
server.get('/page/:name', async (request, reply) => {
	console.log("\n\n");
	const route  = request.params as { name: string };
	if (route)
		console.log(route);
  // Sanitize name to avoid directory traversal (basic example)
  if (!route.name.match(/^[a-z0-9\-/]+$/i) && route) {
    return reply.code(400).send("Bad request");
  }
  try {
	const filePath = path.join(templatesDir, route.name + ".html");
	console.log(`current path: ${__dirname}`);
	console.log(`filePath path: ${filePath}`);
	await fs.access(filePath);
    const html = await fs.readFile(filePath, 'utf-8');
    reply.code(200).send(html);
  } catch (err) {
    reply.status(404).send('Template not found');
  }
  console.log("\n\n");
});



server.listen({ port: 8080 , host:'0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})