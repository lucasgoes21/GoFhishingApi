import { cadastrarUsuario, loginUsuario } from '../controllers/authController.js';

export default async function authRoutes(fastify, opts) {
  fastify.post('/cadastro', async (request, reply) => {
    const { email, senha } = request.body;
    const resultado = await cadastrarUsuario(email, senha);
    reply.send(resultado);
  });

  fastify.post('/login', async (request, reply) => {
    const { email, senha } = request.body;
    const resultado = await loginUsuario(email, senha);
    reply.send(resultado);
  });
}