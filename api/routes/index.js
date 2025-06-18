import authRoutes from './authRoutes.js';
import peixeRoutes from './peixeRoutes.js';
import itemRoutes from './itemRoutes.js';

async function routes(fastify) {
  fastify.register(authRoutes, { prefix: '/auth' });
  fastify.register(peixeRoutes, { prefix: '/peixe' });
  fastify.register(itemRoutes, { prefix: '/item' });
}

export default routes;