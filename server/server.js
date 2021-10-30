const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const bodyParser = require("body-parser")
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection")

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true, parameterLimit: 1000000 }));
app.use(
  express.json({
    limit: "50mb",
  })
);
// app.use(bodyParser.json({limit: '50mb'}))
// app.use(bodyParser.urlencoded({limit: '50mb', parameterLimit: 100000, extended: true}))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
