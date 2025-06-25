import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { eq } from 'drizzle-orm';
import { item } from "../models/schema.js";

const sqlite = new Database('./goFishing.db')

const db = drizzle(sqlite)

const dados = [
  {
    nome: "Feromônio",
    descricao: "Odor que atrai peixes para perto de você, aumentando significativamente a chance de aparição de peixes maiores."
  },
  {
    nome: "Massa de Pesca",
    descricao: "Mistura de farinha e outros ingredientes que facilitam a captura de peixes.\nDiminui a quantidade de minigames em 1."
  },
  {
    nome: "Massa de Pesca Apimentada",
    descricao: "Mistura de farinha e pimenta que deixa o peixe mais agitado, e aumenta as recompensas.\nDiminui o tempo da realização do minigame em 30%."
  },
  {
    nome: "Massa de Pesca com Camomila",
    descricao: "Mistura de farinha e camomila que deixa o peixe mais calmo, e diminui as recompensas.\nAumenta o tempo da realização do minigame em 20%."
  },
];

async function inserirItens() {
  try {
    for (const itemData of dados) {
      // Verifica se já existe pelo nome
      const existente = await db.select().from(item).where(eq(item.nome, itemData.nome)).get();

      if (!existente) {
        // Insere se não existe
        await db.insert(item).values(itemData).run();
        console.log(`Item inserido: ${itemData.nome}`);
      } else {
        // Atualiza se houver diferença em algum campo
        let precisaAtualizar = false;
        for (const key in itemData) {
          if (itemData[key] !== existente[key]) {
            precisaAtualizar = true;
            break;
          }
        }
        if (precisaAtualizar) {
          await db.update(item)
            .set(itemData)
            .where(eq(item.nome, itemData.nome))
            .run();
          console.log(`Item atualizado: ${itemData.nome}`);
        } else {
          console.log(`Item já existe e está atualizado: ${itemData.nome}`);
        }
      }
    }
    console.log("Processo de inserção/atualização de itens concluído!");
  } catch (err) {
    console.error("Erro ao inserir/atualizar itens:", err);
  }
}

inserirItens();