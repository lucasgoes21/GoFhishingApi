import authRoutes from './authRoutes.js';
import peixeRoutes from './peixeRoutes.js';

async function routes(fastify) {
  fastify.register(authRoutes, { prefix: '/auth' });
  fastify.register(peixeRoutes, { prefix: '/peixe' });
}

export default routes;