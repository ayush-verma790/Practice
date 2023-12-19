const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");
const port=3004;
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/graphql-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});