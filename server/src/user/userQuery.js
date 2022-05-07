const User = require('../model/user');
const bcrypt = require("bcrypt");
const {signAccessToken} = require('../helpers/jwtHelper')
const { GraphQLString, GraphQLNonNull } = require('graphql');

const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, args) {
        try{
            const user  = await User.findOne({
                where: {
                    email: args.email,
                }
            })
          const password = user.password;
          const pass = await bcrypt.compare(args.password,password)
            if(pass){
                const token  = signAccessToken(user.email)
                return token
            }else{
                return 'error'
            }
        }catch(err){
            return err;
        }
    }
}

module.exports = login