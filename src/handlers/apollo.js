const { ApolloServer } = require("apollo-server-cloudflare");
const {
  graphqlCloudflare
} = require("apollo-server-cloudflare/dist/cloudflareApollo");

const KVCache = require("../kv-cache");
const ConvertKit = require("../datasources/convertkit");
const resolvers = require("../resolvers");
const typeDefs = require("../schema");

const dataSources = () => ({
  convertkit: new ConvertKit()
});

const kvCache = { cache: new KVCache() };

const createServer = ({ graphQLOptions, request }) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
    context: () => {
      return {
        api_secret: request.headers.get("X-ConvertKit-Secret")
      };
    }
  });

const handler = (request, graphQLOptions) => {
  const server = createServer({ graphQLOptions, request });
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(
    request
  );
};

module.exports = handler;
