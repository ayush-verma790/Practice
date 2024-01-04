const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const resolvers = require("./mutations/index.js");
const { typeDefs } = require("./schema/typedefs.js");
const { dbConnect } = require("./config/db.js");


const server = new ApolloServer({ typeDefs, resolvers });
dbConnect();
startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(({ url }) => {

    console.log(`Server ready at ${url}`);
  });