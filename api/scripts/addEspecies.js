import Database from 'better-sqlite3';
import {drizzle} from 'drizzle-orm/better-sqlite3';
import {especies} from "../models/schema.js";

const sqlite = new Database('../goFishing.db')

const db = drizzle(sqlite)

const dados = [
  {
    nome: "Jaú",
    nomeCientifico: "Zungaro zungaro",
    tamanhoMedio: "Até 1,4 metros",
    pesoMedio: "até 50 kg",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "dezembro a março",
    nativa: "Sim"
  },
  {
    nome: "Piracanjuba",
    nomeCientifico: "Brycon orbignyanus",
    tamanhoMedio: "Até 70 cm",
    pesoMedio: "até 6 kg",
    alimentacao: "Onívoro",
    periodoOcorrencia: "setembro a janeiro",
    nativa: "Sim"
  },
  {
    nome: "Dourado",
    nomeCientifico: "Salminus brasiliensis",
    tamanhoMedio: "Até 1 metro",
    pesoMedio: "2 a 10 kg",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "fevereiro a outubro",
    nativa: "Sim"
  },
  {
    nome: "Tilápia do Nilo",
    nomeCientifico: "Oreochromis niloticus",
    tamanhoMedio: "20 a 30 cm",
    pesoMedio: "até 1 kg",
    alimentacao: "Onívoro",
    periodoOcorrencia: "todo o ano",
    nativa: "Não"
  },
  {
    nome: "Bagre africano",
    nomeCientifico: "Clarias gariepinus",
    tamanhoMedio: "1 a 1,5 m",
    pesoMedio: "60 kg",
    alimentacao: "Onívoro",
    periodoOcorrencia: "setembro a janeiro",
    nativa: "Não"
  },
  {
    nome: "Sardinha-de-água-doce",
    nomeCientifico: "Triportheus signatus",
    tamanhoMedio: "10-20 cm",
    pesoMedio: "10-30g",
    alimentacao: "Onívoro",
    periodoOcorrencia: "maio a outubro",
    nativa: "Não"
  },
  {
    nome: "Surubim",
    nomeCientifico: "Pseudoplatystoma corruscans",
    tamanhoMedio: "Até 1,90 m",
    pesoMedio: "até 100 kg",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "setembro a março",
    nativa: "Sim"
  },
  {
    nome: "Traíra",
    nomeCientifico: "Hoplias malabaricus",
    tamanhoMedio: "até 60 cm",
    pesoMedio: "50 a 390 g",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "setembro a fevereiro",
    nativa: "Sim"
  },
  {
    nome: "Tucunaré amarelo",
    nomeCientifico: "Cichla monoculus",
    tamanhoMedio: "cerca de 1 metro",
    pesoMedio: "até 14 kg",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "dezembro a maio",
    nativa: "Não"
  },
  {
    nome: "Tucunaré azul",
    nomeCientifico: "Cichla piquiti",
    tamanhoMedio: "30 a 50 cm",
    pesoMedio: "6 a 8 kg",
    alimentacao: "Carnívoro",
    periodoOcorrencia: "maio e setembro",
    nativa: "Não"
  },
  {
    nome: "Lambari",
    nomeCientifico: "Astyanax",
    tamanhoMedio: "10 a 15 cm",
    pesoMedio: "20 a 50 gramas",
    alimentacao: "Onívoro",
    periodoOcorrencia: "dezembro a março",
    nativa: "Sim"
  },
  {
    nome: "Pacu",
    nomeCientifico: "Piaractus mesopotamicus",
    tamanhoMedio: "50 cm",
    pesoMedio: "até 20 kg",
    alimentacao: "Onívoro",
    periodoOcorrencia: "Todo o ano",
    nativa: "Sim"
  }
];

async function inserirEspecies() {
  try {
    await db.insert(especies).values(dados);
    console.log("Espécies inseridas com sucesso!");
  } catch (err) {
    console.error("Erro ao inserir espécies:", err);
  }
}

inserirEspecies();