"use strict";
// require('dotenv').config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const database_1 = require("./database");
const graphql_1 = require("./graphql");
const corsOptions = {
    origin: 'https://yourhouses.netlify.app',
    credentials: true
};
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectDb)();
    const server = new apollo_server_1.ApolloServer({
        cors: {
            credentials: true,
            origin: (origin, callback) => {
                // const whitelist = [
                //     "https://yourhouses.netlify.app",
                //     "https://yourhouses.herokuapp.com/",
                //     "https://studio.apollographql.com/"
                // ];
                // if (whitelist.indexOf(origin!) !== -1) {
                //     callback(null, true)
                // } else {
                //     callback(new Error("Not allowed by CORS"))
                // }
                // Allow any origin
                callback(null, true);
            }
        },
        resolvers: graphql_1.resolvers,
        typeDefs: graphql_1.typeDefs,
        context: ({ req, res }) => ({ db, req, res }),
        introspection: true,
    });
    server
        .listen({ port: process.env.PORT || 5000 })
        .then(({ url }) => console.log(`Server ready at ${url}. `));
});
start();
