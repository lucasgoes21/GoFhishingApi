import  db  from '../db/connection.js';
import { usuarios } from '../models/schema.js';
import { eq } from 'drizzle-orm';

export async function cadastrarUsuario(nome, senha) {
  const [user] = await db.select().from(usuarios).where(eq(usuarios.nome, nome));
  if (user) {
    return { sucesso: false, mensagem: 'Usuário já existe' };
  }
  await db.insert(usuarios).values({ nome, senha });
  const [user2] = await db.select().from(usuarios).where(eq(usuarios.nome, nome));
  return { sucesso: true, userID: user2.id };
}

export async function loginUsuario(nome, senha) {
  const [user] = await db.select().from(usuarios).where(eq(usuarios.nome, nome));
  if (user && user.senha === senha) {
    return { sucesso: true, userID: user.id };
  } else {
    return { sucesso: false, mensagem: 'Credenciais inválidas' };
  }
}
