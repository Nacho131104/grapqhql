

//Alejandro Lana
import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone";
import { resolvers } from "./resolvers.ts";
//import {Collection, MongoClient, ObjectId} from "mongodb"
import { schema } from "./schema.ts";
//import {cityModel} from "./types.ts";
/*
const mongoURL = Deno.env.get("mongoURL");

if (!mongoURL) {
  throw new Error("La variable de entorno 'mongoURL' no está configurada");
}


const client = new MongoClient (mongoURL)
await client.connect()
const dataBase = client.db('DataBase')

const contact_Collection = dataBase.collection<cityModel>('Ciudades')

*/
const server = new ApolloServer({
  typeDefs : schema,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context:async () => ({/*contact_Collection*/}),
  listen: { port: 9000 },
});


console.log(`Server running on: ${url}`);