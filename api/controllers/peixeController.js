import  db  from '../db/connection.js';
import { especieUsuario, especies } from '../models/schema.js';
import { and, eq } from 'drizzle-orm';

export async function registrarCaptura(userID, peixeID, tamanho) {
  const [registroExistente] = await db
    .select()
    .from(especieUsuario)
    .where(and(
      eq(especieUsuario.idUsuario, userID),
      eq(especieUsuario.idEspecie, peixeID)
    ));

  if (registroExistente) {
    if (tamanho > registroExistente.tamanho) {
      await db.update(especieUsuario)
        .set({ tamanho, conhecido: 1 })
        .where(eq(especieUsuario.id, registroExistente.id));
    }
  } else {
    await db.insert(especieUsuario).values({
      idUsuario: userID,
      idEspecie: peixeID,
      tamanho,
      conhecido: 1,
    });
  }

  return { sucesso: true };
}

export async function marcarComoVisto(userID, peixeID) {
  const [registroExistente] = await db
    .select()
    .from(especieUsuario)
    .where(and(
      eq(especieUsuario.idUsuario, userID),
      eq(especieUsuario.idEspecie, peixeID)
    ));

  if (registroExistente) {
    await db.update(especieUsuario)
      .set({ conhecido: 1 })
      .where(eq(especieUsuario.id, registroExistente.id));
  } else {
    await db.insert(especieUsuario).values({
      idUsuario: userID,
      idEspecie: peixeID,
      conhecido: 1,
      tamanho: null,
    });
  }

  return { sucesso: true };
}

export async function listarPeixedex(userID) {
  const especiesTodas = await db.select().from(especies);
  const vistos = await db.select().from(especieUsuario).where(eq(especieUsuario.idUsuario, userID));

  const peixedex = especiesTodas.map(especie => {
    const visto = vistos.find(v => v.idEspecie === especie.id);
    return {
      ...especie,
      conhecido: visto?.conhecido == 1,
      tamanho: visto?.tamanho || null,
      capturado: visto?.tamanho != null,
    };
  });

  return peixedex;
}
