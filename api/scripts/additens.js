import Database from 'better-sqlite3';
import {drizzle} from 'drizzle-orm/better-sqlite3';
import {item} from "../models/schema.js";
import { desc } from 'drizzle-orm';

const sqlite = new Database('../goFishing.db')

const db = drizzle(sqlite)

const dados = [
  {
    nome: "teste",
    descricao: "faz alguma coisa"
  },
  {
    nome: "teste2",
    descricao: "faz alguma coisa"
  }
];

async function inseriritens() {
  try {
    await db.insert(item).values(dados);
    console.log("Itens inseridos com sucesso!");
  } catch (err) {
    console.error("Erro ao inserir itens:", err);
  }
}

inseriritens();