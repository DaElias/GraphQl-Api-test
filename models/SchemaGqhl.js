const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Course {
  _id: ID
  title: String
  teacher: String
  topic: String
  description: String
}

type Query{
  "retorna todos los cursos"
    getCouses:[Course]
}
`);
