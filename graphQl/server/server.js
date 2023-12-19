import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from "@apollo/server/standalone"
const typeDefs=`
schema{
    query:Query
}
type Query{
    greeting:String 
}`;
const resolvers={
    Query:{
        greeting:()=>"Hello Ayush",
    },
}
const server=   new ApolloServer({typeDefs,resolvers })
const info=await  startStandaloneServer(server,{listen:{port:3000}})
console.log(`server running at ${info.url}`);