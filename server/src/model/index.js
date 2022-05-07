const config = require("../dbConfig/dbConfig")
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,

});
sequelize.authenticate()
.then(()=>{
  console.log('database is connected');
}).catch((err)=>{
  console.log('database connection error');
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync();
module.exports = {
  db,
  sequelize
};

