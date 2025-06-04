const Database = require('better-sqlite3');
const {drizzke, drizzle} = require('drizzle-orm/better-sqlite3')

const sqlite = new Database('./goFishing.db')

const db = drizzle(sqlite)

module.exports = db