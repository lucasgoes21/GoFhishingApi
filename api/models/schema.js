import { real, sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const especies = sqliteTable('especies', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    nome: text('nome').notNull(),
    nomeCientifico: text('nomeCientifico').notNull(),
    tamanhoMedio: text('tamanhoMedio').notNull(),
    pesoMedio: text('pesoMedio').notNull(),
    nativa: integer('nativa',{ mode: 'boolean' }).notNull(),

    tamanhoMinimo: real('tamanhoMinimo'),
    tamanhoMaximo: real('tamanhoMaximo'),
    icone: text('icone')
});

export const especieUsuario = sqliteTable('especieUsuario', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    idUsuario: integer('idUsuario').notNull().references(() => usuarios.id, {onDelete: 'cascade'}),
    idEspecie: integer('idEspecie').notNull().references(() => especies.id, {onDelete: 'cascade'}),
    tamanho: real('tamanho'),
    conhecido: integer({ mode: 'boolean' }, 'conhecido') 
});

export const usuarios = sqliteTable('usuarios', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    nome: text('nome').notNull(),
    senha: text('senha').notNull()
});

export const item = sqliteTable('item', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    nome: text('nome').notNull(),
    descricao: text('descricao').notNull()
});

export const inventario = sqliteTable('inventario', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    idUsuario: integer('idUsuario').notNull().references(() => usuarios.id, {onDelete: 'cascade'}),
    iditem: integer('iditem').notNull().references(() => item.id, {onDelete: 'cascade'}),
    quantidade: integer('quantidade').notNull(),
});

