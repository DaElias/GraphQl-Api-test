require("dotenv").config();
const express = require("express");
const { dbConection } = require("../database/dbConfig");
const schema = require("./SchemaGqhl");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("../lib/resolvers");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3080;
    this.path = {
      graphqlPATH: "/api",
    };

    this.middleware();
    this.connectdb();
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
  connectdb() {
    dbConection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running in http://localhost:${this.port}${this.path.graphqlPATH}`
      );
    });
  }
}

module.exports = Server;
