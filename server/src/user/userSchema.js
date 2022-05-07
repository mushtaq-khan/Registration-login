const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const register = require('./userMutation')
const login = require('./userQuery');

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "mutations",
    fields: { register }
})

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Query",
    fields: { login }
})

module.exports = new GraphQLSchema({
    mutation: MutationType,
    query: QueryType
})