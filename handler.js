const { GraphQLHandler } = require("graphql-mocks");

const cities = new Map();

const handler = new GraphQLHandler({
  middlewares: [],
  resolverMap: {
    Query: {
      helloWorld(parent) {
        return `hello`;
      },
    },
  },
  dependencies: {
    graphqlSchema: `
        schema {
          query: Query
        }

        type Query {
          helloWorld: String
          helloMars: String
          helloNewYork: City
          cities: [String]
        }

        type City {
          name: String
          population: Int
          area: Int
          density: Int
          country: Country
        }

        type Country {
          name: String
          population: Int
          area: Int
          density: Int
        }
      `,
  },
});

module.exports = handler;
