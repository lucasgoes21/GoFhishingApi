const db = require('./connection');
const {migrate} = require('drizzle-orm/better-sqlite3/migrator');

require('../models/especie');
require('../models/especieUsuario');
require('../models/usuario');

async function runMigrations(){
    await migrate(db, {migrationsFolder: './migrations'});
    console.log("create migration\n")
}

module.exports = runMigrations;
