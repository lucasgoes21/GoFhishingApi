import { cadastrarUsuario, loginUsuario } from '../controllers/authController.js';

export default async function authRoutes(fastify) {
  fastify.post('/cadastro', async (request, reply) => {
    const { nome, senha } = request.body;
    const resultado = await cadastrarUsuario(nome, senha);
    reply.send(resultado);
  });

  fastify.post('/login', async (request, reply) => {
    const { nome, senha } = request.body;
    const resultado = await loginUsuario(nome, senha);
    reply.send(resultado);
  });
}