import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

import  runMigrations from './db/migrate.js';

import routes from './routes/index.js';

async function start() {
  try {
    if (runMigrations) await runMigrations();

    fastify.get('/', async (request, reply) => {
      return { status: 'Servidor On' };
    });

    await routes(fastify);

    await fastify.listen({ port: 3000 });

    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
}

start();