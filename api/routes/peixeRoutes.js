import { registrarCaptura, marcarComoVisto, listarPeixedex} from '../controllers/peixeController.js';
  
  export default async function peixeRoutes(fastify, opts) {
    fastify.post('/pegouPeixe', async (request, reply) => {
      const { userID, peixeID, tamanho } = request.body;
      const resultado = await registrarCaptura(userID, peixeID, tamanho);
      reply.send(resultado);
    });
  
    fastify.post('/viuPeixe', async (request, reply) => {
      const { userID, peixeID } = request.body;
      console.log("asdasdasdasdasdasdasdasdasdasdasda\n\n",userID, peixeID);
      const resultado = await marcarComoVisto(userID, peixeID);
      reply.send(resultado);
    });
  
    fastify.get('/peixedex/:userID', async (request, reply) => {
      const { userID } = request.params;
      const resultado = await listarPeixedex(Number(userID));
      reply.send(resultado);
    });
  }