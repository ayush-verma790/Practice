const { ApolloServer } = require("@apollo/server")
const {startStandaloneServer} =require("@apollo/server/standalone")
const { dbConnect } = require("./config/db.js");
const typeDefs=`
type Query {
    hello : String!       
}

`;
 const resolvers = {
    Query : {
        hello : () => "World"
    }
 }

const server=new ApolloServer({typeDefs,resolvers});
dbConnect();

const connect = async () => {
    const {url} = await startStandaloneServer(server,{

        listen: { port: 9000 },
      });
    
      console.log({url})
}
connect();