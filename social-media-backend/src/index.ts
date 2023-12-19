import express from "express";
import { ApolloServer } from "@apollo/server"; 
import { expressMiddleware} from "@apollo/server/express4";

const app = express();

const PORT = 4000;
app.use(express.json( ))

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hey, I am here',
  },
};


const gqlserver = new ApolloServer({
  typeDefs,
  resolvers,
});




gqlserver.start().then(() => {
  app.get("/", (req, res) => {
    res.json({ message: "Server running...." });
  });

  app.use('/graphql', expressMiddleware(gqlserver));

  app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/graphql`));
});
