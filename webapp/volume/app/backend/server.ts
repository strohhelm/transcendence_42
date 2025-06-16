import fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'path';
import fs from 'fs/promises';

const server = fastify({
	logger: true
})

server.register(fastifyStatic, {
  root: path.join(__dirname, '../../public'),
});

server.get('/', async (request, reply) => {
  return reply.type('text/html').sendFile('index.html');
})

fastify.get('/templates/:name', async (request, reply) => {
  const { name } = request.params;

  // Sanitize name to avoid directory traversal (basic example)
  if (!name.match(/^[a-z0-9\-]+\.html$/i)) {
    return reply.status(400).send('Invalid template name');
  }

  try {
    const filePath = path.join(templatesDir, name);
    const html = await fs.readFile(filePath, 'utf-8');

    reply
      .header('Content-Type', 'text/html; charset=utf-8')
      .send(html);
  } catch (err) {
    reply.status(404).send('Template not found');
  }
});



server.listen({ port: 8080 , host:'0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})