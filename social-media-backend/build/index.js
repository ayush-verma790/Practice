"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
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
const gqlserver = new server_1.ApolloServer({
    typeDefs,
    resolvers,
});
gqlserver.start().then(() => {
    app.get("/", (req, res) => {
        res.json({ message: "Server running...." });
    });
    app.use('/graphql', (0, express4_1.expressMiddleware)(gqlserver));
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}/graphql`));
});
