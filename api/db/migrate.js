import  db  from './connection.js';
import {migrate} from 'drizzle-orm/better-sqlite3/migrator';

import '../models/schema.js'; // Importando o schema para garantir que as tabelas estejam definidas


function runMigrations(){
    migrate(db, {migrationsFolder: './db/migrations'});
    console.log("create migration\n")
}

export default runMigrations;
