const express = require("express");
const schema = require("./SchemaGqhl");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("../lib/resolvers");
class Server {
  constructor() {
    this.app = express();
    this.port = 3010;
    this.path = {
      graphqlPATH: "/api",
    };
    this.middleware();
  }

  middleware() {
    this.app.use(
      this.path.graphqlPATH,
      graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
      })
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servideor Corriendo en http://localhost:${this.port}${this.path.graphqlPATH}`
      );
    });
  }
}

module.exports = Server;
