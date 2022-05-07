require('dotenv').config()
const config = {
  host: process.env.HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
  dialect:process.env.DIALECT,
  port:process.env.PORT
}

module.exports = config;