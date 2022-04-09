import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from './schemas/';
import { resolvers } from './resolvers/';
import Cors from 'micro-cors';

const cors = Cors();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// apollo server v3 requires starting server
const startServer = apolloServer.start();

// need to wrap handler around cors as v3 apollo server defaults to studio
export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

// tell next.js to let GraphQL handling incoming requests
export const config = {
  api: {
    bodyParser: false,
  },
};
