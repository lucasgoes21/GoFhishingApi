import db from '../db/connection.js';
import { inventario, item } from '../models/schema.js';
import { and, eq } from 'drizzle-orm';

export async function adicionarItemInventario(userID, itemID, quantidade) {
  const [itemExistente] = await db
    .select()
    .from(inventario)
    .where(and(
      eq(inventario.idUsuario, userID),
      eq(inventario.iditem, itemID)
    ));

  if (itemExistente) {
    await db.update(inventario)
      .set({ quantidade: itemExistente.quantidade + quantidade })
      .where(eq(inventario.id, itemExistente.id));
  } else {
    await db.insert(inventario).values({
      idUsuario: userID,
      iditem: itemID,
      quantidade,
    });
  }

  const [itemencontrado] = await db.select().from(item).where(eq(item.id, itemID));

  return { sucesso: true, nome: itemencontrado.nome, descricao: itemencontrado.descricao, quantidade: quantidade };
}

export async function listarInventario(userID) {
  const itensTodos = await db.select().from(item);
  const itensUsuario = await db.select().from(inventario).where(eq(inventario.idUsuario, userID));

  const lista = itensTodos.map(it => {
    const em = itensUsuario.find(i => i.iditem === it.id);
    console.log(em);
    if(em){
      return {
        ...it,
        quantidade: em.quantidade,
      };
    }
    return null;
    
  }).filter(i => i !== null);
  return lista;
}