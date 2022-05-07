const { GraphQLString, GraphQLNonNull, GraphQLID } = require('graphql');
const User = require('../model/user');
const bcrypt = require("bcrypt");
const userType = require('./userType');
const register = {
    type: userType,
    args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
        try{
            const hashPassword = args.password;
            const passwordHash = bcrypt.hashSync(hashPassword, 10);
            args.password = passwordHash;
            return await User.create(args)
        }catch(err){
            return err; 
        }
    }
}

module.exports = register