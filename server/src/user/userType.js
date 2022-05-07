const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
  } = require('graphql');

  const userType = new GraphQLObjectType({
      name:'user',
      fields:()=>({
        id:{type:GraphQLID},
        firstName:{type:GraphQLNonNull(GraphQLString)},
        lastName:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        password:{type:GraphQLNonNull(GraphQLString)}
      })
  })

  module.exports = userType;