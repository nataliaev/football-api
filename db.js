const Sequelize = require('sequelize');

databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl);  //connection string DONT'T POST AT GITHUB

db.sync()
  .then(() => console.log('DataBase was updated'))
  .catch(console.error)

module.exports = db;