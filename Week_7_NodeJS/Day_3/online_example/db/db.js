const knex = require("knex");
const knexFile = require("./knexfile");
const db = knex(knexFile.development);

// TODO in prod, use dependency injection
//to create knex instance so db access can be mocked
//for tests

// TODO in prod don't access knexFile.development directly
//but decide with env vars which config to use
module.exports = db;
