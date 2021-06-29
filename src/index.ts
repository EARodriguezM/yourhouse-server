//require('dotenv').config();

import { ApolloServer } from 'apollo-server';
import { seed } from './temp/seed';
import { connectDb } from './database';
import { typeDefs, resolvers } from './graphql';


const corsOptions = {
  origin: 'https://yourhouses.netlify.app',
  credentials: true
}

const start = async () => {
  const db = await connectDb();
  const server = new ApolloServer({
    cors: {
      credentials: true,
      origin: (origin, callback) => {
          const whitelist = [
              "https://yourhouses.netlify.app"
          ];

          if (whitelist.indexOf(origin!) !== -1) {
              callback(null, true)
          } else {
              callback(new Error("Not allowed by CORS"))
          }
      }
  },
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({ db, req, res }),
    playground: true,
    introspection: true,
  });

  server
    .listen({ port: process.env.PORT || 5000 })
    .then(({ url }) => console.log(`Server ready at ${url}. `));
  seed();
};

start();
