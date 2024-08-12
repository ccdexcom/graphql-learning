const { GraphQLHandler } = require("graphql-mocks");

const handler = new GraphQLHandler({
  middlewares: [],
  resolverMap: {
    Query: {
      helloWorld() {
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
        }
      `,
  },
});

module.exports = handler;
