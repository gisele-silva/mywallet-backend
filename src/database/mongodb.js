import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env);
let db = null;

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.MONGO_DB);
  console.log("banco de dados conectado");
} catch (error) {
  console.error("Erro ao conectar o banco de dados");
}

export default db;