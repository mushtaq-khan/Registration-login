const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./user/userSchema')
require('dotenv').config();
const db = require('./model');
db.sequelize.sync({ alter: true });
const app = express();
const port  = process.env.PORT; 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
  


app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})