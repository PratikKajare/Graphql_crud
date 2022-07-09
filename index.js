 const { ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { db} = require("./db");
//  import { ApolloServer } from 'apollo-server-express';
//  import {ApolloServer, gql} from "apollo-server";

const server=new ApolloServer({
    typeDefs,
    resolvers:{
      Query,
      Mutation,
      Category,
      Product
    },
    context:{
      db
    }
});

server.listen().then(({ url }) => {
  console.log("server is up at " + url);
});