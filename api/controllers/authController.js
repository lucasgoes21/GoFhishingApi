import  db  from '../db/connection.js';
import { usuarios } from '../models/schema.js';
import { eq } from 'drizzle-orm';

export async function cadastrarUsuario(nome, senha) {
  await db.insert(usuarios).values({ nome, senha });
  return { sucesso: true };
}

export async function loginUsuario(nome, senha) {
  const [user] = await db.select().from(usuarios).where(eq(usuarios.nome, nome));
  if (user && user.senha === senha) {
    return { sucesso: true, userID: user.id };
  } else {
    return { sucesso: false, mensagem: 'Credenciais inválidas' };
  }
}
