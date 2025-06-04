module.exports = {
    schema: './models/schema.js',
    out: './db/migrations',
    dialect:'sqlite',
    dbCredentials: {
    url: './goFishing.db',
  },
};