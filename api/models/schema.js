const {real, sqliteTable, integer, text} = require('drizzle-orm/sqlite-core')

export const especies = sqliteTable('especies', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    nome: text('nome').notNull(),
    nomeCientifico: text('nomeCientifico').notNull(),
    tamanhoMedio: text('tamanhoMedio').notNull(),
    pesoMedio: text('pesoMedio').notNull(),
    nativa: integer('nativa',{ mode: 'boolean' }).notNull(), //1 - sim 0 - nao
});

export const especieUsuario = sqliteTable('especieUsuario', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    idUsuario: integer('idUsuario').notNull().references(() => usuarios.id, {onDelete: 'cascade'}),
    idEspecie: integer('idEspecie').notNull().references(() => especies.id, {onDelete: 'cascade'}),
    tamanho: real('tamanho'),
    conhecido: integer({ mode: 'boolean' }, 'conhecido') // sera q funciona? se pa
});

export const usuarios = sqliteTable('usuarios', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    nome: text('nome').notNull(),
    senha: text('senha').notNull()
});