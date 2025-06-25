import { adicionarItemInventario, listarInventario } from '../controllers/itemController.js';

export default async function itemRoutes(fastify, opts) {
  fastify.post('/adicionarIteminventario', async (request, reply) => {
    const { userID, itemID, quantidade } = request.body;
    const resultado = await adicionarItemInventario(userID, itemID, quantidade);
    reply.send(resultado);
  });

  fastify.get('/inventario/:userID', async (request, reply) => {
    const { userID } = request.params;
    const resultado = await listarInventario(Number(userID));
    reply.send(resultado);
  });

}